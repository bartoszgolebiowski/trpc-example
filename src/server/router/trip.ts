import { createRouter } from "./context";
import { z } from "zod";

export const tripRouter = createRouter()
  .query("getAll", {
    async resolve({ ctx }) {
      if (!ctx.session?.user?.id) {
        throw new Error("Not logged in");
      }
      return await ctx.prisma.trip.findMany({
        select: {
          name: true,
          id: true,
        },
        where: {
          ownerId: ctx.session.user.id,
        },
      });
    },
  })
  .query("getById", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ ctx, input }) {
      if (!ctx.session?.user?.id) {
        throw new Error("Not logged in");
      }
      return await ctx.prisma.trip.findFirst({
        where: {
          id: input.id,
        },
      });
    },
  })
  .mutation("addExpense", {
    input: z.object({
      name: z.string(),
      description: z.string().optional(),
      amount: z.number().positive(),
      tripId: z.string(),
    }),
    async resolve({ ctx, input }) {
      if (!ctx.session?.user?.id) {
        throw new Error("Not logged in");
      }

      try {
        return await ctx.prisma.expense.create({
          data: {
            name: input.name,
            description: input.description,
            amount: input.amount,
            createdAt: new Date(),
            creator: {
              connect: {
                id: ctx.session.user.id,
              },
            },
            trip: {
              connect: {
                id: input.tripId,
              },
            },
          },
        });
      } catch (err) {
        console.log(err);
        throw new Error("Error adding expense");
      }
    },
  })
  .mutation("appendUser", {
    input: z.object({
      id: z.string(),
      userId: z.string(),
    }),
    async resolve({ ctx, input }) {
      if (!ctx.session?.user?.id) {
        throw new Error("Not logged in");
      }
      return await ctx.prisma.trip.update({
        where: {
          id: input.id,
        },
        data: {
          participants: {
            connect: {
              id: input.id,
            },
          },
        },
      });
    },
  })
  .mutation("removeUser", {
    input: z.object({
      id: z.string(),
      userId: z.string(),
    }),
    async resolve({ ctx, input }) {
      if (!ctx.session?.user?.id) {
        throw new Error("Not logged in");
      }

      const trip = await ctx.prisma.trip.findFirst({
        where: {
          id: input.id,
        },
      });

      if (!trip) {
        throw new Error("Trip not found");
      }

      if (trip.ownerId !== ctx.session.user.id) {
        throw new Error("Not owner");
      }

      try {
        return await ctx.prisma.trip.update({
          where: {
            id: input.id,
          },
          data: {
            participants: {
              disconnect: {
                id: input.userId,
              },
            },
          },
        });
      } catch (err) {
        console.log(err);
        throw new Error("Unable to remove user");
      }
    },
  })
  .mutation("create", {
    input: z.object({
      name: z.string(),
      description: z.string().optional(),
    }),
    async resolve({ ctx, input }) {
      if (!ctx.session?.user?.id) {
        throw new Error("Not logged in");
      }
      try {
        const result = await ctx.prisma.trip.create({
          data: {
            ...input,
            createdAt: new Date(),
            ownerId: ctx.session.user.id,
          },
        });
        return result;
      } catch (err) {
        console.error(err);
        throw new Error("Could not create trip");
      }
    },
  });

export declare const appRouter: import("@trpc/server/dist/declarations/src/router").Router<{
    req: import("next").NextApiRequest;
    res: import("next").NextApiResponse<any>;
    session: import("next-auth").Session;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
}, {
    req: import("next").NextApiRequest;
    res: import("next").NextApiResponse<any>;
    session: import("next-auth").Session;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
}, {}, import("@trpc/server").Prefixer<Record<"getAll", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<{
    req: import("next").NextApiRequest;
    res: import("next").NextApiResponse<any>;
    session: import("next-auth").Session;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
}, {
    req: import("next").NextApiRequest;
    res: import("next").NextApiResponse<any>;
    session: import("next-auth").Session;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
}, {}, undefined, undefined, {
    id: string;
    name: string;
}[], unknown, {
    id: string;
    name: string;
}[]>> & Record<"getById", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<{
    req: import("next").NextApiRequest;
    res: import("next").NextApiResponse<any>;
    session: import("next-auth").Session;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
}, {
    req: import("next").NextApiRequest;
    res: import("next").NextApiResponse<any>;
    session: import("next-auth").Session;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
}, {}, undefined, undefined, import(".prisma/client").Trip, unknown, import(".prisma/client").Trip>>, "trip."> & import("@trpc/server").Prefixer<{
    getSession: import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<{
        req: import("next").NextApiRequest;
        res: import("next").NextApiResponse<any>;
        session: import("next-auth").Session;
        prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
    }, {
        req: import("next").NextApiRequest;
        res: import("next").NextApiResponse<any>;
        session: import("next-auth").Session;
        prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
    }, {}, undefined, undefined, import("next-auth").Session, unknown, import("next-auth").Session>;
} & Record<"getSecretMessage", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<{
    req: import("next").NextApiRequest;
    res: import("next").NextApiResponse<any>;
    session: import("next-auth").Session;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
}, {
    req: import("next").NextApiRequest;
    res: import("next").NextApiResponse<any>;
    session: import("next-auth").Session;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
}, {}, undefined, undefined, string, unknown, string>>, "auth.">, import("@trpc/server").Prefixer<Record<"addExpense", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<{
    req: import("next").NextApiRequest;
    res: import("next").NextApiResponse<any>;
    session: import("next-auth").Session;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
}, {
    req: import("next").NextApiRequest;
    res: import("next").NextApiResponse<any>;
    session: import("next-auth").Session;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
}, {}, undefined, undefined, import(".prisma/client").Expense, unknown, import(".prisma/client").Expense>> & Record<"appendUser", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<{
    req: import("next").NextApiRequest;
    res: import("next").NextApiResponse<any>;
    session: import("next-auth").Session;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
}, {
    req: import("next").NextApiRequest;
    res: import("next").NextApiResponse<any>;
    session: import("next-auth").Session;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
}, {}, undefined, undefined, import(".prisma/client").Trip, unknown, import(".prisma/client").Trip>> & Record<"removeUser", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<{
    req: import("next").NextApiRequest;
    res: import("next").NextApiResponse<any>;
    session: import("next-auth").Session;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
}, {
    req: import("next").NextApiRequest;
    res: import("next").NextApiResponse<any>;
    session: import("next-auth").Session;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
}, {}, undefined, undefined, import(".prisma/client").Trip, unknown, import(".prisma/client").Trip>> & Record<"create", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<{
    req: import("next").NextApiRequest;
    res: import("next").NextApiResponse<any>;
    session: import("next-auth").Session;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
}, {
    req: import("next").NextApiRequest;
    res: import("next").NextApiResponse<any>;
    session: import("next-auth").Session;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
}, {}, undefined, undefined, import(".prisma/client").Trip, unknown, import(".prisma/client").Trip>>, "trip."> & import("@trpc/server").Prefixer<{}, "auth.">, import("@trpc/server").Prefixer<{}, "trip."> & import("@trpc/server").Prefixer<{}, "auth.">, import("@trpc/server").DefaultErrorShape>;
export declare type AppRouter = typeof appRouter;

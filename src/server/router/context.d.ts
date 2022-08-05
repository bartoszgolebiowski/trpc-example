import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
export declare const createContext: (opts?: trpcNext.CreateNextContextOptions) => Promise<{
    req: import("next").NextApiRequest;
    res: import("next").NextApiResponse<any>;
    session: import("next-auth").Session;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
}>;
export declare const createRouter: () => import("@trpc/server/dist/declarations/src/router").Router<{
    req: import("next").NextApiRequest;
    res: import("next").NextApiResponse<any>;
    session: import("next-auth").Session;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
}, {
    req: import("next").NextApiRequest;
    res: import("next").NextApiResponse<any>;
    session: import("next-auth").Session;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
}, {}, {}, {}, {}, trpc.DefaultErrorShape>;

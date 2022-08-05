export declare const authRouter: import("@trpc/server/dist/declarations/src/router").Router<{
    req: import("next").NextApiRequest;
    res: import("next").NextApiResponse<any>;
    session: import("next-auth").Session;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
}, {
    req: import("next").NextApiRequest;
    res: import("next").NextApiResponse<any>;
    session: import("next-auth").Session;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
}, {}, {
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
}, {}, undefined, undefined, string, unknown, string>>, {}, {}, import("@trpc/server").DefaultErrorShape>;

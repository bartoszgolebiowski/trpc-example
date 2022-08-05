export declare const tripRouter: import("@trpc/server/dist/declarations/src/router").Router<{
    req: import("next").NextApiRequest;
    res: import("next").NextApiResponse<any>;
    session: import("next-auth").Session;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
}, {
    req: import("next").NextApiRequest;
    res: import("next").NextApiResponse<any>;
    session: import("next-auth").Session;
    prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
}, {}, Record<"getAll", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<{
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
}, {}, undefined, undefined, import(".prisma/client").Trip, unknown, import(".prisma/client").Trip>>, Record<"addExpense", import("@trpc/server/dist/declarations/src/internals/procedure").Procedure<{
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
}, {}, undefined, undefined, import(".prisma/client").Trip, unknown, import(".prisma/client").Trip>>, {}, import("@trpc/server").DefaultErrorShape>;

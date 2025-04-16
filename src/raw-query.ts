import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const rawQuery = async () => {
  const posts = await prisma.$queryRaw`Select * from posts`;
//   console.log(posts);

    await prisma.$queryRaw`TRUNCATE table "categories" CASCADE`
};

rawQuery();

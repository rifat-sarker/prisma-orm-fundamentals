import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // find all posts
  const allPosts = await prisma.post.findMany();

  // find first and find first or throw error -- find first post that matches the condition - just like find in js
  const firstPost = await prisma.post.findFirstOrThrow({
    where: {
      title: "Tittle",
    },
  });
  console.log({ firstPost });

  // find unique and find uniqueOrThrow -- have to use unique field
  const uniquePost = await prisma.post.findUnique({
    where: {
      id: 1,
    },
  });
  console.log({ uniquePost });
};

main();

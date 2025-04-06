import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // find all posts
  const allPosts = await prisma.post.findMany();

  // find first and find first or throw error -- find first post that matches the condition - just like find in js
  const firstPost = await prisma.post.findFirstOrThrow({
    where: {
      title: "Title6",
    },
    select: {
      title : true,
      content: true
    }
  });
  console.log({ firstPost });

  // find unique and find uniqueOrThrow -- have to use unique field
  const uniquePost = await prisma.post.findUnique({
    where: {
      id: 92,
    },
    select: {
      content: true,
    }
  });
  console.log({ uniquePost });
};

main();

/*
*select: to select specific fields.
* we can use select for create,update,delete,find operations



*/

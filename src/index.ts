import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
//   const post = await prisma.post.create({
// data: same datai rakhte hbe
//     data: {
//       title: "Title2",
//       content: "content.....",
//       authorName: "JOHNY",
//     },
//   });
//   console.log(post);

    const allPosts = await prisma.post.findMany();
    console.log(allPosts);
};

main();

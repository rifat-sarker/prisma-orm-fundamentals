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

    const createMany = await prisma.post.createMany({
        data: [
            {
                title: "Title2",
                content: "content2",
                authorName: "author2"
            },
            {
                title: "Title3",
                content: "content3",
                authorName: "author3"
            },
            {
                title: "Title4",
                content: "content4",
                authorName: "author4"
            },
        ]
    })
    console.log(createMany);
};

main();

/* NOTES
create vs createMany
create: create a single recoard, only shows object of recoard created
createMany: create multiple recoards, shows count of recoards created ex: count: 3
*/

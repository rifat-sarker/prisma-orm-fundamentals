import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updates = async () => {
  //   const singleUpdate = await prisma.post.update({
  //     where: {
  //       id: 81,
  //     },
  //     data: {
  //       title: "Title5",
  //     },
  //   });
  // //   console.log(singleUpdate);
  //   const updateMany = await prisma.post.updateMany({
  //     where: {
  //       title: "Title5",
  //     },
  //     data: {
  //       published: true,
  //     },
  //   });
  //   console.log(updateMany);

  const upsertData = await prisma.post.upsert({
    where: {
      id: 92,
    },
    update: {
      title: "Title6",
    },
    create: {
      title: "Title7",
      content: "content7",
    },
  });
  console.log(upsertData);
};
updates();

/** NOTES
 update vs updateMany
 * update: single update , directly shows updated object
 * updateMany: multiple update, shows count of updated recoards
 by default updateAt takes same time as current time but when we update recoard updatedAt update automatically.
 * upsert: if recoard is present it will update otherwise it will create new recoard
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deletes = async () => {
  // const deleteOne = await prisma.post.delete ({
  //     where: {
  //         id: 77
  //     }
  // })

  const deleteMany = await prisma.post.deleteMany({
    // where: {
    //   id: {
    //     in: [86, 87],
    //   },
    // },
    where: {
      published: false
    },
  });
  console.log(deleteMany);
};

deletes();

/* NOTES
delete vs delteMany
delete: for delete we have to use primary key
deleteMany: shows count of deleted recoards, we do not add condition it will delete all recoards ex: deleteMany({})


*/
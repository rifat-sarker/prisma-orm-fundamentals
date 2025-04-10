import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationalQueries = async () => {
  //fluent api
  // const result = await prisma.user.findUnique({
  //     where: {
  //         id: 1
  //     }
  // }).post();

  //

  // include query -  show both user and post info - like populate in mongoose
  const result = await prisma.user.findUnique({
    where: {
      id: 1,
    },
    include: {
      post: true,
    },
  });
  // console.log(result);

  const publishedPostUsers = await prisma.user.findMany({
    include: {
        post: {
            where: {
               published: true
            }
        }
    }
  });
  console.dir(publishedPostUsers, {depth: Infinity});
};

relationalQueries();

/** notes
 * Fluent api -- use one to get another one
 * include query -- just like populate in mongoose
 *
 *
 * */

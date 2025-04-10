import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const filtering = async () => {

    // AND filtering -- fullfuil every condition
  const andFiltering = await prisma.post.findMany({
    where: {
      AND: [
        {
          title: {
            contains: "Title1",
          },
        },
        {
          published: true,
        },
      ],
    },
  });

//   OR filtering - execute if any condition matched
  const orFiltering = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: "Title1",
          },
        },
        {
          published: true,
        },
      ],
    },
  });
  console.log("and filtering", orFiltering);
};

filtering();

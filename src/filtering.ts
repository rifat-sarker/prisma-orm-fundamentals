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

//   not filtering
  const notFiltering = await prisma.post.findMany({
    where: {
        NOT: [
            {
                title: {
                    contains: "Title1"
                }
            }
        ]
    }
  })

//   startsWith operator 
  const startsWith = await prisma.user.findMany({
    where: {
        email: {
            startsWith: "r",
            // contains: "gmail"
        }
    }
  })

//   endsWith operator
  const endsWith = await prisma.user.findMany({
    where: {
        email: {
            endsWith: ".com",
            // contains: "gmail"
        }
    }
  })
  console.log(endsWith);
};

filtering();

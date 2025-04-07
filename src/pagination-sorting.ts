import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const paginationSorting = async () => {
  const offsetData = await prisma.post.findMany({
    // where: {
    //     title : "Title2"
    // },
    skip: 1,
    take: 2,
  });

  const cursorData = await prisma.post.findMany({
    skip: 1,
    take: 2,
    cursor: {
      id: 97,
    },
  });
  // console.log(cursorData);

  const sortedData = await prisma.post.findMany({
    orderBy: {
      id: "desc",
    },
    skip: 1,
    take: 2,
    where: {
      title: "Title3",
    },
  });
  console.log(sortedData);
};

paginationSorting();


/*NOTES::
pagination: 1. offset pagination, 2. cursor pagination
1. offset: skip, take
2. cursor: cursor, also can use skip and take
sorting: orderBy
we also can use sorting with pagination

* */
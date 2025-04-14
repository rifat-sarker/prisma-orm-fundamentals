import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const aggregates = async () => {
  // find avg age
  const avgAge = await prisma.user.aggregate({
    _avg: {
      age: true,
    },
  });

  //   find sum of age
  const sumAge = await prisma.user.aggregate({
    _sum: {
      age: true,
    },
  });

  //  find age count
  const countAge = await prisma.post.aggregate({
    _count: {
      title: true,
    },
    where: {
      published: true,
    },
  });

  //   find number of records
  const countData = await prisma.user.count();

  //   find max age
  const maxAge = await prisma.user.aggregate({
    _max: {
      age: true,
    },
  });

  //   find min age
  const minAge = await prisma.user.aggregate({
    _min: {
      age: true,
    },
  });
  console.log(countAge);
};

aggregates();

/**NOTES
 * Step for aggregates
 * 1. prisma client
 * 2. model name
 * 3. aggregate function
 * 4. operation
 * Aggregate operator only applicable to numeric fields(without, _count)
 */

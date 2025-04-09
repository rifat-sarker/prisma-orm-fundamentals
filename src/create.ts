import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // const createUser = await prisma.user.create({
  //   data: {
  //     username: "rifat1",
  //     email: "rifatswd@gmail.com",
  //     role: UserRole.user,
  //   },
  // });
  // console.log(createUser);

  // const createProfile = await prisma.profile.create({
  //   data: {
  //     bio: "bio....",
  //     userId: 1
  //   },
  // });
  // console.log(createProfile);

  // const createCategory = await prisma.category.create({
  //   data: {
  //     name: "Civil Engineering",
  //   },
  // });

  // console.log(createCategory);

  const createPost = await prisma.post.create({
    data: {
      title: "Title1",
      content: "content....",
      authorId: 1,
      PostCategory: {
        create: [
          {
            categoryId: 2
          },
          {
            categoryId: 4
          },
          {
            categoryId: 9
          },
        ],
      },
    },
    include: {
      PostCategory: true
    }
  });

  console.log(createPost);

  //   const post = await prisma.post.create({
  // data: same datai rakhte hbe
  //     data: {
  //       title: "Title2",
  //       content: "content.....",
  //       authorName: "JOHNY",
  //     },
  //   });
  //   console.log(post);

  // const createMany = await prisma.post.createMany({
  //   data: [
  //     {
  //       title: "Title2",
  //       content: "content2",
  //       authorName: "author2",
  //     },
  //     {
  //       title: "Title3",
  //       content: "content3",
  //       authorName: "author3",
  //     },
  //     {
  //       title: "Title4",
  //       content: "content4",
  //       authorName: "author4",
  //     },
  //   ],
  // });
  // console.log(createMany);
};

main();

/* NOTES
create vs createMany
create: create a single recoard, only shows object of recoard created
createMany: create multiple recoards, shows count of recoards created ex: count: 3
*/

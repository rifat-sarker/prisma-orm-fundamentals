import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const relationalQueries = async () => {

    //fluent api
    // const result = await prisma.user.findUnique({
    //     where: {
    //         id: 1
    //     }
    // }).Post();

    //

    // include query -  show both user and post info - like populate in mongoose
    const result = await prisma.user.findUnique({
        where: {
            id: 1
        },
        include: {
            Post: true
        }
    })
    console.log(result);
}

relationalQueries();


/** notes
 * Fluent api -- use one to get another one 
 * include query -- just like populate in mongoose
 * 
 * 
 * */ 
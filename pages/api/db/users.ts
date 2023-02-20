import { prisma } from './db';

export async function getUsersDB(){
    return prisma.public_users.findMany()
}

export async function createUserDB(u_name: string, u_email: string, u_password: string){
    return prisma.public_users.create({
        data: {
            u_name,
            u_email,
            u_password,
        }
    })
}

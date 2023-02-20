import { createUserDB } from "../db/users";

export default async (req: any, res: any) => {
    const {u_name, u_email, u_password} = req.body;

    const createUser =  await createUserDB(u_name, u_email, u_password);

    res.json({createUser })
}
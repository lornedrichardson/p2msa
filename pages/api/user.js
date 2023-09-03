import { setCookie } from "cookies-next";
import { prisma } from "../../server/db/client";
import { cookies } from 'next/headers'

export default async function handler(req, res) {
    if (req.method === "GET") {
        const founduser = await prisma.userdata.findMany()
        res.status(200).json(founduser)
    }
    if (req.method === "POST") {
        const { username } = req.body
        const { password } = req.body
        try {
            const founduser = await prisma.userdata.findMany({
                where: {
                    username: username,
                    pw: password
                }
            })
            if (founduser.length) {
                cookies().set('userid',founduser[0].user_id)
                res.status(200).json({isLogin:true})
            } else {
                res.status(404).json({
                    message: 'User not found',
                    isLogin:false
                })
            }
            await prisma.$disconnect()
        } catch (error) {
            res.states(500).json(error)
            await prisma.$disconnect()
            process.exit(1)
        }
    }
}
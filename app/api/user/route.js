import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { prisma } from '../../../server/db/client'
 
export async function GET(request) {
    const data = await prisma.userdata.findMany()
    return NextResponse.json({ data })
}

export async function POST(req) {
    const { username,password } = await req.json()
    const data = await prisma.userdata.findMany({
        where: { username: username, pw: password}
    })
    console.log(data[0].user_id)
    cookies().set('user_id', data[0].user_id)
   
    return NextResponse.json({isLogin: true})
  }
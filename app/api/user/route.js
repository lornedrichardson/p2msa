import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { prisma } from '../../../server/db/client'
 
export async function GET(request) {
    const data = await prisma.userdata.findMany()
    return NextResponse.json({ data })
}

export async function POST(req) {
    const { username,password } = await req.json()
    try {
    const founduser = await prisma.userdata.findMany({
        where: { username: username, pw: password}
    })
    if(founduser.length){
        console.log(founduser)
        cookies().set('user_id', founduser[0].user_id)
        return NextResponse.json({isLogin: true})
      }else{
        console.log('not found')
        return NextResponse.json({isLogin: false})
    }
    } catch (error) {
        console.log(error)
        return NextResponse.json({isLogin: false},{status:500})
        await prisma.$disconnect()
    }
  }


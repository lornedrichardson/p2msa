import { prisma } from '../../../server/db/client'
import { NextResponse } from 'next/server'
 
export async function GET() {
    const data = await prisma.gamedata.findMany()
    return NextResponse.json({ data })
}

export async function POST(request) {
    const { session_id } = await request.json()
    const data = await prisma.gamedata.findFirst({
        where: { session_id: session_id}
    })
    return NextResponse.json({ data })
}

export async function PUT(request) {
    const { session_id }= await request.json()
    const { data }= await request.json()
    try {
        const dataInput = await prisma.gamedata.update({
            where:{
                session_id: session_id,
            },
            data
        })
        return NextResponse.json({ Edit:true })
    } catch (error) {
        
    }
}

export async function DELETE(request) {
    const session_id = await request.json()
    const data = await prisma.gamedata.delete({
        where:session_id
    })
    return NextResponse.json({ data })
}


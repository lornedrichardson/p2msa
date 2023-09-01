'use client'
import Link from 'next/link'
import { prisma } from '../../server/db/client'

//HOME PAGE
  export default async function Page(){
    const data = await prisma.userdata.findMany()
    const isInDataBase = data.map((data)=>{
        return (
            <div>
                <p>{data.user_id}</p>
                <p>{data.username}</p>
                <p>{data.pw}</p>
            </div>
        )
    })
    return(
        <div>
        <div>
            <h1>Slot Tracker</h1>
        </div>    
        <div>
            <form onSubmit={(e)=>{
                e.preventDefault()
            }}>
            <div>
                <label >User name</label>
                <input type="text" required />
            </div>
            <div>
                <label >Password</label>
                <input type="password" required />
            </div>
            </form> 
        </div>
            <Link href ="/games">Log In</Link>
            <div>
                <p style={{display: 'inline-block'}}>Don't have a account? Sign up today!</p>
                <Link href ="/signup">Sign up</Link>
            </div>
            {isInDataBase}
        </div>
    )
}
export async function name(username:String,password:String) {
    const data = await prisma.userdata.findMany()
    const isInDataBase = data.map((data)=>{
        if(username === data.username && password === data.pw){
            return true
        }
    })
    return isInDataBase ?  true : false
}

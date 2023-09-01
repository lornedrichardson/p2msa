'use client'
import Link from 'next/link'
import { prisma } from '../../server/db/client'
import { useState } from 'react'

//HOME PAGE
  export default function Page(){
    const [login,setLogin] = useState('li')
    const [password,setPassword] = useState('123')
    console.log("this is login info "+login,password)
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
                <input type="text" onChange={(e) => setLogin(e.target.value)} />
            </div>
            <div>
                <label >Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type='submit'>Log in</button>
            </form> 
        </div>
            {/* <Link href ="/games">Log In</Link>
            <div>
                <p style={{display: 'inline-block'}}>Don't have a account? Sign up today!</p>
                <Link href ="/signup">Sign up</Link>
            </div> */}
        </div>
    )
}
// export async function name(username:String,password:String) {
//     const data = await prisma.userdata.findMany()
//     const isInDataBase = data.map((data)=>{
//         if(username === data.username && password === data.pw){
//             return true
//         }
//     })
//     return isInDataBase ?  true : false
// }

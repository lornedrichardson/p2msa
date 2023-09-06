'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'


export default function Page(){
    const { push } = useRouter()
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [isCreate,setIsCreate] = useState(true)
    const datapass = () => {
        const fetchresdata = async () => {
            const result = await fetch('api/user/signup', {
                method: 'POST',
                headers: { "Content-type": "application/json; charset=UTF-8" },
                body: JSON.stringify({ username:username, password:password })
            })
            const data = await result.json()
            console.log(data)
            if(data.isCreate) {
                push(`/login`)
            }else{
              setIsCreate(data.isCreate)
            }
        }
        fetchresdata()
    }
    return(
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                datapass()
            }}>
            <div>
                <label >User name</label>
                <input type="text" onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label >Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type='submit'>Sign Up</button>
            </form>
            {isCreate ? '' : 'User name alright used Please try different user name'}
        </div>
    )
    }


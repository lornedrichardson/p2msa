'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'


export default function Page() {
    const { push } = useRouter()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isCreate, setIsCreate] = useState(true)
    const datapass = () => {
        const fetchresdata = async () => {
            const result = await fetch('api/user/signup', {
                method: 'POST',
                headers: { "Content-type": "application/json; charset=UTF-8" },
                body: JSON.stringify({ username: username, password: password })
            })
            const data = await result.json()
            console.log(data)
            if (data.isCreate) {
                push(`/login`)
            } else {
                setIsCreate(data.isCreate)
            }
        }
        fetchresdata()
    }
    // return(
    //     <div>
    //         <form onSubmit={(e) => {
    //             e.preventDefault()
    //             datapass()
    //         }}>
    //         <div>
    //             <label >User name</label>
    //             <input type="text" onChange={(e) => setUsername(e.target.value)} />
    //         </div>
    //         <div>
    //             <label >Password</label>
    //             <input type="password" onChange={(e) => setPassword(e.target.value)} />
    //         </div>
    //         <button type='submit'>Sign Up</button>
    //         </form>
    //         {isCreate ? '' : 'User name alright used Please try different user name'}
    //     </div>
    // )
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h1 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-indigo-600">
                    Slot Tracker App
                </h1>
            </div>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign Up and Create your account
                </h2>
            </div>


            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST" onSubmit={(e) => {
                    e.preventDefault()
                    datapass()
                }}>
                    <div>
                        <label htmlFor="userName" className="block text-sm font-medium leading-6 text-gray-900">
                            Username
                        </label>
                        <div className="mt-2">
                            <input
                                type="text" onChange={(e) => setUsername(e.target.value)}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>


                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                type="password" onChange={(e) => setPassword(e.target.value)}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>


                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>


                <p className="mt-10 text-center text-sm text-gray-500">
                    Already a member?{' '}
                    <a href="/" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Sign In
                    </a>
                </p>
            </div>
            {isCreate ? '' : 'User name already used, please try different user name'}
        </div>
    )
}


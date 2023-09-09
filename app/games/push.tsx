"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import '../../styles/globals.css'

const Push = () => {
    const router = useRouter()
    const [editData, setEditData] = useState('')
    const [deleteData, setDeleteData] = useState('')
    return (
        <div>
            <div className="min-h-full">
  <nav className="bg-gray-800">
    <div className=" max-w-3xl px- sm:px-12 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center">
          <div className="hidden md:block">
            <div className=" flex items-baseline space-x-4">
              <a onClick={() => { router.push('/games/create/') }} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Create New</a>

              <form onSubmit={(e) => {
                e.preventDefault();
                router.push(`/games/edit/${editData}`)
            }}> 
                <button type="submit" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Edit</button>
                <input type="text" className="rounded-md" onChange={(e) => { setEditData(e.target.value) }} />
            </form>

            <form onSubmit={async (e) => {
                const response = confirm("Are you sure you want to do that?");
                if (response) {
                    await fetch('api/games', {
                        method: 'DELETE',
                        headers: { "Content-type": "application/json; charset=UTF-8" },
                        body: JSON.stringify({ session_id: Number(deleteData) })
                    })
                    alert("Delete succeed");
                } else {
                    alert("Cancel was pressed");
                }
            }}>
                <button type="submit" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Delete</button>
                <input type="text" className="rounded-md" onChange={(e) => { setDeleteData(e.target.value) }} />
            </form>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
        </div>
      </div>
    </div>
  </nav>

        </div>
        </div>
    )
}

export default Push
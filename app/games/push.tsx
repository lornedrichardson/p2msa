"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"

const Push = () => {
    const router = useRouter()
    const [editData, setEditData] = useState('')
    const [deleteData, setDeleteData] = useState('')
    return (
        <div>
            <form style={{ display: 'inline-flex' }} onSubmit={(e) => {
                e.preventDefault();
            }}>
                <button onClick={() => { router.push('/games/create/') }}>Create New</button>
            </form>
            <form onSubmit={(e) => {
                e.preventDefault();
                router.push(`/games/edit/${editData}`)
            }}>
                <input type="text" onChange={(e) => { setEditData(e.target.value) }} />
                <button type="submit">Edit</button>
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
                <input type="text" onChange={(e) => { setDeleteData(e.target.value) }} />
                <button type="submit">Delete</button>
            </form>
        </div>
    )
}

export default Push
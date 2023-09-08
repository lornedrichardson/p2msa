'use client'
import { useState } from 'react'

function Page({ params }: { params: { id: number } }) {
  const data = async()=>{ await fetch('api/games',{
  method: 'POST',
  headers: { "Content-type": "application/json; charset=UTF-8" },
  body: JSON.stringify({ session_id:params.id })
})}
  return (
    <div>
      <form>
                <div>
                    <label>Casino:</label>
                    <input type="text" required />
                </div>
                <div>
                    <label>Machine</label>
                    <input type="text" required />
                </div>
                <div>
                    <label>Session Start</label>
                    <input type="text" required />
                </div>
                <div>
                    <label>Session End</label>
                    <input type="text" required />
                </div>
                <div>
                    <label>Game Type:</label>
                    <input type="text" required />
                </div>
                <div>
                    <label>Game Name:</label>
                    <input type="text" required />
                </div>
                <div>
                    <label>Wager Amount:</label>
                    <input type="text" required />
                </div>
                <div>
                    <label>Wager Number:</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Amount Win:</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Amount Loss:</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Note:</label>
                    <input type="text" />
                </div>
                <button type="submit">Submit</button>
            </form>
    </div>
  )
}

export default Page
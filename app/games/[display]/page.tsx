import { prisma } from "../../../server/db/client"
import { cookies } from 'next/headers'

export default async function Page() {
  const data = await prisma.gamedata.findFirst()
  console.log(data)
  return (
    <div>
      <form>
        <div>
          <label>Casino:</label>
          <input type="text" />
        </div>
        <div>
          <label>Game Type:</label>
        </div>
        <div>
          <label>Game Name:</label>
        </div>
        <div>
          <label>Time Start:</label>
        </div>
        <div>
          <label>Time Start:</label>
        </div>
        <button type="submit">filters</button>
      </form>
    </div>
  )
}
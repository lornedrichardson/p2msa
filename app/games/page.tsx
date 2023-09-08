import { prisma } from "../../server/db/client"
import Filters from "./filters"
import { cookies } from 'next/headers'
import Push from "./push"

const Page = async ({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const page =
    typeof searchParams.page === 'string' ? Number(searchParams.page) : 1
  const limit =
    typeof searchParams.limit === 'string' ? Number(searchParams.limit) : 10

  const casino =
    typeof searchParams.casino === 'string' ? searchParams.casino : undefined
  const game_type =
    typeof searchParams.gameType === 'string' ? searchParams.gameType : undefined
  const game =
    typeof searchParams.gameName === 'string' ? searchParams.gameName : undefined
  const time =
    typeof searchParams.timeStart === 'string' ? searchParams.timeStart : undefined

  // const auth = cookies().get('user_id').value
  const auth = 1
  const where = {
    user_id: Number(auth),
    casino,
    game_type,
    game,
    session_start: { lte: time + 'T23:59:59.999Z', gte: time + 'T00:00:00.000Z' }
  }
  Object.getOwnPropertyNames(where).forEach(function (prop) {
    let descriptor1 = Object.getOwnPropertyDescriptor(where, prop);
    if (descriptor1.value === '') {
      delete where[prop];
    }
    if (prop === 'session_start') {
      if (!time) {
        delete where.session_start
      }
    }
  });
  const allGameData = await prisma.gamedata.findMany({
    where
  })
  let display = allGameData.map((arr) => {
    let data = Object.getOwnPropertyNames(arr).map((prop) => {
      const data = Object.getOwnPropertyDescriptor(arr, prop).value
      if (prop === 'session_start' || prop === 'session_stop') {
        const time = String(data).slice(0, 24)

        // Style Below here in tags
        return <p style={{ display: 'inline-block', padding: '5px' }}>{`${prop}:${time} `}</p>
      } else { return <p style={{ display: 'inline-block', padding: '5px' }}>{`${prop}:${data} `}</p> }
    })
    return <div>{data}</div>
  })
  return (
    <div>
      <Push />
      <Filters />
      {display}
    </div>
  )
}

export default Page
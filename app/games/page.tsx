import { cookies } from 'next/headers'
import { prisma } from '../../server/db/client'
export default async function Page() {
  const auth = cookies().get('userid')?.value
  const data = await prisma.gamedata.findMany({
    where:{user_id:Number(auth)}
  })
  let display = data.map((arr) => {
     let data = Object.getOwnPropertyNames(arr).map((prop)=>{
      const data = Object.getOwnPropertyDescriptor(arr, prop).value
      if (prop === 'session_start' || prop === 'session_stop' ){
        const time = String(data).slice(0,24)
        return <p style={{display:'inline-block',padding:'5px'}}>{`${prop}:${time} `}</p>
      }else{return <p style={{display:'inline-block',padding:'5px'}}>{`${prop}:${data} `}</p>}
     })
     return data
    })
  // const display = data.map((arr) => {
  //   return (
  //     <div style={{display:'inline-block'}}>
  //       <p>{arr.session_id}</p>
  //       <p>{arr.casino}</p>
  //       <p>{arr.machine}</p>
  //       <p>{String(arr.session_start)}</p>
  //       <p>{String(arr.session_stop)}</p>
  //       <p>{arr.game_type}</p>
  //       <p>{arr.game}</p>
  //       <p>{String(arr.wageramt)}</p>
  //       <p>{arr.wagernum}</p>
  //       <p>{String(arr.win)}</p>
  //       <p>{String(arr.loss)}</p>
  //       <p>{arr.notes}</p>
  //     </div>
  //   )
  // })
  return (
    <div>
      {display}
    </div>
  )
}
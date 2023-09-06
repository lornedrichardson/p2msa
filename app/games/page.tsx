import { cookies } from 'next/headers'
import { prisma } from '../../server/db/client'
export default async function Page() {
  console.log(cookies().get('user_id').value)
  const auth = cookies().get('user_id').value
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
  return (
    <div>
      {display}
    </div>
  )
}
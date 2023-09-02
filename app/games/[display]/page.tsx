import { prisma } from "../../../server/db/client"

export default async function Page({ params }: { params: { display: string } }) {
  const data = await prisma.userdata.findMany({
    where: { user_id: Number(params.display)}
  })
  console.log(data)
  return <div>My Post: {params.display}</div>
}
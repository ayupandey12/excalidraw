const dashboard=async({ params }:{params:Promise<{username:String}>})=>{
  const router=await params
  console.log(router)
  const {username}=router
  return (
    <div>{username}</div>
  )
}
export default dashboard;
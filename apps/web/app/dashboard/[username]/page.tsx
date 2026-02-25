const dashboard=async({ params }:{params:Promise<{username:String}>})=>{
  const {username}=await params
  
  return (
    <div>{username}</div>
  )
}
export default dashboard;
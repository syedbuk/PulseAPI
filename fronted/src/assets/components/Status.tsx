
import { useGet } from "../hooks/useGet";

function Status() {


///send a request to backend api - to check all status
const  {data, loading, error} = useGet("httpsetc")

   


  return (
    <div>
      <h1>Status</h1>
      <h2>Springboot Service: {data?.springboot ? "Running" : "Down"}</h2>
      <h2>AI: {data?.ai ? "Running" : "Down"}</h2>
      <h2>database: {data?.database ? "Running" : "Down"}</h2>
    </div>
  )
}

export default Status
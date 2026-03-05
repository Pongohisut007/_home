import axios from "axios"
import { useEffect, useState } from "react"
import { Resume } from "../component/Resume"
import { Projects } from "../component/Project"

export function Home() {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/nongao")
        setData(response.data)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    getData()
  }, [])

  return (
    <div>
      <>
        <Resume/>
        <Projects/>
        
      </>
    </div>
  )

}

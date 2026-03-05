import axios from "axios"
import { useEffect, useState } from "react"

export function Kube() {
    const [data, setData] = useState([])
  
    useEffect(() => {
      const getData = async () => {
        try {
          const res = await axios.get("http://localhost:3001/api/nongao")
          setData(res.data)
        } catch (err) {
          console.error(err)
        }
      }
  
      getData()
    }, [])
  
    return (
      <div>
        <h1>Kubernate</h1>
  
  
        {data.map(item => (
          <div key={item.id}>
            {item.name}
          </div>
        ))}
      </div>
    )
  }
  
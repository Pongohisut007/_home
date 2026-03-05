import { useEffect, useState } from "react"
import axios from "axios"

export function Docker() {
  const [data, setData] = useState<any[]>([])

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
      <h1>Docker nginx</h1>

      {data.map(item => (
        <div key={item.id}>
          {item.name}
        </div>
      ))}
    </div>
  )
}

import { useEffect, useState } from 'react'
import axios from 'axios'
import ScreenLoader from './ScreenLoader'
import Card from './Card'

const App = () => {
  const [data, setData] = useState(undefined)

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('db/data.json')
      setData(response.data)
    }

    fetchData()
  }, [])

  if(data === undefined){
    return <ScreenLoader />
  }

  return (
    <>
      { data.map((item, index) => (
        <Card info={item} key={index} />
      )) }
    </>
  )
}

export default App
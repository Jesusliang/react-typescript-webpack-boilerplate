import axios from 'axios'
import React, { useEffect } from 'react'

interface Props {

}

const App:React.FC<Props> = (props) => {
  useEffect(() => {
    axios.get('http://localhost:4000').then(response => {
      console.log(response)
    })
  }, [])

  return (
    <div>
    <h1>Hello World</h1>
    </div>
  )
}
export default App

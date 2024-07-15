
import { Route, Routes } from 'react-router-dom'



const PrivateRouting = () => {
  const token = localStorage.getItem('admin')

  return (
    <div>
      {token ? 
      <Routes>

      </Routes>
        :
        console.log('any')
      }
    </div>
  )
}


export default PrivateRouting
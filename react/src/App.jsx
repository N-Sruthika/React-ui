
import { Routes, Route } from 'react-router-dom'

import UserList from './components/UserList.jsx'
import AddUser from './components/AddUser.jsx'
function App() {
 
  return (
    <Routes>
      <Route index path="" element={<UserList />} />
     <Route path='/adduser' element={<AddUser/>}/>
    

    </Routes>
  
   
  )
}

export default App

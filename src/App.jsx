import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmpDashboard from './Components/Dashboard/EmpDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

function App() {

  const [user,setUser] = useState(null)
  const authData = useContext(AuthContext)

  const handleLogin = (email, password) => {
    if (email === "admin@example.com" && password === "123") {
      setUser('admin')
    }
    else if (authData && authData.employees.find((e) => email == e.email && e.password == password)) {
      setUser('Employee')
    }
    else {
      alert("Invalid Admin")
    }
  }

  
  

  return (
    <>
      {!user ? <Login handleLogin = {handleLogin}/> : ""}
      {user === 'admin' ? <AdminDashboard /> : <EmpDashboard />}
      {/* <EmpDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  )
}

export default App
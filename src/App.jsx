import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmpDashboard from './Components/Dashboard/EmpDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

function App() {

  const [user,setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext)

  useEffect (() => {
    const loggedInUser = localStorage.getItem("loggedInUser")

    if (loggedInUser) {
       const userData = JSON.parse(loggedInUser)
       setUser(userData.role)
       setLoggedInUserData(userData.data)
    }
  }, [])


  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if (loggedInUser) {
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // }, [authData])
  

  const handleLogin = (email, password) => {
    if (email === "admin@example.com" && password === "123") {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
    }
    else if (authData) {
      const employee = authData.employees.find((e) => email == e.email && e.password == password);
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employee', data:employee}))
      }
    }
    else {
      alert("Invalid Admin")
    }
  }

  
  

  return (
    <>
      {!user ? <Login handleLogin = {handleLogin}/> : ""}
      {user === 'admin' ? <AdminDashboard /> : (user == 'employee' ? <EmpDashboard data={loggedInUserData} /> : null) }
      {/* <EmpDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  )
}

export default App
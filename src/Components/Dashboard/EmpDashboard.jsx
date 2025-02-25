import React from 'react'
import Header from '../Other/Header'
import TaskListNum from '../Other/TaskListNum'
import TaskList from '../TaskList/TaskList'

function EmpDashboard(props) {
  return (
    <div>
      <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header changeUser = {props.changeUser} data={props.data}/>
        <TaskListNum data={props.data}/>
        <TaskList data={props.data}/>
      </div>
    </div>
  )
}

export default EmpDashboard
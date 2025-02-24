import React from 'react'
import Header from '../Other/Header'
import TaskListNum from '../Other/TaskListNum'
import TaskList from '../TaskList/TaskList'

function EmpDashboard({data}) {
  return (
    <div>
      <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header data={data}/>
        <TaskListNum data={data}/>
        <TaskList data={data}/>
      </div>
    </div>
  )
}

export default EmpDashboard
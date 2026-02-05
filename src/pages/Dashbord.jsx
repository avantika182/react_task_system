import React, { useEffect, useState } from 'react'
import Navbar from '../componants/Navbar'
import { useNavigate } from 'react-router-dom'
import TaskList from '../componants/TaskList'



const Dashbord = () => {

  const navigate = useNavigate()
  const [tasks,setTasks] = useState([])

  
  const fetchData= async()=>{
    try{
      const response = await fetch("http://localhost:3000/tasks");
      const data = await response.json();
      setTasks(data);
    }catch(error){
      console.log(error)
    }
  };     
  useEffect(()=>{  
    fetchData();
  },[])
  
  const handleLogout = () =>{
    localStorage.removeItem('loginData')
    localStorage.removeItem('authData')
    navigate('/login')
  }
  return (
    <div>
      <Navbar title="Task Management" onLogout={handleLogout}/>

      <h1>Welcome to Dashboard</h1>
      <h1>My Task</h1>
      <TaskList tasks={tasks}/>
      </div>
  )
}

export default Dashbord
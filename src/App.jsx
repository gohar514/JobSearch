import React from 'react'
import {Route, createBrowserRouter,createRoutesFromElements,RouterProvider,}  from 'react-router-dom'
import HomePage from './Pages/HomePage';
import Navv   from './Layouts/Navv'
import JobsPage from './Pages/JobsPage'
import NoteFound from './Pages/NotFound'
import JobPage ,{jobLoader} from './Pages/JobPage';
import AddJobPage from './Pages/AddJobPage';
import JobeditPage from './Pages/JobeditPage';
import Reducer from './Co/Reducer';
import ApiCall from './Co/ApiCall';




const App = () => {
  // add new job

  const addJob= async (newJob)=>{
    const res= await fetch(`/api/jobs`,{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob),
    });
     return;
  
  }
//  delete job
  const deleteJob= async (id)=>{
    
      const res= await fetch(`/api/jobs/${id}`,{
        method: 'DELETE',
        
      });
  }

  // update job

  const updateJob= async (job)=>{
    const res= await fetch(`/api/jobs/${job.id}`,{
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job),
    });
     return;
    
  }
  
  
  const router= createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Navv />}>
  <Route index element={<HomePage />} />
  <Route path='/jobs' element={<JobsPage />} />
  <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>} />
<Route path='/edit-job/:id' element={<JobeditPage updateJobSubmit={updateJob} />} loader={jobLoader} />
  <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
  <Route path='*' element={<NoteFound />} />
  <Route path='/gg' element={<Reducer />} />
  <Route path='/ggg' element={<ApiCall />} />
  </Route> 
  )
  );

  return ( 
    
    <>
    
    <RouterProvider router={router} />
     
</>
    
  )
}

export default App
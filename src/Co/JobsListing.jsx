import React from 'react'
import { useState,useEffect } from 'react';
import JobListing1 from './JobListing1'
import Spinners from './Spinners';

const JobsListing = ({isHome=false}) => {
    const [jobs,setjobs]=useState();
    const [loading,setloading]=useState(true);
    useEffect(()=>{
    const fetchjobs= async ()=>{
      const apiUrl= isHome? '/api/jobs?_limit=3':
      '/api/jobs'
      try {
        const res= await fetch(apiUrl);
      const data= await res.json();
      setjobs(data);
        
      } catch (error) {
        console.log("error in fatchinf", error)
        
      } finally {
        setloading(false);
      }
      
    }

    fetchjobs();

    },[]);

    
  return (
    <div><section className="bg-blue-50 px-4 py-10">
    <div className="container-xl lg:container m-auto">
      <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
       {isHome? 'Recent Jobs' :'Browse Jobs'}
      </h2>
      
        {loading ? (<Spinners loading={loading}/>):
         (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {jobs?.map((job)=>(
          <JobListing1 key={job.id}  job={job} />
        ))}
        </div>
        )}
        
        
        
        
        
          
        
      
    </div>
  </section></div>
  )}

export default JobsListing
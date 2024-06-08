import React from 'react'
import Hero from '../Co/Hero'
import HomeCards from '../Co/HomeCards'
import JobsListing from '../Co/JobsListing'
import ViewAllJobs from '../Co/ViewAllJobs'

const HomePage = () => {
  return (
    <><Hero />
    <HomeCards/>
    <JobsListing isHome={true}/>
    <ViewAllJobs/>
    </>
  )
}

export default HomePage
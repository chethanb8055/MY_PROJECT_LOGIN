// import React from 'react'

import CoursesCards from "../components/CoursesCards"
import {data} from "../data"
import { useState } from "react"

const Home = () => {
  const [coursesData ,setCourses] =useState(data)
  console.log(coursesData)
  coursesData.courses.forEach((ele))

  return (
    <div>
        <CoursesCards />
    </div>
  )
}

export default Home
import React from 'react'



const Course = (props) =>{

    const [course, setCourse] = useState({});

    const course = {
        id : 1,
        name : "Half Stack application development",
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10
          },
          {
            name: 'Using props to pass data',
            exercises: 7 
          },
          {
            name: 'State of a component',
            exercises: 14
          },
          {
            name: 'Total',
            course: 50
          },
          {
            name: 'Redux',
            course: 11
          },
          {
            name: ' states changes',
            course: 21
          }
        ]
      }
    return (
        <div>
           {course.map((course)=><ul><li key = {course.id}>{course}</li></ul>)} 
        </div>
    )
}

export default Course
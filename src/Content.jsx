import React from 'react'
import ReactDOM from 'react-dom'
import Part1 from './Part1'
import Part2 from './Part2'
import Part3 from './Part3'


const Content = () =>{
    // const part1 = 'Fundamentals of React'
    // const exercises1 = 10
    // const part2 = 'Using props to pass data'
    // const exercises2 = 7
    // const part3 = 'State of a component'
    // const exercises3 = 14
    return(

        <div>
           <Part1/>
           <Part2 />
           <Part3 />
        </div>
    )
}

export default Content
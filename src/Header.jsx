import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
    console.log(props)
    const course = 'Half Stack application development'
    return(
        <h1>{course}</h1> 
    )   
}

export default Header
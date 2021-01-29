import React from 'react'
import ReactDOM from 'react-dom'




const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}


const Part = (props) => {
  return(
    <div>
      <p>
      {props.part} {props.exercice}
      </p>
    </div>
  )
}


const Content = (props) =>{
  return (
    <div>
      <Part part = {props.part1} exercice = {props.exercises1}/>
      <Part part = {props.part2} exercice = {props.exercises2}/>
      <Part part = {props.part3} exercice = {props.exercises3}/>
      <Part part = {props.part4} exercice ={props.exercises4} />
    </div>
  )
}


const TotalExercices = (props) => {
  return (
    <div>
    <p>
    Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
    </div>
  )
}


const Node = () =>{
  return(
    <div>
      <p>
        <h1>Node js</h1>
      </p>
    </div>
  )
}


//const total = part.reduce((s, p) => exercises1+exercises2+exercises3)
// const total = parts.reduce((s, p) => {
//   console.log('what is happening', s, p)
//   return someMagicHere 
// })




const App = () => {
  
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const part4 = 'Redux'
  const exercises4 =11


  


  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} part4={part4}  exercises1={exercises1} exercises2={exercises2} exercises3= {exercises3} exercises4={exercises4} />
      <TotalExercices  exercises1 ={exercises1} exercises2 ={exercises2} exercises3 = {exercises3}   />
       <Node />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
const Header = (props)  => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props)  => {
  return (
      <p>
        {props.name} {props.exercises}
      </p>
  )
}


const Content = ({parts})  => {
  return (
    <div>
      {parts.map(part =>
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      )}
    </div>
  )
}

const Total = ({parts}) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <p>
      <strong>total of {totalExercises} exercises</strong>
    </p>
  )
}


const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Courses = ({courses}) => {
  return (
    <div>
      {courses.map(course => 
        <Course key={course.id} course={course} />
      )}
    </div>
  )
}

export default Courses
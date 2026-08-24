function student({ name, age, section, student_number, course}) {
  return (
    <div>
      <h6><b> Student Information </b></h6>
      <p> Name: {name} </p>
      <p> Age: {age} </p>
      <p> Section: {section} </p>
      <p> Student Number: {student_number} </p>
      <p> Course: {course} </p>
    </div>
  )
}

export default student
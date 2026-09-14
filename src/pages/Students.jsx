import Student from '../components/Student.jsx'
import students from '../data/students.json'

function Students() {
  return (
    <section className="students">
      <h1 className="students__title">Students</h1>
      <p className="students__count">{students.length} students enrolled</p>

      <div className="students__grid">
        {students.map((student) => (
          <Student key={student.id} student={student} />
        ))}
      </div>
    </section>
  )
}

export default Students

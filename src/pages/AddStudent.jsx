import { useState } from 'react'
import { Link } from 'react-router-dom'

function AddStudent({ students, onAdd }) {
  const [form, setForm] = useState({
    name: '',
    studentNumber: '',
    course: '',
    yearSection: '',
    email: '',
    address: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onAdd(form)

    setForm({
      name: '',
      studentNumber: '',
      course: '',
      yearSection: '',
      email: '',
      address: '',
    })
  }

  return (
    <section className="students">
      <h1 className="students__title">Add Student</h1>

      <form className="student-card" onSubmit={handleSubmit}>
        <div className="student-card__body">
          <p>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full name"
              required
            />
          </p>
          <p>
            <input
              type="text"
              name="studentNumber"
              value={form.studentNumber}
              onChange={handleChange}
              placeholder="Student number"
              required
            />
          </p>
          <p>
            <input
              type="text"
              name="course"
              value={form.course}
              onChange={handleChange}
              placeholder="Course"
              required
            />
          </p>
          <p>
            <input
              type="text"
              name="yearSection"
              value={form.yearSection}
              onChange={handleChange}
              placeholder="Year & section"
              required
            />
          </p>
          <p>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </p>
          <p>
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Address"
              required
            />
          </p>
          <button className="student-card__link" type="submit">
            Add Student
          </button>
        </div>
      </form>

      <h2 className="students__title" style={{ marginTop: '30px' }}>
        Current Students
      </h2>
      <p className="students__count">{students.length} student(s)</p>

      <div className="students__grid">
        {students.map((student) => (
          <div className="student-card" key={student.id}>
            <div className="student-card__body">
              <h3 className="student-card__name">{student.name}</h3>
              <p className="student-card__number">{student.studentNumber}</p>
              <p className="student-card__meta">
                {student.course} &middot; {student.yearSection}
              </p>
              <Link
                to={`/students/${student.id}`}
                className="student-card__link"
              >
                View full details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AddStudent
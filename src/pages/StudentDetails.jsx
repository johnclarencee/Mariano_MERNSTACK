import { Link, useParams } from 'react-router-dom'

function StudentDetails({ students }) {
  const { id } = useParams()
  const student = students.find((s) => s.id === parseInt(id))

  if (!student) {
    return (
      <section className="details details--empty">
        <h1>Student not found</h1>
        <p>We couldn't find a student with that id.</p>
        <Link to="/students" className="details__back">
           Back to students
        </Link>
      </section>
    )
  }

  const { name, studentNumber, course, yearSection, email, address } = student

  return (
    <section className="details">
      <Link to="/students" className="details__back">
         Back to students
      </Link>

      <div className="details__card">
        <div className="details__info">
          <h1 className="details__name">{name}</h1>
          <dl className="details__list">
            <div className="details__row">
              <dt>Student number</dt>
              <dd>{studentNumber}</dd>
            </div>
            <div className="details__row">
              <dt>Course</dt>
              <dd>{course}</dd>
            </div>
            <div className="details__row">
              <dt>Year & section</dt>
              <dd>{yearSection}</dd>
            </div>
            <div className="details__row">
              <dt>Email</dt>
              <dd>{email}</dd>
            </div>
            <div className="details__row">
              <dt>Address</dt>
              <dd>{address}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}

export default StudentDetails
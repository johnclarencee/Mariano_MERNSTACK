import { Link } from 'react-router-dom'

function Student({ student }) {
  const { id, name, studentNumber, course, yearSection } = student

  return (
    <div className="student-card">
      <div className="student-card__body">
        <h3 className="student-card__name">{name}</h3>
        <p className="student-card__number">{studentNumber}</p>
        <p className="student-card__meta">
          {course} &middot; {yearSection}
        </p>
        <Link to={`/students/${id}`} className="student-card__link">
          View full details
        </Link>
      </div>
    </div>
  )
}

export default Student
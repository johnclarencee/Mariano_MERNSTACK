import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <span className="navbar__mark">CvSU</span>
        <span className="navbar__title">Student Information</span>
      </div>
      <div className="navbar__links">
        <Link to="/" className="navbar__link">
          Home
        </Link>
        <Link to="/students" className="navbar__link">
          Students
        </Link>
        <Link to="/add-student" className="navbar__link">
          Add Student
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
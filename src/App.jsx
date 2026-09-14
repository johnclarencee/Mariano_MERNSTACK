import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Students from './pages/Students.jsx'
import StudentDetails from './pages/StudentDetails.jsx'
import AddStudent from './pages/AddStudent.jsx'
import initialStudents from './data/students.json'

function App() {
  const [students, setStudents] = useState(initialStudents)

  const handleAddStudent = (newStudent) => {
    const nextId =
      students.length > 0 ? Math.max(...students.map((s) => s.id)) + 1 : 1

    setStudents([{ ...newStudent, id: nextId }, ...students])
  }

  return (
    <BrowserRouter>
      <Navbar />
      <div className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students students={students} />} />
          <Route
            path="/students/:id"
            element={<StudentDetails students={students} />}
          />
          <Route
            path="/add-student"
            element={<AddStudent students={students} onAdd={handleAddStudent} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
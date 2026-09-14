import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="home">
      <p className="home__eyebrow">DCIT 26  Laboratory 3</p>
      <h2 className="home__title">Hanapin mo Info mo</h2>
      <Link to="/students" className="home__cta">
        Click mo to
      </Link>
    </section>
  )
}

export default Home

import React from 'react'
import style from "./nav.module.css"
import { Link , useNavigate} from 'react-router-dom'

const Navbar = () => {
  let navigate = useNavigate(0)
  return (
    <nav className={style.main_nav}>
      <section className={style.logo}>
        <h1>logo</h1>
      </section>
      <section className={style.nav_search}>
        <input type="text" placeholder='search api'/>
      </section>
      <section className={style.links_and_more}>
        <Link to="/browse">browse</Link>
        <Link to="/editor">test api</Link>
        <button onClick={()=>{navigate("/")}}>signup</button>
      </section>
    </nav>
  )
}

export default Navbar
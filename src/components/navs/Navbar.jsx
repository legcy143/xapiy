import React from 'react'
import style from "./nav.module.css"
import ClearAllIcon from '@mui/icons-material/ClearAll'; 
import SearchIcon from '@mui/icons-material/Search';
// for menu icon (ClearAllIcon)
import { Link , useNavigate} from 'react-router-dom'

const Navbar = () => {
  let navigate = useNavigate(0)
  return (
    <nav className={style.main_nav}>
      <section className={style.logo}>
        <img src="/xapiy_logo.png" alt="img" />
      </section>
      <section className={style.nav_search}>
      <SearchIcon />
        <input type="search" placeholder='search api'/>
      </section>
      <section className={style.links_and_more}>
        <Link to="/browse">browse</Link>
        <Link to="/editor">test api</Link>
        <button onClick={()=>{navigate("/")}}>sign up</button>
      </section>
    </nav>
  )
}

export default Navbar
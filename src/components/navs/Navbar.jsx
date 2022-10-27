import React ,{useState} from 'react'
import style from "./nav.module.css"
import ClearAllIcon from '@mui/icons-material/ClearAll'; 
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
// for menu icon (ClearAllIcon)
import { Link , useNavigate} from 'react-router-dom'

const Navbar = () => {
  const [handlemenu, sethandlemenu] = useState("")
  const togglemenu = ()=>{
    if(handlemenu == ""){sethandlemenu(style.open_menu)}else{sethandlemenu("")}
  }

  let navigate = useNavigate(0)
  return (
    <nav className={style.main_nav}>
      <section className={style.logo}>
        <div className={style.menu_icons}>
          <ClearAllIcon onClick={()=>{togglemenu()}}/>
        </div>
        <Link to="/">
        <img src="/xapiy_logo.png" alt="img" />
        </Link>
      </section>

      <section className={style.nav_search}>
      <SearchIcon />
        <input type="search" placeholder='search api'/>
      </section>

      <section className={`${style.links_and_more} ${handlemenu}`}>
        <section className={`${style.for_mobile} ${handlemenu}`}>
          <main className={style.close_nav_and_more}>
        <img onClick={()=>{navigate("/");togglemenu()}} src="/xapiy_logo.png" alt="img" />
        <div className={style.menu_icons}>
          <CloseIcon onClick={()=>{togglemenu()}}/>
        </div>
          </main>
        <Link to="/browseapi" onClick={()=>{togglemenu()}}>browse</Link>
        <Link to="/editor" onClick={()=>{togglemenu()}}>test api</Link>
        <button onClick={()=>{navigate("/signup");togglemenu()}}>sign up</button>
        </section>
      </section>
    </nav>
  )
}

export default Navbar
import React , {Fragment} from 'react'
import Navbar from './components/navs/Navbar'
import style from "./styles/home.module.css"

import SummarizeIcon from '@mui/icons-material/Summarize';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const App = () => {
  return (
      <main className={style.main_page}>
      <Navbar/>
      <main className={style.home_container}>
        <section className={style.home_getstarted}>
          <h1>Api's that makes you <span>productive</span></h1>
          <h2>Forget paid api's</h2>
          <p>we provide free api service</p>
            <h3>get started and browse free api</h3>
            <button>get started <ArrowForwardIcon/></button>
        </section>
        <img className={style.landing_img} src="/landing_ui.gif" alt="img" />
      </main>
      </main>
  )
}

export default App
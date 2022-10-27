import React , {Fragment} from 'react'
import Navbar from './components/navs/Navbar'
import style from "./styles/home.module.css"

const App = () => {
  return (
    <Fragment>
      <Navbar/>
      <main className={style.home_container}>
        <section className={style.home_getstarted}>
          <h1>Api's that makes you productive</h1>
          <h2>Forget paid api's</h2>
          <p>we provide free api service</p>
            <h3>get started and browse free api</h3>
          <div className={style.home_btns}>
            <button>read docs</button>
            <button>get start</button>
          </div>
        </section>
        <img src="/vite.svg" alt="" />
      </main>
    </Fragment>
  )
}

export default App
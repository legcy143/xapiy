import React , {Fragment}from 'react'
import Navbar from '../../components/navs/Navbar'
import style from "./editor.module.css"

const Editor = () => {
  return (
    <Fragment>
        <Navbar />
    <main className={style.main_page_editor}>
        <main className={style.editor_main}>
            <nav className={style.editor_nav}>
                <section className={style.input_api_url}>
                    <div className={style.api_method}>
                        <p>post</p>
                    </div>
                    <input type="text" placeholder='API ENDPOINT'/>
                    <button>send</button>
                </section>
                <section className={style.api_methods}>
                    <div className={style.active} style={{opacity:1}}> query </div>
                    <div> header </div>
                    <div> auth </div>
                    <div> body </div>
                </section>
            </nav>
            {/* //// body parts  */}
            <section contentEditable="true"  className={style.code_editor_section}></section>
        </main>


        <main className={style.response_main}>
            <nav className={style.response_nav}>
                <section className={style.status_and_more}>
                <div><h1>Status</h1>:<p>200</p></div>
                <div><h1>size</h1>:<p>200</p></div>
                <div><h1>time</h1>:<p>200</p></div>
                </section>
                <section className={style.response_more}>
                    <div style={{opacity:1}}> Response</div>
                    <div>Header</div>
                    <div>co0kkie</div>
                </section>
            </nav>
            <section contentEditable="true" className={style.response_output}>
    "_id": "6353c73291e99b29683c163a",
    "category": "General Knowledge",
    "level": "hard",
    "question": "If someone said &quot;you are olid&quot;, what would they mean?",
    "options": [
      "You are out of shape/weak.",
      "Your appearance is repulsive.",
      "You are incomprehensible/an idiot."
    ],
    "correctAnswer": "You smell extremely unpleasant.",
    "price": 5,
    "prize": 19,
    "__v": 0
            </section>
            <section className={style.ads_in_res}>
                <h1 style={{color:"white" , textAlign:"center"}}>ads</h1>
            </section>
        </main>
    </main>
    </Fragment>
  )
}

export default Editor
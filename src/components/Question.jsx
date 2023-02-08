import "../scss/Question.scss"
import { useState } from "react"
import { BiPlus, BiX } from "react-icons/bi";


const Question = ({title, info}) => {
    const [show, setShow] = useState(false)

    return (
        <div className={"one-question " + (show ? "show" : "")}  >
            <section>
                <h2>{title}</h2>
                <button type="button" className="btn" onClick={() => setShow(!show)}> {show ? <BiX className="my-icon"/> : <BiPlus className="my-icon"/>}</button>
            </section>
            <p>{info}</p>

        </div>
    )
}

export default Question
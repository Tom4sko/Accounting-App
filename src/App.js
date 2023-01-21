import data from "./data"
import Question from "./components/Question"
import { BiRefresh } from "react-icons/bi"
import { FaGithub, FaInstagram, FaCoffee } from "react-icons/fa";

const App = () => {

  function randomNum(numberLength) {
    const maxNumber = data.length;
    let numbers = [];
    
    while (numbers.length < numberLength) {
      let randomNumber = Math.floor(Math.random() * maxNumber);
      
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    return numbers;
  }

  return (
    <div className="all-questions">
      <div className="header">
        <h1>Predkontácie</h1>
        <p>Táto stránku slúži ako opakovanie na maturitnú skúšku. Pre pridanie predkontácii ma kontaktujte.</p>
      </div>

      <div className="all-questions-targets">
      {
        randomNum(5).map( (numberLength) => {
          const element = data[numberLength];
          return (
            <Question key={element.id} {...element}/>
          )
        })
      }
      </div>
      
      <div className="buttons">
        <button type="button" className="reset-btn" onClick={() => window.location.reload(true)}> <BiRefresh className="reload-icon"/> Reload</button>
      </div>

      <div className="contact">
        <a href="https://github.com/Tom4sko" target="_blank" rel="noopener noreferrer"> <FaGithub /> </a>
        <a href="https://www.instagram.com/z.tomino/" target="_blank" rel="noopener noreferrer"> <FaInstagram /> </a>
        <a href="https://ko-fi.com/tom4sko" target="_blank" rel="noopener noreferrer"> <FaCoffee /> </a>
      </div>
    </div>
  )
}

export default App
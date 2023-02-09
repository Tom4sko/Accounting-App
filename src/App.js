import data from "./data"
import Question from "./components/Question"
import { BiRefresh } from "react-icons/bi"
import { FaGithub, FaInstagram, FaCoffee } from "react-icons/fa";
import { useState, useEffect } from "react";

const App = () => {
  // search string
  const [search, setSearch] = useState("")
  // display objects
  const [questions, setQuestions] = useState([])


  /* Generate random question */
  function getQuestionIndex(maxQuestions) {
    const maxNumber = data.length;
    let numbers = [];
    
    while (numbers.length < maxQuestions) {
      let randomNumber = Math.floor(Math.random() * maxNumber);
      
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    return numbers;
  }

  // on load add new questions
  useEffect( () => {
    const indexArr = getQuestionIndex(5)

    indexArr.forEach( index => {
      setQuestions( curr => [...curr, data[index]])
    } )
  }, [])

  useEffect( () => {
    // if is not searching empty
    if (search.trim() !== '') {
      setQuestions([])

      data.forEach(elem => {
        if (elem.title.toLowerCase().includes(search.trim().toLowerCase())) {
          setQuestions( curr => [...curr, elem])
        }
      })
    } else {
      const indexArr = getQuestionIndex(5)
      setQuestions([])

      indexArr.forEach( index => {
        setQuestions( curr => [...curr, data[index]])
      } )   
    }
  }, [search])

  return (
    <div className="all-questions">
      <div className="header">
        <h1>Predkontácie</h1>
        <form>
          <input type="text" placeholder="Search..." onChange={ (event) => setSearch(event.target.value)}></input>
        </form>
      </div>

      <div className="all-questions-targets">
      {
        questions.map( (element) => {
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

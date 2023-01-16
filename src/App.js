import data from "./data"
import Question from "./components/Question"

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
        <h1>Predkontácie</h1>
        <p>Táto stránku slúži ako opakovanie na maturitnú skúšku. Ak ma chceš podporiť <a href="https://ko-fi.com/tom4sko" target="_blanc" className="link">klikni sem.</a></p>
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
        <button type="button" className="reset-btn" onClick={() => window.location.reload(true)}>Refresh</button>
      </div>
    </div>
  )
}

export default App
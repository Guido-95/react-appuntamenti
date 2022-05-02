
import './App.css';
import data from './data'
import SinglePerson from './components/SinglePerson.js'
import {useState} from 'react'
function App() {
  const [people,setPeople] = useState(data);
  const ricarica = ()=>{
    setPeople(data);
  }
  const rimuovi = ()=>{
    setPeople([]);
  }
  const rimuoviSingolo = (id)=>{
    setPeople(people.filter(el=>{
      return el.id != id;
    }))
  }
  return (
    <div className="App">
      <h1>Incontri </h1>
      <div className='persons'>

        {people.map((el)=>{
          return  <SinglePerson {...el} rimuoviFunzione = {rimuoviSingolo}  key={el.id} />
        })}

      </div>
      <div className='buttons'>
        
        <span className='button-reload' onClick={ricarica}>reload</span>
        <span className='button-remove' onClick={rimuovi}>remove all</span>
        
      </div>
    </div>
     
  );
}

export default App;

import './App.css';
import React, { useState } from 'react';
function App() {
  let [value,setValue] = useState()
  let [title__one,setTitle__one] = useState("Рубли")
  let [title__two,setTitle__two] = useState("Доллары")
  const chengeSelect = (e) => {
    setTitle__one(e.target.value)
  }
  const chengeSelect__two = (e) => {
    setTitle__two(e.target.value)
  }
  const output = (Title__one,Title__two,value) => {
    if(Title__one === "Рубли" & Title__two === "Доллары") {
      return value / 93.43
    }
    if(Title__one === "Доллары" & Title__two === "Рубли") {
      return value * 93.43
    } if(Title__one === "Рубли" & Title__two === "Рубли") {
      return value * 1
    } if(Title__one === "Доллары" & Title__two === "Доллары") {
      return value * 1
    } if(Title__one === "Евро" & Title__two === "Доллары") {
      return value  * 1.07
    } if(Title__one === "Евро" & Title__two === "Рубли") {
      return value  * 97.7
    } if(Title__one === "Евро" & Title__two === "Евро") {
      return value * 1
    } if(Title__one === "Доллары" & Title__two === "Евро") {
        return value * 0.94
      } if(Title__one === "Рубли" & Title__two === "Евро") {
          return value / 97.7
        }
  }
  return (
    <div className="App">
    <div className='option'>
      <select className='option__valute' onChange={chengeSelect}>
        <option value="Рубли">Рубли</option>
        <option value="Доллары">Доллары</option>
        <option value="Евро">Евро</option>
      </select>
      <select className='option__valute' onChange={chengeSelect__two}>
        <option>Доллары</option>
        <option>Рубли</option>
        <option value="Евро">Евро</option>
      </select>
      
       </div>
      <div className="Converter">
      <div className='valute__one'>
        <span valute__title>{title__one}</span>
        <input placeholder='Введите сумму' value={value} onChange={e => setValue(e.target.value)}/>
      </div>
      <div className='valute__two'>
      <span valute__title>{title__two}</span>
      <span className='valute__succes'>{
       output(title__one,title__two,value)
     }</span>
      </div>
      </div>
    </div>
  );
}

export default App;

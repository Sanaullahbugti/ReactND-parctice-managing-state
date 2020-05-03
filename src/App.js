import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
   state={
     value1 :Math.floor(Math.random() * 100),
 	 value2 : Math.floor(Math.random() * 100),
     value3 : Math.floor(Math.random() * 100),
     numQuestions : 0,
     numCorrect : 0,
     proposedAnswer:0,
     
    }
handleClick = (i)=>{
  if(i===0){
  	this.setState((prevState)=>({
    	numCorrect:prevState.value1+prevState.value2+prevState.value3!==prevState.proposedAnswer ? prevState.numCorrect+1 : prevState.numCorrect,
		value1 :Math.floor(Math.random() * 100),
 	    value2 : Math.floor(Math.random() * 100),
        value3 : Math.floor(Math.random() * 100),
        numQuestions : prevState.numQuestions+1,
    }))
  }else if(i===1){
  this.setState((prevState)=>({
    	numCorrect:prevState.value1+prevState.value2+prevState.value3===prevState.proposedAnswer ? prevState.numCorrect+1 : prevState.numCorrect,
		value1 :Math.floor(Math.random() * 100),
 	    value2 : Math.floor(Math.random() * 100),
        value3 : Math.floor(Math.random() * 100),
        numQuestions : prevState.numQuestions+1,
    }))
  
  }
	
}
  render() {
    let {value1, value2, value3, numCorrect, numQuestions, proposedAnswer} = this.state
   proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
          </div>
          <button onClick = {()=>this.handleClick(1)}>True</button>
          <button onClick = {()=>this.handleClick(0)}>False</button>
          <p className="text">
            Your Score: {numCorrect}/{numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;

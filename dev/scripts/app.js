import React from 'react';
import ReactDOM from 'react-dom';
import Square from './Square.js';

class App extends React.Component {
   constructor(){
      super();
      this.state = {
         game: [
            '', '', '', '', '', '', '', '', ''
         ]
      }

   }

   updateBoard(loc, player){

   }
   
   render() {
      return (
         <div className="container">
            <div className="header">
               <h1>Tic-Tac-Toe</h1>

            </div>
            {this.state.game.map(function(value, i){
               return (
                  <Square 
                     key={i}
                     loc={i}
                     value={value}
                     updateBoard={this.updateBoard.bind()}
                     turn={this.state.turn}
                     />
               )
                 }.bind(this))}
               
         </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

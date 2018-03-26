import React from 'react';
import ReactDOM from 'react-dom';
import Alert from './Alert';
import Replay from './Replay';
import Square from './Square';

class App extends React.Component {
   constructor(){
      super();
      this.state = {
         game: [
            'x', 'o', '', '', '', '', '', '', ''
         ],
         turn: 'x',
         winner: null
      }

   }

   updateBoard(loc, player){

   }

   resetBoard(){
      this.setState({
         game: [
            '', '', '', '', '', '', '', '', ''
         ],
         turn: 'x',
         winner: null
      })
   }


   
   render() {
      return (
         <div className="container">
            <div className="header">
               <h1>Tic-Tac-Toe</h1>
               <Alert winner={this.state.winner} />
               <Replay reset={this.resetBoard.bind(this)} />

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

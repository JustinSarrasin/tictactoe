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
            '', '', '', '', '', '', '', '', ''
         ],
         turn: 'x',
         winner: null
      };
      this.updateBoard = this.updateBoard.bind(this);

   }

   updateBoard(loc, player){
      //  only allows for one play per square
      if(this.state.game[loc] === 'x' || this.state.game[loc] === 'o' || this.state.winner){
         return;
      }
      
      let currentGameBoard = this.state.game;
      currentGameBoard.splice(loc, 1, this.state.turn);
      this.setState({game: currentGameBoard});

      let top = this.state.game[0] + this.state.game[1] + this.state.game[2];
      if(top.match(/xxx|ooo/)){
         this.setState({winner: this.state.turn});
         return;
      }
      let middle = this.state.game[3] + this.state.game[4] + this.state.game[5];
      if(middle.match(/xxx|ooo/)){
         this.setState({winner: this.state.turn});
         return;
      }
      let bottom = this.state.game[6] + this.state.game[7] + this.state.game[8];
      if(bottom.match(/xxx|ooo/)){
         this.setState({winner: this.state.turn});
         return;
      }
      let left = this.state.game[0] + this.state.game[3] + this.state.game[6];
      if(left.match(/xxx|ooo/)){
         this.setState({winner: this.state.turn});
         return;
      }
      let middleColumn = this.state.game[1] + this.state.game[4] + this.state.game[7];
      if(middleColumn.match(/xxx|ooo/)){
         this.setState({winner: this.state.turn});
         return;
      }
      let right = this.state.game[2] + this.state.game[5] + this.state.game[8];
      if(right.match(/xxx|ooo/)){
         this.setState({winner: this.state.turn});
         return;
      }
      let diagDown = this.state.game[0] + this.state.game[4] + this.state.game[8];
      if(diagDown.match(/xxx|ooo/)){
         this.setState({winner: this.state.turn});
         return;
      }
      let diagUp = this.state.game[2] + this.state.game[4] + this.state.game[6];
      if(diagUp.match(/xxx|ooo/)){
         this.setState({winner: this.state.turn});
         return;
      }
      let moves = this.state.game.join('').replace(/ /g, '');
      if(moves.length === 9){
         this.setState({winner: 'd'});
      }
      this.setState({turn: (this.state.turn === 'x') ? 'o' : 'x'});
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

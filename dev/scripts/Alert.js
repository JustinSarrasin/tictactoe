import React from 'react';
import ReactDOM from 'react-dom';


export default class Alert extends React.Component {
   render(){
      return(
         <div className={this.props.winner ? 'visible' : 'hidden'}>
            <h2>Game Over</h2>
         </div>
      )
   }
}
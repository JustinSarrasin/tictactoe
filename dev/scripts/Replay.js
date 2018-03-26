import React from 'react';
import ReactDOM from 'react-dom';

export default class Replay extends React.Component {
   render(){
      return(
         <button onClick={this.props.reset}>Reset</button>
      )
   }
}

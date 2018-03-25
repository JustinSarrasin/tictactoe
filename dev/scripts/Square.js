import React from 'react';
import ReactDOM from 'react-dom';

export default class Square extends React.Component{
   squareClick(props) {
      props.updateBoard(props.loc, props.turn);
   }
   render(){
      return (
         <div className={"square " + this.props.loc} onClick={() => this.squareClick(this.props)}>
            <p>{this.props.value}</p>
         </div>
      )
      
   }
}
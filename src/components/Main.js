import React, { Component } from 'react'
import { data } from '../shared/ListOfPlayer'
import PlayersPresentation from './PlayersPresentation';
export class Main extends Component {
   constructor() {
      super();
      this.state = {
         players: data
      };
   }
   render() {
      return <PlayersPresentation players={this.state.players} />
   }
}
export default Main

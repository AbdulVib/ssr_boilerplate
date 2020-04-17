import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date(), name: 'Ram'};
      }
      render() {
         const handleName = _ => {
              this.setState({ name: 'shyam' });
          }
        return (
            <div>
                <h1>MY NAME IS { this.state.name } HOME Component</h1>
                <button onClick={ handleName }>CHANGE NAME</button>
                <button onClick={() => console.log('hello from HOME')}>CLICK</button>
            </div>
        )
    }
}

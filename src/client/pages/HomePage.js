import React, { Component } from 'react'

class Home extends Component {
    state = {
        name: 'Ram'
    }
      render() {
        //  const handleName = _ => {
        //       this.setState({ name: 'shyam' });
        //   }
        return (
            <div>
                <h1>MY NAME IS { this.state.name } HOME Component</h1>
                {/* <button onClick={ handleName }>CHANGE NAME</button> */}
                <button onClick={() => console.log('hello from HOME')}>CLIccCK</button>
            </div>
        )
    }
}

export default {
    component: Home
}
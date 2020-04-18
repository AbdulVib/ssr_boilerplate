import React, { Component } from 'react'

import { connect } from 'react-redux'

import { fetchUsers } from '../actions'

class UsersList extends Component {
    componentDidMount() {
        this.props.fetchUsers()
    }

    renderUsers(){
      return  this.props.users.map(i => {
            return <li key={ i.id }>{ i.name }</li>
        })
    }

    render() {
        return (
            <div>
                <h1>Here is a big list of users.</h1>
                <ul>
                    { this.renderUsers() }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        users: state.users
    }
}

// const mapDispatchToProps = dispatch => {
//     return{}
// }

function loadData(store){
   return store.dispatch(fetchUsers())
    // console.log('hello from home')
}

export default{ 
    loadData,
    component: connect(mapStateToProps, { fetchUsers })(UsersList)
}
// export default connect(mapStateToProps, mapDispatchToProps)(UsersList)
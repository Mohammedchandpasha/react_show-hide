// Write your code here
import './index.css'

import {Component} from 'react'

class ShowHide extends Component {
  state = {first: null, last: null}

  changeFirstNameStatus = () => {
    const {first} = this.state

    if (first === null) {
      this.setState({first: 'firstname', ftext: 'Joe'})
    } else {
      this.setState({first: null, ftext: ''})
    }
  }

  changeLastNameStatus = () => {
    const {last} = this.state

    if (last === null) {
      this.setState({last: 'firstname', ltext: 'Jonas'})
    } else {
      this.setState({last: null, ltext: ''})
    }
  }

  render() {
    const {first, last, ftext, ltext} = this.state
    return (
      <div className="container">
        <h1 className="white-heading">Show/Hide</h1>
        <div className="names-container">
          <div className="firstname-container ">
            <button type="button" onClick={this.changeFirstNameStatus}>
              Show/Hide Firstname
            </button>

            <p className={first}>{ftext} </p>
          </div>
          <div className="firstname-container">
            <button type="button" onClick={this.changeLastNameStatus}>
              Show/Hide Lastname
            </button>
            <p className={last}> {ltext}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide

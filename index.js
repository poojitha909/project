import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribe: true}

  render() {
    const {isSubscribe} = this.state

    return (
      <div className="con">
        <h1 className="head">WELCOME</h1>
        <p className="para">Thanks for watching</p>
        <button type="button" className="button" onClick={this.change}>
          {isSubscribe}
        </button>
      </div>
    )
  }
}
export default Welcome

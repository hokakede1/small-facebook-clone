import React, {Component} from 'react'
import { connect } from 'react-redux'
import { postNewsFeed } from '../actions'


class InputField extends Component {
  constructor(props){
    super(props)

    this.state = {
      input: ''
    }
  }
  // Recording what people type
  onHandleChange(e){
    this.setState({
      input: e.target.value
    })
  }

// Set component input listener states to the store
  onClickEvent(e){
    e.preventDefault();
    this.props.postNewsFeed(this.state.input);
    this.setState({
      input: ''
    })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.onClickEvent.bind(this)}>
          <label>
            <input type='text'
              value={this.state.input}
              onChange={this.onHandleChange.bind(this)}
              placeholder='What do you feel ?'/>
          </label>
          <button  type='submit'>POST</button>
        </form>
        <button>Upload Picture</button>
      </div>
    )
  }
}


export default connect(null, {postNewsFeed})(InputField)

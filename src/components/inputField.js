import React, {Component} from 'react'
import { connect } from 'react-redux'
import { postNewsFeed, postImg } from '../actions'


class InputField extends Component {
  constructor(props){
    super(props)

    this.state = {
      input: '',
      imgInput: '',
      imgUpload: false
    }
  }
  // Recording what people type
  onHandleChange(e){
    this.setState({
      input: e.target.value
    })
  }

  onImgInputChange(e){
    this.setState({
      imgInput: e.target.value
    })
  }

// Set component input listener states to the store
  onClickEvent(e){
    if (!this.state.input) {
      e.preventDefault();
      return alert('Please type something')}
    e.preventDefault();
    this.props.postNewsFeed(this.state.input);
    this.setState({
      input: ''
    })
  }

  onSubmitImg(e){
    if (!this.state.imgInput) {
      e.preventDefault();
      return alert('Please give an url')}
    e.preventDefault();
    this.props.postImg(this.state.imgInput);
    this.setState({
      imgInput: ''
    })
  }

  onUploadImg(){
    this.setState({
      imgUpload: true
    })
  }

  onPostStatus(){
    this.setState({
      imgUpload: false
    })
  }





  render() {

    var displayNone = {
      display: 'none'
    }

    var displayBlock = {
      display: 'block'
    }

    return (
      <div>
        <form onSubmit={this.onClickEvent.bind(this)}
          style={this.state.imgUpload ? displayNone : displayBlock}>
            <label>
              <input type='text'
                value={this.state.input}
                onChange={this.onHandleChange.bind(this)}
                placeholder='What do you feel ?'/>
            </label>
            <button  type='submit'>POST</button>
        </form>



        <form onSubmit={this.onSubmitImg.bind(this)}
              style={this.state.imgUpload ? displayBlock : displayNone}>
          <label>
            <input type='text'
              value={this.state.imgInput}
              onChange={this.onImgInputChange.bind(this)}
              placeholder='Please enter a url'/>
          </label>
          <button  type='submit'>UPLOAD</button>
        </form>


        <button onClick={this.onUploadImg.bind(this)}
                style={this.state.imgUpload ? displayNone : displayBlock}
          >Upload Picture</button>


        <button onClick={this.onPostStatus.bind(this)}
                style={this.state.imgUpload ? displayBlock : displayNone}
          >Post a status</button>

      </div>
    )
  }
}


export default connect(null, {postNewsFeed, postImg})(InputField)

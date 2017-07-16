import React, {Component} from 'react'
import {connect} from 'react-redux'
import NewsFeed from './posts'
import {changePro} from '../actions'

function mapStatetoProps(state){
  return {
    username: state.name,
    userpicture: state.profilePic
  }
}



class Profile extends Component {
  constructor(props){
    super(props)

    this.state = {
      input: ''
    }
    this.onChangeAvatar = this.onChangeAvatar.bind(this)
    this.onSubmitImg = this.onSubmitImg.bind(this)
  }

  onChangeAvatar(e){
    this.setState({
      input: e.target.value
    })
  }

  onSubmitImg(){
    this.props.changePro(this.state.input)
  }

  render () {
  return(
    <div>
      <header>
        <div>
          <img src={this.props.userpicture} alt='profilePic' />
          <h1>{this.props.name}</h1>
        </div>
      </header>

      <section>
        <div>
          <input value={this.state.input}
                 onChange={this.onChangeAvatar}
                 ></input>
          <button onClick={this.onSubmitImg}>Submit</button>
          <button>Change profile picture</button>
          <button>Change your name </button>
        </div>
        <NewsFeed/>
      </section>
    </div>
  )
}

}

export default connect(mapStatetoProps, {changePro})(Profile)

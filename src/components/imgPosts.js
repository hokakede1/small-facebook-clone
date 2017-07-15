import React, {Component} from 'react'
import { deletImg } from '../actions'
import { connect } from 'react-redux'

class ImgPosts extends Component {
  constructor(props){
    super(props)

    this.state = {
      like: false,
      times: ''
    }
  }

  onLikeHandle(){
    this.setState({
      like: !this.state.like
    })
    !this.state.like ? this.setState({ times : '1'}) : this.setState({ times : ''})
  }

  onDel(){

    this.props.deletImg(this.props.index)

  }

  render(){
    return(
      <div>
        <img src={this.props.imgurl} alt='uploaded picture'/>
        <button
          onClick={this.onLikeHandle.bind(this)}>
          {`${this.state.times} Like`}
        </button>
        <button>Share</button>
        <button>Comment</button>
        <button onClick={this.onDel.bind(this)}>Delete</button>
    </div>
    )
  }
}

export default connect(null, {deletImg} )(ImgPosts)

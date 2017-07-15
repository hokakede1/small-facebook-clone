import React, {Component} from 'react'

export default class Individual extends Component {
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


  render(){
    return(
      <div>
        <h1>{this.props.content}</h1>
        <button
          onClick={this.onLikeHandle.bind(this)}>
          {`${this.state.times} Like`}
        </button>
        <button>Share</button>
        <button>Comment</button>
    </div>
    )
  }

}

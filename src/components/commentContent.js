import React, {Component} from 'react'

class CommentContent extends Component {
  constructor(props){
    super(props)

    this.state={
      like: false,
      times: '',
      editinput: this.props.allcomment
    }

    this.onEditChange = this.onEditChange.bind(this)
    this.onEditSubmit = this.onEditSubmit.bind(this)
  }

  onEditSubmit(){
    this.props.editComment(this.props.index, this.state.editinput)
  }


  onEditChange(e){
    this.setState({
      editinput: e.target.value
    })
  }

  onLikeHandle(){
    this.setState({
      like: !this.state.like
    })
    !this.state.like ? this.setState({ times : '1'}) : this.setState({ times : ''})
  }

  onDeleteComment(){
    this.props.deleteComment(this.props.index)
  }

  render() {
    return (
      <div>
        <h6> {this.props.allcomment} </h6>
        <input value={this.state.editinput}
               onChange={this.onEditChange}
          ></input>
        <button onClick={this.onEditSubmit}>Edit</button>
        <br />
        <button onClick={this.onLikeHandle.bind(this)}>
          {`${this.state.times} Like`}</button>
        <button onClick={this.onDeleteComment.bind(this)}>Delete</button>
        <button>Edit</button>

      </div>
    )
  }

}

export default CommentContent

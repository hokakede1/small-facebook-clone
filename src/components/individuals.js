import React, {Component} from 'react'
import { delet, editPost } from '../actions'
import { connect } from 'react-redux'
import Comment from './comment'

class Individual extends Component {
  constructor(props){
    super(props)

    var copy = this.props.content;

    this.state = {
      like: false,
      copy: copy,
      times: '',
      comment:[],
      editinput: ''
    }

    this.onEditChange = this.onEditChange.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
    this.onCommentEditSubmit = this.onCommentEditSubmit.bind(this);
  }

  onCommentEditSubmit(index, value){
    console.log(value, index,'thisone')
    var newComment = this.state.comment.slice();
    newComment[index] = value

    this.setState({
      comment: newComment
    })
  }

  onEditChange(e){

    this.setState({
      copy: e.target.value
    })
  }


  onEditSubmit(){
    this.props.editPost(this.props.index, this.state.copy)
  }

  onLikeHandle(){
    this.setState({
      like: !this.state.like
    })
    !this.state.like ? this.setState({ times : '1'}) : this.setState({ times : ''})
  }

  onDel(){
    this.props.delet(this.props.index)
  }

  postComment(event){
    this.setState({
      comment: [...this.state.comment, event]
    })
  }

  deleteComment(index){
    this.setState({
      comment: this.state.comment.filter((item, i) => {return i !== index })
    })
  }


  render(){
    console.log( this.state.editinput )
    return(
      <div>
        <h1>{this.props.content}</h1>
        <input value={this.state.copy}
              onChange={this.onEditChange}
          ></input>
        <button onClick={this.onEditSubmit}>EDIT</button>
        <br />
        <button
          onClick={this.onLikeHandle.bind(this)}>
          {`${this.state.times} Like`}
        </button>
        <button>Edit</button>
        <button>Comment</button>
        <button onClick={this.onDel.bind(this)}>Delete</button>
        <Comment
          editComment={this.onCommentEditSubmit}
          deleteComment={this.deleteComment.bind(this)}
          mainComment={this.state.comment}
          changeComment={this.postComment.bind(this)}/>
    </div>
    )
  }
}

export default connect(null, {delet, editPost} )(Individual)

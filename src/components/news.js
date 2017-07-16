import React, {Component} from 'react'
import Comment from './comment'

export default class Bbc extends Component {
  constructor(props){
    super(props)

    this.state = {
      like: false,
      times: '',
      comment: []
    }

    this.onLikeHandle = this.onLikeHandle.bind(this)
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

  onLikeHandle(){
    this.setState({
      like: !this.state.like
    })
    !this.state.like ? this.setState({ times : '1'}) : this.setState({ times : ''})
  }

  render() {
    return (
      <div>
        <h1>{this.props.author}</h1>
        <a href={this.props.link} target='_blank' >
          <img alt='Fail to Upload' src={this.props.thumbnail}/> </a>
        <a href={this.props.link} target='_blank'><h1>{this.props.header}</h1> </a>
        <button onClick={this.onLikeHandle}>{`${this.state.times} Like`}</button>
        <button>Comment</button>
        <Comment
          editComment={this.onCommentEditSubmit}
          deleteComment={this.deleteComment.bind(this)}
          mainComment={this.state.comment}
          changeComment={this.postComment.bind(this)}/>
      </div>
    )
  }
}

import React,{ Component } from 'react'
import CommentContent from './commentContent'

class Comment extends Component {
  constructor(props){
    super(props)

    this.state={
      commentinput: '',
    }
  }


  commentListener(e){
    this.setState({
      commentinput: e.target.value
    })
  }

  commentSubmit(e){
    if (!this.state.commentinput) {
      e.preventDefault();
      return alert('Please type your comment in')
    }
    e.preventDefault();
    this.props.changeComment(this.state.commentinput)
    this.setState({
      commentinput: ''
    })
  }



  render(){

    var commentContent = this.props.mainComment.map((item, i) => {
      return (
        <div key={i}>
          <CommentContent allcomment={item}
                          deleteComment={this.props.deleteComment}
                          editComment={this.props.editComment}
                          index={i}/>
        </div>
      )
    })

    var displayNone = {
      display: 'none'
    }

    return(
      <div style={this.props.status ? null : displayNone}>
        {commentContent}
        <form onSubmit={this.commentSubmit.bind(this)}>
          <label>
            <input
                  value={this.state.commentinput}
                  onChange={this.commentListener.bind(this)}
                  placeholder='type your comment'></input>
          </label>
            <button>Comment</button>
        </form>
      </div>
    )
  }
}

export default Comment

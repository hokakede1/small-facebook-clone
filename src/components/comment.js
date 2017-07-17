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
        <div className='comment' style={this.props.status ? null : displayNone}>
          {commentContent}
          <div >
            <article className='media'>

              <figure className="media-left">
                  <p className="image is-64x64">
                    <img src="http://bulma.io/images/placeholders/128x128.png" />
                  </p>
                </figure>


              <div className='media-content'>
                <form onSubmit={this.commentSubmit.bind(this)}>
                  <div class="field">
                  <label>
                    <input
                          className='textarea'
                          value={this.state.commentinput}
                          onChange={this.commentListener.bind(this)}
                          placeholder='type your comment...'></input>
                  </label>
                  </div>
                    <button className='button'>Comment</button>
                </form>


              </div>
            </article>
          </div>
        </div>
        )
  }
}

export default Comment

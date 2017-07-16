import React, {Component} from 'react'

class CommentContent extends Component {
  constructor(props){
    super(props)

    this.state={
      like: false,
      times: '',
      editinput: this.props.allcomment,
      toggleEdit: false,
    }

    this.onEditChange = this.onEditChange.bind(this)
    this.onEditSubmit = this.onEditSubmit.bind(this)
    this.onToggleEdit = this.onToggleEdit.bind(this)
  }

  onToggleEdit(){
    this.setState({
      toggleEdit: !this.state.toggleEdit
    })
  }

  onEditSubmit(){
    this.props.editComment(this.props.index, this.state.editinput);
    this.setState({
      toggleEdit: !this.state.toggleEdit
    })
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

    var displayNone = {
      display: 'none'
    }

    return (
      <div>
        <h6 style={this.state.toggleEdit ? displayNone : null}
          > {this.props.allcomment} </h6>
        <input style={this.state.toggleEdit ? null : displayNone}
               value={this.state.editinput}
               onChange={this.onEditChange}
          ></input>
        <button
          style={this.state.toggleEdit ? null : displayNone}
          onClick={this.onEditSubmit}>Edit</button>
        <br />
        <button onClick={this.onLikeHandle.bind(this)}>
          {`${this.state.times} Like`}</button>
        <button onClick={this.onDeleteComment.bind(this)}>Delete</button>
        <button onClick={this.onToggleEdit}>Edit</button>

      </div>
    )
  }

}

export default CommentContent

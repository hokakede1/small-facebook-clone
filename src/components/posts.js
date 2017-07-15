import React from 'react'
import { connect } from 'react-redux'
import Individual from './individuals'
import ImgPosts from './imgPosts'



function NewsFeed(props){
  // Posting status
  var news = props.post.map((item, i) => {
    return (<Individual key={i} content={item} index={i}/>)
  })

  //Upload img
  var img = props.imgPost.map((item, i) => {
    return (<ImgPosts key={i} imgurl={item} index={i}/>)
  })

  return (
    <div>
      {/* {news}
      {img} */}

      {props.post.length > props.imgPost.length ? news : img}
      {props.post.length < props.imgPost.length ? news : img}
    </div>
  )
}

function mapStatetoProps(state){
  return {
    post: state.posts,
    imgPost: state.imgPost
  }
}

export default connect(mapStatetoProps)(NewsFeed)

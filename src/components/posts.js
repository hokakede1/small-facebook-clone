import React from 'react'
import { connect } from 'react-redux'
import Individual from './individuals'



function NewsFeed(props){
  var news = props.post.map((item, i) => {
    return (<Individual key={i} content={item} />)
  })

  return (
    <div>
      {news}
    </div>
  )
}

function mapStatetoProps(state){
  return {
    post: state.posts
  }
}

export default connect(mapStatetoProps)(NewsFeed)

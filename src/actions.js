export function postNewsFeed(content){
  return {
    type: 'POST',
    payload: content
  }
}

export function delet(index){
  return {
    type: 'DELETE',
    payload: index
  }
}


export function deletImg(index){
  return {
    type: 'DELETE_IMG',
    payload: index
  }
}




export function postImg(content){
  return {
      type: 'POST_IMAGE',
      payload: content
  }
}

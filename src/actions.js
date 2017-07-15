export function postNewsFeed(content){
  return {
    type: 'POST',
    payload: content
  }
}

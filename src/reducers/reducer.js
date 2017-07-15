
//Initial States
var user = {
  name: 'Huy Dang',
  posts: [],
  imgPost: [],
  profilePic: '',
  comment: [],
  username: 'huydang97'
}

//Declare Action_type
var POST = 'POST';
var DELETE = 'DELETE';
var POST_IMAGE = 'POST_IMAGE';
var UPDATE_PRO = 'UPDATE_PRO';
// var COMMENT = 'COMMENT';

export default function reducer(state=user, action) {
  switch (action.type) {
    case POST:{
    return  {...state,
        posts: [...state.posts, action.payload]
      }
    break;

    }
    // case DELETE:{
    //
    //   state = {...state,
    //     posts: state.posts.filter()
    //   }
    // break;
    // }

    case POST_IMAGE:{
      state = {...state,
        imgPost: [...state.imgPost, action.payload]
      }
    break;
    }

    case UPDATE_PRO:{
      state = {...state,
        profilePic: action.package
      }
    break;
    }

    default:
      return state;

  }
}


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
var DELETE_IMG = 'DELETE_IMG'
// var COMMENT = 'COMMENT';



export default function reducer(state=user, action) {
  console.log(state.imgPost)
  switch (action.type) {
    case POST:{

    return  {...state,
        posts: [...state.posts, action.payload]
      }
    break;
    }

    case DELETE:{

      return {...state,
        posts: state.posts.filter((e, i) => {return i !== action.payload} ),
      }
    break;
    }

    case DELETE_IMG:{

      return {...state,
        imgPost: state.imgPost.filter((e, i) => {return i !== action.payload} )
      }
    break;
    }

    case POST_IMAGE:{
      return {...state,
        imgPost: [...state.imgPost, action.payload]
      }
    break;
    }

    // case UPDATE_PRO:{
    //   return {...state,
    //     profilePic: action.package
    //   }
    // break;
    // }

    default:
      return state;

  }
}

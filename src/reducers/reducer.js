
//Initial States
var user = {
  name: 'Huy Dang',
  posts: [],
  imgPost: [],
  profilePic: '',
}

//Declare Action_type
var POST = 'POST';
var DELETE = 'DELETE';
var POST_IMAGE = 'POST_IMAGE';
// var UPDATE_PRO = 'UPDATE_PRO';
var DELETE_IMG = 'DELETE_IMG'
var EDIT = 'EDIT';




export default function reducer(state=user, action) {
  console.log(state.imgPost)
  switch (action.type) {
    case POST:{

    return  {...state,
        posts: [...state.posts, action.payload]
      }
    }

    case DELETE:{

      return {...state,
        posts: state.posts.filter((e, i) => {return i !== action.payload} ),
      }
    }

    case DELETE_IMG:{

      return {...state,
        imgPost: state.imgPost.filter((e, i) => {return i !== action.payload} )
      }
    }

    case POST_IMAGE:{
      return {...state,
        imgPost: [...state.imgPost, action.payload]
      }
    }

    case EDIT:{
      var newarr = state.posts.slice();
      newarr[action.index] = action.payload;
      return {...state,
        posts: newarr
      }
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

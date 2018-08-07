import { FETCH_IMAGES , FETCH_IMAGE , FETCH_AUTO_COMPLETE } from 'actions';

export default function(state = {}, action){
  switch(action.type){
    case FETCH_IMAGE:
        return action.payload.data
    case FETCH_IMAGES:
      if(state.searchterm === action.payload.data.searchterm){
        return state
      }
      else { return action.payload.data }
    case FETCH_AUTO_COMPLETE:
      return {'auto_complete' : action.payload.data.auto_complete};
    default:
      return state;
  }
}

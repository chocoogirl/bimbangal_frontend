import { combineReducers } from 'redux';
import SearchResults from './reducer_results';

const rootReducer = combineReducers({
  resultsReducer : SearchResults
});

export default rootReducer;

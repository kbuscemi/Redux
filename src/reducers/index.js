import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  //combineReducers is a mapping of our state
  books: BooksReducer

});

export default rootReducer;

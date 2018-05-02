import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  //combineReducers is a mapping of our state
  books: BooksReducer
  // key === books; value === BooksReducer
  //when passing object (books: BooksReducer) to combineReducers telling Redux how to make our app's state.
});

export default rootReducer;

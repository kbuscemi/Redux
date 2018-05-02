import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  //combineReducers is a mapping of our state
  //for each key in our combined reducers object we assign one reducer
  //that reducer is responsible for creating a piece of state. 
  //i.e. key is activeBook and reduucer is ActiveBook. 
  books: BooksReducer,
  // key === books; value === BooksReducer
  //when passing object (books: BooksReducer) to combineReducers telling Redux how to make our app's state.
  activeBook: ActiveBook
  //whatever ActiveBook reducer returns will be available as our activeBook
  //piece of application state
  
  //any key to the object that we provide to combine reducers ends up as a key on
  //our global state
});

export default rootReducer;

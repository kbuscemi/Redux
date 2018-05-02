import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';
// what we use to make sure that the action that is generated by the action creator
// actually ends up flowing through all the different reducers.


class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title} 
                    onClick={() => this.props.selectBook(book)}
                    className='list-group-item'>
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className='list-group col-sm-4'>
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    //purpose of this function is to take applications state and whatever gets 
    //returned from this function will show up as props inside of booklist
    return {
        books: state.books 
        //want value to be list of books off of our state.
        //books reducer is returning the array of books
    }
}
//^^ function is the glue between react and redux

//anything returned from mapDispatchToProps  function will end up as props on the 
//BookList container
function mapDispatchToProps(dispatch) {
    //whenever selectBook is called, the result should be passed to all 
    //of our reducers..that is what bindActionCreators is doing with dispatch
    return bindActionCreators({ selectBook: selectBook}, dispatch);
    //value: selectBook is the action creator we imported at the top
}
//the purpose of bindActionCreators and dispatch is to take what gets returned from selectBook and 
//make sure that it flows through all the reducers

//connect as well as mapStateToProps --  promote BookList from a component to a container - it needs to know
//about this new dispatch method, selectBook. Make it available as a 
//prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
//connect takes a function and a component and produces a container. 
// a container is a componenet that is aware of the state that is contained by redux
//^^ by using connect - whenever application's state changes - in mapStateToProps function-- the container will instantly render with a new list of books

//mapStateToProps - first argument is state and returns an object. 
//whatever object is returned will be available to our component as this.props
//state argument is not application state, only the state
//this reducer is responsible for

//state = null is ES6 syntax and says when this argument comes in and it's undefined set it to null
export default function(state = null, action) {
    switch(action.type) {
    case 'BOOK_SELECTED':
        return action.payload;
    }
    
    return state;
}

//all reducers get 2 arguements: state, action
//a reducer is only ever called when an action occurs
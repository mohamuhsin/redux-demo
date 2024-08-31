// importing redux
const redux = require("redux");

// Reducer function takes state and action as parameters
const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === "increment") {
        return {
            counter: state.counter + 1,
        };
    }

    if (action.type === "decrement") {
        return {
            counter: state.counter - 1,
        };
    }

    return state;
};

const store = redux.createStore(counterReducer); // creating store

// subscriber function
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

//tells redux to execute this function whenever state changes
store.subscribe(counterSubscriber);

//trigers action or dispatch
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });

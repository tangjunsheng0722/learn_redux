import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from "redux";
import { Provider,connect } from "react-redux";


// 组件
class App extends React.Component{
    render() {
        const {text, onChangeText, onButtonClick} = this.props;
        return (
            <div>
                <h1 onClick={onChangeText}> {text} </h1>
                <button onClick={onButtonClick}>click me</button>
            </div>
        );
    }
}


// action
const changeTextAction = {
    type:"CHANGE_TEXT"
};
const buttonClickAction = {
    type: "BUTTON_CLICK"
};
// reducer
const initialState = {text: 'Hello'};

const reducer = (state=initialState,action) =>{
    switch (action.type) {
        case "CHANGE_TEXT":
            return {
                text: state.text="Hello" ? "world":"Hello"
            };
        case "BUTTON_CLICK":
            return {
                text: "Hello World"
            };
        default:
            return initialState;
    }
};
// store
let store = createStore(reducer);

// 映射state到组件
function mapStateToProps(state){
    return {text:state.text}
}
// 映射actions到组件的属性
function mapDispatchToProps(dispatch){
    return {
        onButtonClick:()=>dispatch(buttonClickAction),
        onChangeText:()=>dispatch(changeTextAction)
    }
}
//连接组件
App = connect(mapStateToProps,mapDispatchToProps)(App);



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root"),
);
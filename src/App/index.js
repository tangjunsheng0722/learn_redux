import React from 'react';
import { connect } from "react-redux";
const App = ( text, onChangeText, onButtonClick) =>(
    <div>
        <h1 onClick={onChangeText}>{text}</h1>
        <button onClick={onButtonClick}>click me</button>
    </div>
);
//映射Redux state到组件的属性
function mapStateToProps(state) {
    return { text: state.text }
}
//映射Redux actions到组件的属性
function mapDispatchToProps(dispatch) {
    return {
        onButtonClick: () => dispatch(buttonClickAction),
        onChangeText: () => dispatch(changeTextAction)
    };
}
    App = connect(mapStateToProps,mapDispatchToProps)(App);
export default App;
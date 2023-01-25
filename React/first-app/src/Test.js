import React from 'react';
// import "./Test.css";
import './Test.css';

// const Test = () => {
//     return (
//         <div>
//             <h1>Test</h1>
//         </div>
//     );
// }

class Test extends React.Component {
    state = {isLoggedIn: false};
    render() {
        return (
            <div>{
                !this.state.isLoggedIn 
                ? (<h1>Logged Out</h1>) 
                : (<h1>Logged In</h1>)
            }
            <button onClick={(e) => this.setState({isLoggedIn: true})}>Login</button>
            </div>
        );
    }
}

export default Test;
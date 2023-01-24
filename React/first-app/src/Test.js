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
    render() {
        return (
            <div>
                <h1 id = "testId" 
                // style= {{
                //     color: "red",
                //     backgroundColor: "yellow"
                // }}
                >
                Test</h1>
            </div>
        );
    }
}

export default Test;
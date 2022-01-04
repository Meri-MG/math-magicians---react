import React from 'react';
import ReactDOM from 'react-dom';

class Calculator extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className='calculator-grid'>
                <div className='output'>0</div>
                <button>AC</button>
                <button>+/-</button>
                <button>%</button>
                <button className='orange'>&divide;</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className='orange'>&times;</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button className='orange'>-</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button className='orange'>+</button>
                <button className='span-two'>0</button>
                <button>.</button>
                <button className='orange'>=</button>

                
            </div>
        )
     }
}

export default Calculator;
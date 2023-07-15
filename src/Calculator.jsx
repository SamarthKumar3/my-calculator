import React, { useState } from "react";

import './Calculator.css';

const Calculator = () => {
    const [expression, setExpression] = useState('');

    const handleButtonClick = (value) => {
        setExpression((prevExpression) => prevExpression + value);
    };

    const negate = () => {
        setExpression(prevVal => -prevVal)
    }

    const handleEvaluate = () => {
        try {
            const result = Function(`'use strict'; return (${expression})`)();
            setExpression(result.toString());
        } catch (error) {
            setExpression('Error');
        }
    };

    const handleClear = () => {
        setExpression('');
    };

    return <div>

        <div className="parent">
            <div className="div1">
                <button className="operator" onClick={() => handleButtonClick('0')}>
                    0
                </button>
            </div>
            <div className="div2">
                <button className="operator" onClick={() => handleButtonClick('.')}>
                    .
                </button>
            </div>
            <div className="div3">
                <button className="equal" onClick={() => handleEvaluate()} >
                    =
                </button>
            </div>
            <div className="div4">
                <button className="operator" onClick={() => handleButtonClick('+')}>
                    +
                </button>
            </div>

            <div className="div5">
                <button className="operator" onClick={() => handleButtonClick('3')}>
                    3
                </button></div>
            <div className="div6">
                <button className="operator" onClick={() => handleButtonClick('2')}>
                    2
                </button>
            </div>
            <div className="div7">
                <button className="operator" onClick={() => handleButtonClick('1')}>
                    1
                </button>
            </div>
            <div className="div8">
                <button className="operator" onClick={() => handleButtonClick('4')}>
                    4
                </button></div>
            <div className="div9">
                <button className="operator" onClick={() => handleButtonClick('5')}>
                    5
                </button>
            </div>
            <div className="div10">
                <button className="operator" onClick={() => handleButtonClick('6')}>
                    6
                </button>
            </div>
            <div className="div11">
                <button className="operator" onClick={() => handleButtonClick('-')}>
                    -
                </button>
            </div>
            <div className="div12">
                <button className="operator" onClick={() => handleButtonClick('*')}>
                    x
                </button>
            </div>
            <div className="div13">
                <button className="operator" onClick={() => handleButtonClick('9')}>
                    9
                </button>
            </div>
            <div className="div14">
                <button className="operator" onClick={() => handleButtonClick('8')}>
                    8
                </button>
            </div>
            <div className="div15">
                <button className="operator" onClick={() => handleButtonClick('7')}>
                    7
                </button>
            </div>
            <div className="div16">
                <button className="clear" onClick={() => handleClear()}>
                    AC
                </button>
            </div>
            <div className="div17">
                <button className="operator" onClick={()=> negate()}>
                    +/-
                </button>
            </div>
            <div className="div18">
                <button className="operator" onClick={() => handleButtonClick('%')}>
                    %
                </button>
            </div>
            <div className="div19">
                <button className="operator" onClick={() => handleButtonClick('/')}>
                    /
                </button>
            </div>
            <div className="div20">
                <input value={expression} type="text" onChange={(e) => setExpression(e.target.value)} />
            </div>
        </div>
    </div>
}

export default Calculator;

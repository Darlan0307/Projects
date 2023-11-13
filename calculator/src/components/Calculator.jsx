import React, { useState } from 'react';
import styles from './Calculator.module.css';

const Calculator = () => {
    const keyNumbers = ['1','2','3','4','5','6','7','8','9','0'];
    const keyOperations = ['+','-','/','*'];

    const [currentValue,setCurrentValue] = useState('0');
    const [pandingOperation,setPandingOperation] = useState(null);
    const [pandingValue,setPandingValue] = useState(null);
    const [completeOperation,setCompleteOperation] = useState('');

    const handleClick = (value) =>{
        setCurrentValue((oldNum) => {
            if(oldNum === '0'){
                return value;
            }else{
                return oldNum + value;
            }
        })
        setCompleteOperation((prevOperation) => prevOperation + value)
    }

    const handleClear = () => {
        setCompleteOperation('')
        setCurrentValue('0')
        setPandingOperation(null)
        setPandingValue(null)
    } 

    const handleOperation = (operation) => {
        setPandingValue(currentValue);
        setPandingOperation(operation);
        setCompleteOperation(currentValue + " " + operation)
        setCurrentValue('0')
    }

    const handleCalculate = () =>{
        if(!pandingValue || !pandingOperation){
            return;
        }

        let num1 = parseFloat(pandingValue);
        let num2 = parseFloat(currentValue);

        let result

        switch (pandingOperation) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if(num2 !== 0){
                    result = num1 + num2;
                    break;
                }else{
                    setCompleteOperation('Error')
                    setCurrentValue('Error')
                    setPandingOperation(null)
                    setPandingValue(null)
                    return
                }
                
        
            default:
                break;
        }

        setCompleteOperation(pandingValue+" "+pandingOperation + " " + currentValue + " = " + result)

        setCurrentValue(result.toString())
        setPandingOperation(null)
        setPandingValue(null)
        
    }

  return (
    <div className={styles.calculator}>
        <div className={styles.complete_operation}>{completeOperation}</div>
        <div className={styles.result_operation}>{currentValue}</div>
        <div className={styles.buttons}>
            <button onClick={handleClear}>AC</button>

            {keyNumbers.map((num) => (
                <button key={num} onClick={() => handleClick(num)}>{num}</button>
            ))}

            {keyOperations.map((operation) => (
                <button key={operation} onClick={() => handleOperation(operation)}>{operation}</button>
            ))}

            <button onClick={handleCalculate}>=</button>
        </div>

    </div>
  )
}

export default Calculator
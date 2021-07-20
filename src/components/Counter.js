import React, {useState, useEffect} from 'react';

import '../styles/Counter.css';

const Counter = ({start, end, swing, format}) => {

    const [count, setCount] = useState(start);

    const falseEnd = swing ? end + 12 : end;
    let didReachFalseEnd = false;

    const doIt = () => {

        if(didReachFalseEnd){

            if(count !== end) {
                setCount(count - 1);
            }

        }else{
            if(count === falseEnd) didReachFalseEnd = true;
            else setCount(count + 1);
        }

    }

    useEffect(() => {

        let timer = setInterval(() => {

            if(didReachFalseEnd){
                if(count !== end) setCount(count - 1);
                else clearInterval(timer);
            }else{
                if(count === falseEnd) didReachFalseEnd = true;
                else setCount(count + 1);
            }

        }, 5);

    }, [])

    return (
        <div className="counter-container">
            <p>{format.replace(`{number}`, `${count}`.padStart(2, '0'))}</p>
        </div>
    );

}
 
export default Counter;
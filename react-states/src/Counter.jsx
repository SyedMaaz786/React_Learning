import { useState } from "react";

export default function Counter() {
    let [count, setCount] = useState(0);   {/* here we have used usestate for which 2 args we need to pass one is normal and one is set inside a array */}
    
    let incCount = () => {    
        setCount(count += 1);   {/* Here we need to pass 2nd argm ie setCount */}
        console.log(count);
    }

    return (
        <div>
            <h3>Count={count}</h3>
            <button onClick={incCount}>To increase Count click me!</button>
        </div>
    )
}
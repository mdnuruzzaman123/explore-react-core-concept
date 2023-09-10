import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);

    // Increase
    const handleClickIncrease = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    // Decrease
    const handleClickDecrease = () => {
        const newCount = count - 1;
        setCount(newCount)
    }

    return (
        <div style={{
            border: '1px solid tomato',
            borderRadius: '25px',
            padding: '20px',
            margin: '20px'
        }}>
            <h2>Counter</h2>

            <h1>{count}</h1>

            <button style={{
                borderRadius: '15px'
            }}
                onClick={handleClickDecrease}
            >Decrease</button>

            <button style={{
                marginLeft: '15px',
                borderRadius: '15px'
            }}
                onClick={handleClickIncrease}
            >Increase</button>
        </div>
    )
}
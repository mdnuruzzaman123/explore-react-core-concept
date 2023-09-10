export default function EventHandler() {
    function handleClick() {
        alert('Button One')
    }

    const handleClick2 = () => {
        alert('Button Tow')
    }

    const handleClick5 = (sum) => {
        alert(sum)
    }

    return (
        <div>
            <h3>Event Handlers</h3>
            <button onClick={handleClick}>One</button>
            <br />
            <br />
            <button onClick={handleClick2}>Tow</button>
            <br />
            <br />
            <button onClick={function () { alert('Button Three') }}>Three</button>
            <br />
            <br />
            <button onClick={() => alert('Button Four')}>Four</button>
            <br />
            <br />
            <button onClick={()=>handleClick5('Button Five')}>Five</button>
        </div>
    )
}
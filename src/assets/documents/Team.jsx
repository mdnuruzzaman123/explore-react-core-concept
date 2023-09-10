import { useState } from "react"

export default function Team() {
    const [team, setTeam] = useState(11);

    // add player
    const handleClickAdd = () => {
        setTeam(team + 1);
    }

    // remove player
    const handleClickRemove = () => {
        setTeam(team - 1);
    }

    // styles
    const teamStyles = {
        border: '1px solid tomato',
        borderRadius: '25px',
        padding: '20px',
        margin: '20px'
    }
    return (
        <div style={teamStyles}>
            <h2>Team</h2>
            <h1>{team}</h1>

            <button style={{
                borderRadius: '15px'
            }}
                onClick={handleClickRemove}
            >Remove Players</button>

            <button style={{
                marginLeft: '15px',
                borderRadius: '15px'
            }}
                onClick={handleClickAdd}
            >Add Players</button>
        </div>
    )
}
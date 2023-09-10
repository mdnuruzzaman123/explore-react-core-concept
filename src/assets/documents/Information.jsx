import { useEffect, useState } from "react"

export default function Information() {
    // declare useState
    const [info, setInfo] = useState([]);

    //declare useEffect
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setInfo(data))
    }, [])

    return (
        <>
            {
                info.map(data => <ShowDisplay data={data}></ShowDisplay>)
            }
        </>
    )
}

function ShowDisplay({ data }) {
    const { name, username, email, phone, address, company, website } = data;

    // styles
    const styles = {
        border: '1px solid tomato',
        borderRadius: '25px',
        padding: '20px',
        margin: '20px'
    }

    return (
        <div style={styles}>
            <h2>Load Data Information</h2>
            <p>your name : {name}</p>
            <p>your username : {username}</p>
            <p>your email : {email} </p>
            <p>your phone : {phone} </p>
            <p>your address : <br />
            city: {address.city}, street: {address.street} </p>
            <p>your company: {company.name} </p>
            <p>your website : {website} </p>
        </div>
    )
}
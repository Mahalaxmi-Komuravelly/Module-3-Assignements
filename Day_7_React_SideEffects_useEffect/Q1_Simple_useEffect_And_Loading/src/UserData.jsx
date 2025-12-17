import { useEffect, useState } from "react";


function UserData(){
    const [data,setData] =useState(null);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response=>response.json())
        .then(user=>setData(user))
    },[])

    return (
        data ? (<>

            <h3>Name : {data.name}</h3>
            <p>Email : {data.email}</p>
            <p>Phone : {data.phone}</p>
        </>) : <h1>Loading...</h1>
    )
}

export default UserData;
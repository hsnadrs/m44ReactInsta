import { useState } from "react";
import { updateEmail, login } from "../utils/utilities";

const UpdateEmail = ({setter}) => {
    const [username,setUsername] =useState();
    const [email,setEmail] =useState();
    const [password,setPassword] =useState();

const submitHandler = async (event) => {
        event.preventDefault();
        console.log("executing update email request")
        await updateEmail(username,email,password,setter);
    }
    
    return (
        <form onSubmit={submitHandler}>
            <input onChange={(event) => setUsername(event.target.value)} />
            <input onChange={(event) => setEmail(event.target.value)} />
            <input onChange={(event) => setPassword(event.target.value)} />
            <button onClick={submitHandler}>update email</button>
        </form>
    )
}

export default UpdateEmail;
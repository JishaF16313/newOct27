import { ContactlessOutlined } from "@material-ui/icons";
import React,{useState,useEffect}  from "react";
import UserDetails from "./details"

const Users=()=>{
    let [userData,setUserData]=useState([]);

useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data=>setUserData(data))
});
const handleClick=(users)=>{
    console.log(users)
}

return(
    <div>
        
        {userData && userData.map((user,i)=>
    (
<li key={i} onClick={handleClick(user)}>{user.name}</li>
    )     
        )}
        <div>
<UserDetails/>
        </div>

    </div>

)

}
export default Users;
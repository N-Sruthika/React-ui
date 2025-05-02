import { useState, useEffect } from "react"
import axios from "axios";
function UserList() {
    const [user, setuser]=useState([])

    const deleteUser=async(id)=>{
        try{
        const response=await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        let temp=[...user]
        temp=temp.filter(u=>u.id!==id)
        setuser(temp)
    }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        const getUser=async()=>{
            const response=await axios.get("https://jsonplaceholder.typicode.com/users")
            setuser(response.data)

        }
        getUser()
    },[])

    return (
        <div>
            <div className="col">
                <div>
                <h5>User Management Dashboard!!</h5>
                </div><br/>
               
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">UserInfo</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/adduser">Add User</a>
                    </li>
                    
                </ul>
            </div>
            <div>
            <table className="table">
                <thead>
                    <tr>
                        
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Company</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((u,index )=> (
                        <tr key={index}>
                            
                            <td>{u.name}</td>
                            <td>{u.email}</td>
                            <td>{u.phone}</td>
                            <td>{u.company.name}</td>
                            <td>
                                <button className="btn btn-danger btn-sm" onClick={() => deleteUser(u.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    )
}
export default UserList;
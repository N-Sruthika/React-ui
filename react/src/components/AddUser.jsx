import axios from "axios"
import { useState } from "react"

import { Link } from 'react-router-dom';


function AddUser() {
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [phone, setPhone] = useState(null)
    const [company, setCompany] = useState(null)



    const addUser = async ($event) => {
        $event.preventDefault()
        let obj = {
            "name": name,
            "email": email,
            "phone": phone,
            "company": { "name": company }

        }
        const response = await axios.post('https://jsonplaceholder.typicode.com/users', obj)

        console.log(response.data.name)
        console.log(response.data.email)
        console.log(response.data.phone)
        console.log(response.data.company)


    }
    return (
        <div>
            <div className="col">
                <h5>User Management Dashboard!!</h5><br />
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">UserInfo</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/adduser">Add User</Link>
                    </li>
                </ul>
            </div><br />
            <div className="col">
                <form onSubmit={($event) => addUser($event)}>
                    <div className="mb-4">
                        <label>Name  </label>
                        <input type="text"
                            onChange={($event) => { setName($event.target.value) }} />
                    </div>
                    <div className="mb-4">

                        <label >Email</label>
                        <input type="email"
                            onChange={($event) => { setEmail($event.target.value) }} />
                    </div>
                    <div className="mb-4">
                        <label >Phone</label>
                        <input type="text"
                            onChange={($event) => { setPhone($event.target.value) }} />
                    </div>
                    <div className="mb-4">
                        <label >Company Name</label>
                        <input type="text"
                            onChange={($event) => { setCompany($event.target.value) }} />
                    </div>

                    <button type="submit" className="btn btn-primary" value="user added ">Submit</button>
                </form></div>
        </div>


    )
}
export default AddUser
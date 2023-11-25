import React,{useState} from 'react';
import './Profile.css';


export default function Profile (){

    const [username] = useState('rushi');
    const [email] = useState('rushi@gmail.com');
    const [phone] = useState('7447640893')

    return(
        <>
        <div className="main">
            <h2>Profile</h2>
            <div className="card">
                <div className="card-body">
                    <i className="fa fa-pen fa-xs edit"></i>
                    <table>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>:</td>
                                <td>{username}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>:</td>
                                <td>{email}</td>
                            </tr>
                            <tr>
                                <td>Phone No</td>
                                <td>:</td>
                                <td>{phone}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div> 
        </div>
        
        </>
    )
}
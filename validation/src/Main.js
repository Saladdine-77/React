import React from 'react';
import {useState} from 'react';

export const Main = () => {
    
    const[username, setUserName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[cpassword, setCpassword] = useState('');

    //variables to fill errors
    const[eusername, setEuserName] = useState('');
    const[eemail, setEemail] = useState('');
    const[epassword, setEpassword] = useState('');
    const[ecpassword, setEcpassword] = useState('');

    //variables to colour the border of the input
    const[ucolour, setUcolour] = useState();
    const[ecolour, setEcolour] = useState();
    const[pcolour, setPcolour] = useState();
    const[cpcolour, setCpcolour] = useState();




    function validate(){
        if(username < 7){
            setUcolour('red');
            setEuserName('type an appropriate username that is more than 8 letters');
        }else{
            setUcolour('green');
            setEuserName('');
        }
        if(email < 7 && !email.includes('@gmail.')){
            setEcolour('red');
            setEemail('type an appropriate email with gmail');
        }else{
            setEcolour('green');
            setEemail('');
        }
        if(password < 7 && !password.includes('.')){
            setPcolour('red');
            setEpassword('type an appropriate password that is more than 8 letters and has a special char(.)');
        }else{
            setPcolour('green');
            setEpassword('');
        }
        if(cpassword !== password){
            setCpcolour('red');
            setEcpassword('password mismatch');
        }else{
            setCpcolour('green');
            setEcpassword('');
        }
        
    }
    


    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-5 shadow-lg p-3 mb-5 bg-white rounded">
                    <h1>Form Validation</h1>
                    <input type="text" id="username" className="form-control" placeholder="username"
                    value={username} onChange={(e)=>{setUserName(e.target.value)}} style={{borderColor: ucolour}}
                    />
                    <small id="username-err">{eusername}</small>
                    <input type="text" id="email" className="form-control" placeholder="email"
                    value={email} onChange={(e)=>{setEmail(e.target.value)}} style={{borderColor: ecolour}}
                    />
                    <small id="email-err">{eemail}</small>

                   <input type="password" id="password" className="form-control" placeholder="password"
                   value={password} onChange={(e)=>{setPassword(e.target.value)}} style={{borderColor: pcolour}}
                   />
                   <small id="password-err">{epassword}</small>

                   <input type="password" id="confirm-pass" className="form-control" placeholder="confirm password"
                   value={cpassword} onChange={(e)=>{setCpassword(e.target.value)}} style={{borderColor: cpcolour}}
                   />
                   <small id="confirm-pass-err">{ecpassword}</small>

                  <button className="btn btn-primary" onClick={validate}>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Main;
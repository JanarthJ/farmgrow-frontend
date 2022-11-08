import React, { Component } from 'react';
import './login.css';
import SignUp from "../signup/create";
import axios from 'axios';
import User from "../user/user";


export default class Login extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        uName:"",
        uPass:"",
        signUp:false,
        userDetail:{},
        auth:false
      };
      this.getter = this.getter.bind(this);
    }
    getter(val){
          this.setState({signUp:false});        
    }
    submit(){
        let data={
            password:this.state.uPass,
            email:this.state.uName
        }
        axios({ 
            method: 'post',
            url: 'http://localhost:9090/student/login',
            headers: { 
                'Content-Type' : 'application/json' 
            },
            data:data
          }).then(res => {
              console.log(res);
              if(res.data && res.data.length===0){
                    alert("Invalid Credentials");
                    return;
            }else{
                this.setState({userDetail:res.data[0]});
                this.setState({auth:true,signUp:false},()=>console.log(this.state.auth));
                alert("Successfully Authenticated...");                
            }
            
        });
    }
    signUp(){
        this.setState({signUp:true});
    }

    render(){
        return( 
            <div className='mainDiv'>
                {this.state.signUp ? (
                    <SignUp fetchData={this.getter}/>
                )
                :
                this.state.auth ? (<User userDetails={this.state.userDetail}/>)
                :
                (
                <div className='inDiv'>
                    <h2 style={{color:"white"}}>SIGN IN</h2>
                    <div className='username'>
                        <label>Username </label><br></br>
                        <input type={'text'}  style={{width:"95%"}} value={this.state.uName} onChange={(e)=>this.setState({uName:e.target.value})}/>
                    </div>
                    <div className='username'>
                        <label>Password </label><br></br>
                        <input type={'password'}  style={{width:"95%"}} value={this.state.uPass} onChange={(e)=>this.setState({uPass:e.target.value})}/>
                    </div>
                    <button className='submit' onClick={()=>this.submit()}>Sign In</button>
                    <div className='signup'>
                        <p style={{color:"white"}}>Don't have an account ? <i> </i>
                        <u style={{color:"pink",cursor:"pointer"}}
                        onClick={()=>this.signUp()}>Sign Up</u>
                        </p></div>
                </div>)}
            </div>
        );
    }

}
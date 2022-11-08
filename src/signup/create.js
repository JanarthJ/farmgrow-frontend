import React, { Component } from 'react';
import './create.css';
import axios from 'axios';


export default class SignUp extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        name:"",
        email:"",
        address:"",
        password:"",
        confrimPass:"",
    
      };
  
    }
    finalSubmit(){
        // "jj1@gmail.com 123
        if(this.state.password!==this.state.confrimPass){
            alert("Password are mismatch...");
            return;
        }
        
        let data ={
            name:this.state.name,
            email:this.state.email,
            address:this.state.address,
            password:this.state.password
        }

        console.log(data);
        axios({ 
            method: 'post',
            url: 'http://localhost:9090/student/add',
            headers: { 
                'Content-Type' : 'application/json' 
            },
            data:data
          }).then(res => {
              console.log(res);
              if(res.data){
                if(res.data==="added"){
                    alert("Successfully registered...");
                    this.props.fetchData(true);
                }
              }else{
                alert("Server Error...Try again!..");
              }
              
              
        });
    }

    
    

    check(){
        if(this.state.password===""){
            return false;
        }
        else if(this.state.confrimPass===""){
            return false;
        }
        else if(this.state.password===this.state.confrimPass){
            return true;
        }
    }

    render(){
        return( 
            <div className='mainDiv1'>
                
               <div className='inDiv'>
                    <h2 style={{color:"white"}}>SIGN UP</h2>
                    <div className='username'>
                        <label>Name </label><b style={{color:"red"}}>*</b><br></br>
                        <input type={'text'}  style={{width:"95%"}} value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
                    </div>
                    <div className='username'>
                        <label>Email </label><b style={{color:"red"}}>*</b><br></br>
                        <input type={'email'}  style={{width:"95%"}} value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}/>
                    </div>
                    <div className='username'>
                        <label>Address </label><b style={{color:"red"}}>*</b><br></br>
                        <input type={'text'}  style={{width:"95%"}} value={this.state.address} onChange={(e)=>this.setState({address:e.target.value})}/>
                    </div>
                    <div className='username'>
                        <label>Password </label><b style={{color:"red"}}>*</b><br></br>
                        <input type={'password'}  style={{width:"95%"}} value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})}/>
                    </div>
                    <div className='username'>
                        <label>Confrim Password </label><b style={{color:"red"}}>*</b><br></br>
                        <input type={'password'}  style={{width:"95%"}} value={this.state.confrimPass} onChange={(e)=>this.setState({confrimPass:e.target.value})}/>
                    </div>
                    <div >
                        <button className={this.check() ? 'next':'nextDis'} 
                        disabled={!this.check()}
                        style={{cursor:this.check() ? "pointer":"none"}}
                        onClick={()=>this.finalSubmit()}>Register</button>
                    </div> 
                    <p style={{color:"white"}}> Already have an account ?  <i>  </i>
                        <u style={{color:"pink",cursor:"pointer"}}
                        onClick={()=>this.props.fetchData(true)}>Sign IN</u>
                        </p>
                </div>
            </div>
        );
    }

}
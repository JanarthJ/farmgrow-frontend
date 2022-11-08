import React, { Component } from 'react';
import './user.css';

export default class User extends Component {
  
    constructor(props) {
      super(props);
  
    }
    

    render(){
        return(     
            <div className='mainDiv5'>        
                <div className='userInDiv' id="printDiv">                    
                    <h1 style={{color:"white"}}>Welcome {this.props.userDetails.name}!...</h1>                    
                    <div className='user1'>
                        <p>Name </p>
                        <input type={'text'} value={this.props.userDetails.name} disabled={true} />
                    </div>
                    <div className='user1'>
                        <p>Email </p>
                        <input type={'text'} value={this.props.userDetails.email} />
                    </div>
                    
                    <div className='user1'>
                        <p>Address </p>
                        <input type={'text'} value={this.props.userDetails.address} />
                    </div>                         
                </div>
           
            </div>
        )
        
    }

}
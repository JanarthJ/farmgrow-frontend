import React, { Component } from 'react';

import './login.css';

export default class Login extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
          uName:"",
          uPass:"",
          uOpt:"shop",
          signUp:false,
          isPay:false,
          user:false,
          pay:"",
          addData:{
            "name":"",
            "id":"",
            "add":"",
            "date":"",
            "pay":""
          },
          userDetail:[
            {"name":"JJ","id":"JJ01","add":"Trichy","date":"11/01/2023","pay":2000},
            {"name":"John","id":"John01","add":"Trichy","date":"16/01/2023","pay":1000},
            {"name":"Tom","id":"Tom01","add":"Trichy","date":"02/01/2023","pay":500}
          ],
          auth:true
        };
      }
   
      submit(){
          let data={
              password:this.state.uPass,
              email:this.state.uName,
              opt:this.state.uOpt
          }
          console.log(data);
          if(data.email==="abc@gmail.com" && data.password==="1234"){
              
                    this.setState({
                        auth:true
                    },()=>console.log(this.state.auth));
                    alert("Successfully Authenticated...");  
           }
           else{
                alert("Invalid Credentials");
                return;               
            }
       
      }
      payment(e,id,dat){
        e.preventDefault();
        e.stopPropagation();
        console.log(id,dat);
          this.setState({isPay:true,row:id});
      }
      collect(e,id,dat,val){
        e.preventDefault();
        e.stopPropagation();
        if(val==="p"){
            let data = this.state.userDetail[id].pay;
            let tot = data- Number(this.state.pay);
            let obj = this.state.userDetail; 
            if(Number(this.state.pay) > data){
                obj[id]["pay"]=0;    
            }else{
                obj[id]["pay"]=tot;
            }           
            if(tot===0){
                obj[id]["date"]="-";
            }
            console.log(obj);
            this.setState({isPay:false,pay:"",userDetail:obj},()=>{console.log(this.state.userDetail);});
        }
        else{
            this.setState({isPay:false,pay:""});
        }
      }
      back(){
        this.setState({auth:false,user:false});
      }
      adduser(){
        let obj = this.state.userDetail;
        obj.push(this.state.addData);
        this.setState({userDetail:obj},()=>console.log(this.state.userDetail));
      }
      changer(dat,val){
        let us=this.state.addData;
        us[val]=dat;
        this.setState({addData:us});
      }
      render(){
          return( 
              <div className='mainDiv'>
                  {
                  this.state.auth ? (
                    <div>{
                        this.state.uOpt==="shop" ? 
                        (
                        <div style={{marginTop:"-40%"}}>
                            <h1 className='heading'>CONSUMER DETAILS</h1><hr/>
                            <table className='tabl'>
                                <thead className='thea'>
                                <th>S No.</th>
                                <th> Name</th>
                                <th> Id</th>
                                <th> Address</th>
                                <th>Date</th>
                                <th>Balance</th>
                                <th>Colletion</th>
                                <th>To Pay</th>
                                <th>Pay</th>
                                </thead>
                                <tbody className='tbod'>                               
                                {this.state.userDetail && this.state.userDetail.map((data,ind)=>(
                                        <tr key={ind} className="trow">   
                                            <td>{ind+1}</td>
                                            <td>{data["name"]}</td>
                                            <td>{data["id"]}</td>
                                            <td>{data["add"]}</td>
                                            <td>{data["date"]}</td>
                                            <td>{data["pay"]}</td>
                                            <td><button onClick={(e)=>this.payment(e,ind,data)}>Collect</button></td>
                                            <td>{this.state.isPay && this.state.row===ind ? <input type={'text'}  style={{width:"40px"}} value={this.state.pay} onChange={(e)=>{e.preventDefault();e.stopPropagation();
                                                            this.setState({pay:e.target.value})}}/>:<u></u>}</td>
                                            <td>{this.state.isPay && this.state.row===ind ? <button onClick={(e)=>this.collect(e,ind,data,"p")}>Pay</button>:<button onClick={(e)=>this.collect(e,ind+1,data,"c")}>cancel</button>}</td>
                                        </tr>
                                ))
                                }                            
                                </tbody>
                            </table>
                            <div className='backbtn'><button className='submit' onClick={()=>this.back()}>Back</button>
                            <button className='submit' style={{marginLeft:"20px"}} onClick={()=>this.setState({user:!this.state.user})}>{this.state.user ? "Cancel":"Add User"}</button>
                            </div>
                            {this.state.user && (<div>
                                <h2 style={{color:"white"}}>ADD PROFILE</h2>
                                <div className='username'>
                                    <label>NAME </label><br></br>
                                    <input type={'text'}  style={{width:"95%"}} value={this.state.addData["name"]} 
                                    onChange={(e)=>this.changer(e.target.value,"name")}/>
                                </div>
                                <div className='username'>
                                    <label>ID </label><br></br>
                                    <input type={'text'}  style={{width:"95%"}} value={this.state.addData["id"]} 
                                    onChange={(e)=>this.changer(e.target.value,"id")}/>
                                </div>
                                <div className='username'>
                                    <label>ADDRESS </label><br></br>
                                    <input type={'text'}  style={{width:"95%"}} value={this.state.addData["add"]} 
                                    onChange={(e)=>this.changer(e.target.value,"add")}/>
                                </div>
                                <div className='username'>
                                    <label>DATE </label><br></br>
                                    <input type={'text'}  style={{width:"95%"}} value={this.state.addData["date"]}
                                    onChange={(e)=>this.changer(e.target.value,"date")}/>
                                </div>
                                <div className='username'>
                                    <label>PENDING AMOUNT </label><br></br>
                                    <input type={'text'}  style={{width:"95%"}} value={this.state.addData["pay"]} 
                                    onChange={(e)=>this.changer(e.target.value,"pay")}/>
                                </div>
                                <button className='submit' onClick={()=>this.adduser()}>ADD USER</button>  

                            </div>)}
                        </div>
                        )
                        :
                        (
                        <div>
                            <div className='inDiv'>
                                <h2 style={{color:"white"}}>CONSUMER PROFILE</h2>
                                <div className='username'>
                                    <label>NAME </label><br></br>
                                    <input type={'text'}  style={{width:"95%"}} value={this.state.userDetail[0]["name"]} />
                                </div>
                                <div className='username'>
                                    <label>ADDRESS </label><br></br>
                                    <input type={'text'}  style={{width:"95%"}} value={this.state.userDetail[0]["add"]} />
                                </div>
                                <div className='username'>
                                    <label>DATE </label><br></br>
                                    <input type={'text'}  style={{width:"95%"}} value={this.state.userDetail[0]["date"]} />
                                </div>
                                <div className='username'>
                                    <label>PENDING AMOUNT </label><br></br>
                                    <input type={'text'}  style={{width:"95%"}} value={this.state.userDetail[0]["pay"]} />
                                </div>
                                <button className='submit' onClick={()=>this.back()}>Back</button>                      
                            </div>
                        </div>
                        )
                    }</div>
                  )
                  :
                  (
                  <div className='inDiv'>
                      <h2 style={{color:"white"}}>Login</h2>
                      <div className='username'>
                          <label>Username </label><br></br>
                          <input type={'text'}  style={{width:"95%"}} value={this.state.uName} onChange={(e)=>this.setState({uName:e.target.value})}/>
                      </div>
                      <div className='username'>
                          <label>Password </label><br></br>
                          <input type={'password'}  style={{width:"95%"}} value={this.state.uPass} onChange={(e)=>this.setState({uPass:e.target.value})}/>
                      </div>
                      <div className='username'>
                          <label>UserType </label><br></br>
                          <select type={'text'}  style={{width:"95%",height:"30px"}} value={this.state.uOpt} onChange={(e)=>this.setState({uOpt:e.target.value})}>
                            <option value={'shop'}>Store user</option>
                            <option value={'consumer'}>Consumer</option>
                          </select>
                      </div>
                      <button className='submit' onClick={()=>this.submit()}>Login</button>                      
                  </div>)}
              </div>
          );
      }
}
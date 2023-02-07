import React, { Component } from 'react';
import './main.css';


export default class Main extends Component {
  
    constructor(props) {
      super(props);
  
    }
    

    render(){
        return(     
            <div className='maindiv'>        
                <div className='phone'>
                    <div className="phimg" >
                       <div className='inph'>
                            <div className='itop'>
                                <div>Back</div>
                                <div>User1</div>
                                <div></div>
                            </div>
                            <div>body</div>
                            <div>foot</div>
                       </div>

                    </div>
                </div>
            </div>
        )
        
    }

}
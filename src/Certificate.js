import React, { Component } from 'react';
import Select from 'react-select';

class Certificate extends Component {
  render() {
    return (
        <div>
        <form method="POST" onSubmit={this.handleSubmit} action="/api/slots" >
          <div className='right-align'>
         
          <div className="outer-box outer-space">
          <div className='element'>
         
          <input type="text" placeholder='Beneficiary id' id='benificiary id' required></input>
          {/* <p>Age</p> */}
          <input type="text" placeholder='Age' id='age' required pattern="^[0-9]{2}$"></input>
          Do you have comorbidities?
          <input type="radio"  value='Yes' name='cc' required></input>
          Yes
          <input type="radio"  value='No' name='cc' required></input>
          No
          <input type="text" placeholder='Enter comorbidities' id='comorbidities' required></input>
          Did you face any symptoms after vaccination?
          <input type='radio' value='Yes' name='sc' required></input>
          <input type='radio' value='No' name='sc' required></input>
          Select symptoms
          <input type='checkbox' value='Headache' name='symptoms' required></input>
          Headache
          <input type='checkbox' value='Fever' name='symptoms' required></input>
          Fever
          <input type='checkbox' value='Nausea' name='symptoms' required></input>
          <input type='checkbox' value='Body pains' name='symptoms' required></input>
          <input type='text' placeholder='Other' name="other" required ></input>
          
          
          
          {/* <p>Email</p> */}
         
          
          {/* <p>Phone no</p> */}
          
          {/* <Link to="/vaccine">CLICK THIS</Link>
          <Route path="/vaccine" component={vaccine}></Route> */}
          
        <button type="submit" id="form1">Submit</button>
        
        </div>
    
    
        </div>
        </div>
    
        </form>
    
    
        </div>
        
    );
  }
}

export default Certificate;
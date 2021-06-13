
import logo from './logo.svg';
import './Home.css';
import React , { Component } from 'react'
import Select from 'react-select';

export default class Home extends Component{

    constructor(props){
     
      super(props);
    
      this.states = [
        {label: "Andhra Pradesh" , value: 1},
        {label: "Arunachal Pradesh" , value: 2},
        {label: "Assam" , value: 3},
        {label: "Bihar" , value: 4},
        {label: "Goa" , value: 5},
        {label: "Gujarat" , value: 6},
        {label: "Haryana" , value: 7},
        {label: "Himachal Pradesh" , value: 8},
        {label: "Jammu And Kashmir" , value: 9},
        {label: "Jharkhand" , value: 10},
        {label: "Karnataka" , value: 11},
        {label: "Kerala" , value: 12},
        {label: "Madhya Pradesh" , value: 13},
        {label: "Maharashtra" , value: 14},
        {label: "Manipur" , value: 15},
        {label: "Meghalaya" , value: 16},
        {label: "Mizoram" , value: 17},
        {label: "Odisha" , value: 18},
        {label: "Punjab" , value: 19},
        {label: "Rajasthan" , value: 20},
        {label: "Sikkim" , value: 21},
        {label: "Tamil Nadu" , value: 22},
        {label: "Telangana" , value: 23},
        {label: "Tripura" , value: 24},
        {label: "Uttarakhand" , value: 25},
        {label: "Uttar Pradesh" , value: 26},
        {label: "West Bengal" , value: 27},
        {label: "Chandigarh" , value: 28},
        {label: "Dadra and Nagar Haveli" , value: 29},
        {label: "Daman and Diu" , value: 30},
        {label: "Delhi" , value: 31},
        {label: "Lakshadweep" , value: 32},
        {label: "Puducherry" , value: 33},
        {label: "Chattisgarh" , value: 34},
        {label: "Andaman And nicobar islands" , value: 33},
      
        ]
    
    this.handleSubmit=this.handleSubmit.bind(this);
    this.headerbutton=this.headerbutton.bind(this);
    this.displaydate=this.displaydate.bind(this);
    this.onChangePin=this.onChangePin.bind(this);
    this.onChangeDate=this.onChangeDate.bind(this);
    this.state={
      pin:'',
      date:''
    };
    
    
    };
    
    
    
    
    handleSubmit = (event) => {
      //url = "http://localhost:3000";
      event.preventDefault();
      // props.history.push('/vaccine.html');
      //window.location = "vaccine.html";
     }
     headerbutton=(e)=>{
      e.preventDefault();
      document.getElementById('form1').scrollIntoView();
     }
     displaydate=(e)=>{
       e.preventDefault();
       e.currentTarget.type = "date";
     }
     onChangePin=(e)=>{
       this.setState({
         pincode: e.target.value
      
       })
       console.log(this.pincode);
     }
    
    
     onChangeDate=(e)=>{
      this.setState({
        date: e.target.value
      });
      
    };
    
    
    render(){
      return (
        
        
        <div>
          {/* <div>
           <video autoPlay muted loop id="myVideo" >
        <source src="http://127.0.0.1:8887/headervideo/website2.mp4" type="video/mp4" />
        TESTING
        </video>
        </div> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    
        {/* <div class="topnav">
          <a class="active" href="/">    Home    </a>
          <a href="/information">        <b>Information</b>     </a>
          <a href="/certificate">        <b>Certificate</b>      </a>
          <a href="/about">        <b>About</b>         </a>
        </div>
     */}
        {/* <button onClick={this.headerbutton} className="frontbutton2" ><span>FORM</span></button> */}
        
        <form method="POST" onSubmit={this.handleSubmit} action="/api/slots" >
          <div className='right-align'>
          {/* <h4 className="title">COVID VACCINE SLOT NOTIFICATION FORM </h4> */}
          <div className="outer-box outer-space">
          <div className='element'>
          {/* <p>Enter Your Name</p> */}
          <input type="text" placeholder=' Name' id='name'required  pattern = "^[A-Za-z]\\w{5, 29}$" minlength="4" maxlength="20"></input>
          {/* <p>Age</p> */}
          <input type="text" placeholder=' Age' id='age'required pattern="^[0-9]{2}$" minLength="1" maxlength="2"></input>
          {/* <p>State</p> */}
          {/* <div className="first"> */}
          <input type="email" placeholder=' Email' id='email' required></input>
          <input type="tel" placeholder=' Phone no' id='phone'maxLength='7' required></input>
          <Select options={this.states} className="fix" placeholder=' State' required/>
          {/* </div> */}
          <br></br>
          <input type='text' placeholder=' Pin no' required id="pin" value={this.state.pincode} onChange={this.onChangePin}></input> 
          {/* <p>Email</p> */}
         
          <input placeholder=" Enter Date Of Appointment" type="text" id='date'onFocus={this.displaydate} value={this.state.date} onChange={this.onChangeDate} required></input>
          {/* <p>Phone no</p> */}
          
          {/* <Link to="/vaccine">CLICK THIS</Link>
          <Route path="/vaccine" component={vaccine}></Route> */}
          </div>
        <button type="submit" id="form1">Submit</button>
        
        </div>
    
    
        </div>
    
    
        </form>
    
    
    
    
    
    <img src="http://127.0.0.1:8887/headervideo/pic2.jpg" alt="vaccine image"></img>
    
        
        </div>
        
     
    
      );
    
     
    
    
        }
    
    //console.log(document.getElementById('pin').value)
    
    }
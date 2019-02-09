import React, { Component } from 'react';
import DoctorDetails from '../../components/DoctorDetails/DoctorDetails';
import classes from './Doctors.css';
import axios from 'axios';
class Doctors extends Component {
  state={
    modelOutput:'',
    imageUploadedUrl:'',
    outputStatus:false,
    locationOutput:''
  }
  componentDidMount(){
    if (this.props.location.params===undefined) {
      console.log('no output');
    } else {
      
    console.log(this.props.location.params);
    
    this.setState({
      modelOutput:this.props.location.params.modelOutput,
      imageUploadedUrl:this.props.location.imageUploadedUrl,
      outputStatus:true
      
    });
      
    } 
  }
  getCurrentLocation=()=>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {

      console.log(position.coords);
      let lat=position.coords.latitude;
      let lng=position.coords.longitude;
        let reverseGeocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyDzB9zHbdkYaqrXot8GYbgVlDsUrQ_L0oM`;
        console.log(reverseGeocodeUrl);
        
        axios.get(reverseGeocodeUrl)
        .then((result)=>{
          console.log(result.data.results[1].formatted_address);       
          this.setState({locationOutput:result.data.results[1].formatted_address});
        })
        .catch((err)=>{
          this.setState({locationOutput:'could not find your location.'});
        });

      }, () => {
        this.setState({locationOutput:'Permission denied.'})
        
      });
    }
   else {
      this.setState({locationOutput:'geolocation not supported'});
    }
  }
  
  sendMessageHandler=(email)=>{
    if (!this.state.outputStatus) {
      alert('No data to Send');
    }else{
     let modelOutput=this.props.location.params.modelOutput;
     let imageUploadedUrl=this.props.location.params.imageUploadedUrl;
      // console.log(this.props.location.params);
      let axiosConfig = {
        headers: {
            "Content-Type": 'application/json',
            //already registered user x-auth
            "x-auth":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzVlMjJmNzljMzE2OTQwNTQxZGJmNjIiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTQ5NjczMjA4fQ.5FiZqpREzseAvFvVCacXDsvuTWB2Rumc_1AbCbeJOjk"
        }
      };
      // console.log(email);
      
      axios.post('http://retinoskin.heroku.com/users/message',{
        'modelOutput':modelOutput,
        'imageUploadedUrl':imageUploadedUrl,
        'to':{email}
      },axiosConfig)
      .then((res)=>{
        alert(res.data);
        // console.log(res);
        
      })
      .catch((err)=>{
        alert("Message sent failed.");
      })
    // alert('sms sent'+ email);
    }
  }
  render() {
    if(this.state.outputStatus){
      alert('Data Saved');
    }
    return (
      <div className={classes.Doctors}>
      <button onClick={this.getCurrentLocation} className={classes.locationButton}>Get Location</button>
      <p className={classes.locationOutput}>{this.state.locationOutput}</p>

      <div className={classes.retinopathy}>
        <h1>Diabetic Specialist</h1>
        <DoctorDetails
              name="Sarvottam kumar"
              email="sauravansh17@gmail.com"
              address="laxmi nagar"
              phoneno="9958938566"
              sendMessageHandler={this.sendMessageHandler}/>
        <DoctorDetails
              name="Dr. Arun Sangal"
              email="sarru1292@gmail.com"
              address="laxmi nagar"
              phoneno="9858938567"
              sendMessageHandler={this.sendMessageHandler}/>
      </div>

      <div className={classes.skincancer}>
        <h1>skin Cancer Specialist</h1>
        <DoctorDetails
              name="Dr. Aarti Choudhry"
              email="sarru1289@gmail.com"
              address="laxmi nagar"
              phoneno="9958938568"
              sendMessageHandler={this.sendMessageHandler}/>
        <DoctorDetails
              name="Dr. Rajesh Khanna"
              email="sarru1288@gmail.com"
              address="laxmi nagar"
              phoneno="9958938569"
              sendMessageHandler={this.sendMessageHandler}/>

      </div>
      
      </div>
    );
  }
}

export default Doctors;
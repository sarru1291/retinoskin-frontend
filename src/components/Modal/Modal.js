import React, {Component} from 'react';
import classes from './Modal.css';
import ModalBody from './ModalBody/ModalBody';
import axios from 'axios';
import Spinner from './../Spinner/Spinner';
import ImageOutput from '../ImageOutput/ImageOutput';
import Offline from '../Offline/Offline';
import {NavLink,Link} from 'react-router-dom';
class Modal extends Component {
  state={
    modelOutput:{},
    modelOutputStatus:false,
    imagePreviewURL:'',
    errorStatus:false,
    imageUploadingStatus:true,
    imageUploadingText:'Image uploading...',
    imageProcesssingStatus:false,
    modelProcessUrl:'http://localhost:8086/api/model',
    imageUploadedUrl:'',
    imageUploadedOption:''
  }
    componentDidMount(){
      console.log("did mount...");
      this.setState({imagePreviewURL:this.props.imagePreviewURL});

      console.log("modal imagePreviewURL: "+this.state.imagePreviewURL);
      axios.post(this.props.uploadUrl,this.props.imageFormData)
      .then((res)=>{ 
        console.log(res);
        
        if(res.data.output.imageUploadedStatus==='Image Uploaded'){
          this.setState({imageUploadingStatus:false,
                          imageProcesssingStatus:true,
                          imageUploadingText:'Image processing...',
                        imageUploadedUrl:res.data.output.imageUploadedUrl,
                        imageUploadedOption:res.data.output.imageUploadedOption});
        }
      })
      .catch((err)=>{
        this.setState({
            modelOutputStatus:true,
            errorStatus:true,
          modelOutput:"FrontEnd POST(URL) Error(image uploading)"});
        console.log(err);
      }); 
    }
  
    componentWillUpdate(nextProps, nextState) {
        console.log('[Modal] WillUpdate');
    }

modelProcess(url,option){
 const  modelUrl=this.state.modelProcessUrl+'?option='+option+'&url='+url;
  axios.get(modelUrl)
    .then(res=>{
  // console.log(response);
    this.setState({
          modelOutput:Object.keys(res.data.diseaseResult.output)+`\n(Accuracy=`+Object.values(res.data.diseaseResult.output)+')',
          modelOutputStatus:true,
          imageProcesssingStatus:false,
          imageUploadingText:'',
        });

        // modelOuput  imageUploadedUrl


    })
    .catch(error=>{
      this.setState({
        modelOutputStatus:true,
        errorStatus:true,
        imageProcesssingStatus:false,
        imageUploadingText:'',
      modelOutput:"Model: heroku Internal Server Error."});
    console.log(error);
        });
}      

    render() {
      let modelOutput;
      let output;
      let linkPC;
      let save;
     if(this.state.imageUploadingStatus&!this.state.imageProcesssingStatus&!this.state.modelOutputStatus){
      output=<Spinner/>;
      modelOutput= <ModalBody 
                      modelOutput={output} 
                      statusText={this.state.imageUploadingText} 
                      imagePreviewURL={this.props.imagePreviewURL}/>;
     }else if(!this.state.imageUploadingStatus&this.state.imageProcesssingStatus&!this.state.modelOutputStatus){
      output=<Spinner/>;
      modelOutput= <ModalBody 
                        modelOutput={output} 
                        statusText={this.state.imageUploadingText} 
                        imagePreviewURL={this.props.imagePreviewURL}/>;
      this.modelProcess(this.state.imageUploadedUrl,this.state.imageUploadedOption)
      // console.log(this.state.imageUploadedUrl+"  "+this.state.imageUploadedOption);
    }else{
      output=<ImageOutput output={this.state.modelOutput}/> 
      modelOutput= <ModalBody 
                      modelOutput={output} 
                      statusText={this.state.imageUploadingText} 
                      imagePreviewURL={this.props.imagePreviewURL}
                      // linkPC={linkPC}
                      />;
      linkPC=<Link to="/disease" 
                    style={{textDecoration:"none",
                            color:"white",
                            backgroundColor:"#1eb3aa",
                            padding:"10px",
                            textAlign:"center",
                            position:"absolute",
                            top:"500px",
                            left:"550px"}}
                    >Prevention and Causes</Link>
      save=<NavLink 
                to={{
                  pathname:'/save',
                  params:{
                    'modelOutput':this.state.modelOutput,
                    'imageUploadedUrl':this.state.imageUploadedUrl
                  }
                }}
                style={{textDecoration:"none",
                        color:"white",
                        backgroundColor:"#1eb3aa",
                        padding:"10px",
                      textAlign:"center",
                      position:"absolute",
                      top:"500px",
                      left:"800px"}}
                >Save</NavLink>
     }
       
     if (!navigator.onLine) {
       var opt= <Offline/>;
     }
        return (
          <div className = {classes.Modal} onClick={()=>{this.props.closeModal()}}>
          {opt}
            {modelOutput}
           {linkPC}  {save}
          </div>
           
         );
    }
}

export default Modal;
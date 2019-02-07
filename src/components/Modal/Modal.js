import React, {Component} from 'react';
import classes from './Modal.css';
import ModalBody from './ModalBody/ModalBody';
import axios from 'axios';
import Spinner from './../Spinner/Spinner';
import ImageOutput from '../ImageOutput/ImageOutput';

class Modal extends Component {
  state={
    modelOutput:{},
    modelOutputStatus:false,
    imagePreviewURL:'',
    errorStatus:false
  }
    componentDidMount(){
      console.log("did mount...");
      this.setState({imagePreviewURL:this.props.imagePreviewURL});

      console.log("modal imagePreviewURL: "+this.state.imagePreviewURL);
      axios.post(this.props.uploadUrl,this.props.imageFormData)
      .then((res)=>{
        // console.log(res.data.diseaseResult.output);
        this.setState({
          modelOutput:Object.entries(res.data.diseaseResult.output),
          modelOutputStatus:true});
      })
      .catch((err)=>{
        this.setState({
            modelOutputStatus:true,
            errorStatus:true,
          modelOutput:'error found'});
        console.log(err);
      }); 
    }
  
    componentWillUpdate(nextProps, nextState) {
        console.log('[Modal] WillUpdate');
    }
    // shouldComponentUpdate(nextProps,nextState){
    //   return this.nextProps.modalVisible!==this.props.modalVisible;
    // }
    render() {
      let modelOutput;
      let output;
     if(!this.state.modelOutputStatus){
      output=<Spinner/>;
      modelOutput= <ModalBody modelOutput={output} imagePreviewURL={this.props.imagePreviewURL}/>;
     }else{
      output=<ImageOutput output={this.state.modelOutput}/> 
      modelOutput= <ModalBody modelOutput={output} imagePreviewURL={this.props.imagePreviewURL}/>;
        // Object.entries(modelOutput).forEach(([key,value]) => {
        //   out[key]=value;
        // });
        // for (let index = 0; index < Object.keys(out).length; index++) {
        //     console.log(Object.keys(out)[index]+" = "+Object.values(out)[index]);
        // }
     }
        return (
          <div className = {classes.Modal} onClick={()=>{this.props.closeModal()}}>
            {modelOutput}
          </div>
           
         );
    }
}

export default Modal;
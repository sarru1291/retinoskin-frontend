import React,{Component} from 'react';
import classes from './RetinoSkinHeader.css';
import ImageInput from '../../../../../../ImageInput/ImageInput';
import Button from '../../../../../../Buttons/Button';
import axios from 'axios';
import camera from '../../../../../../../assets/photos/camera.png';

class RetinoSkinHeader extends Component{
  state={
    toggleStatus:false,
    fileInputRef:React.createRef(),
    imageDummyURL:camera,
    url:'https://retinoskin.herokuapp.com/api/test'
  }
  imageSelected=(e)=>{
    this.setState({imageDummyURL:URL.createObjectURL(e.target.files[0])});
  }
  imageClickedHandler=()=>{
    this.state.fileInputRef.current.click()
  }
  uploadHandler=()=>{
     
    const formData = new FormData();
    formData.append('file',this.state.imageDummyURL);
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    
    axios.post(this.state.url+'?option=retinopathy',formData,config).then((res)=>{
      console.log(res);
    });
    
  }
  showImageInput=()=>this.setState({toggleStatus:true});
  hideImageInput=()=>this.setState({toggleStatus:false});
  contentHandler=()=>{
    if(!this.state.toggleStatus)this.showImageInput();
    else this.hideImageInput();
  }
  render(){
    let imageInput='';
    if (this.state.toggleStatus) {
      imageInput=<ImageInput  
                      imageSelected={this.imageSelected} 
                      imageClicked={this.imageClickedHandler}
                      uploadHandler={this.uploadHandler} 
                      imageDummyURL={this.state.imageDummyURL}
                      fileInputRef={this.state.fileInputRef}
                      />;
    }
    return(
      <div>
        <div className={classes.RetinoSkinHeader} > 
        <img src={this.props.imageURL} alt="icon" className={classes.image}></img>
        <p className={classes.headerName}>{this.props.headerName}</p>
        <p className={classes.button} onClick={this.contentHandler}><Button value="Test"/></p>
        </div>
        <div >
      {imageInput}
      </div>
    </div>
  
    );
  }
}
export default RetinoSkinHeader;
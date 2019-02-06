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
    imageURL:'',
    imagePreviewURL:''
  }
  componentDidMount(){
    console.log("did mount "+this.props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("should update");
    
    return nextProps.toggleStatus!==this.state.toggleStatus;
  }
  componentDidUpdate(){
    console.log("did update "+this.props);
  }
  componentWillUpdate(){
    console.log("will update "+this.props);
    
  }
  imageSelected=(e)=>{
    console.log("image selected");
    e.preventDefault();
    let file=e.target.files[0];
   if(file.size>10*1024){
     alert("large file size.");
   }else if(!file.type.match('image/*')){
     alert("image expected.");
   }else{    
    this.setState({
          imageURL:file,
          imagePreviewURL:URL.createObjectURL(e.target.files[0])          
        });
      }
  }
  imageClickedHandler=()=>{
    console.log("image clicked");
    
    this.state.fileInputRef.current.click()
  }
  uploadHandler=(diseaseTitle)=>{
    console.log("upload");
    
    let disease;
    if (diseaseTitle==='Skin Cancer') {
      disease='skincancer';
    } else {
      disease='retinopathy';
    }
   let url='https://retinoskin.herokuapp.com/api/test?option='+disease;
 
    const formData = new FormData();
    formData.append('image',this.state.imageURL,this.state.imageURL.name);
   
    axios.post(url,formData)
      .then((res)=>{
        console.log(res.data);
      })
      .catch((err)=>{
        console.log(err);
      });
  }
  showImageInput=()=>{
    console.log("show image input");
    
    if (!this.state.toggleStatus) {
      this.setState({toggleStatus:true});
    }
    else this.setState({toggleStatus:false});
  }
  render(){
    console.log("render");
    
    let imageInput='';
    if (this.state.toggleStatus) {
      imageInput=<ImageInput  
                      imageSelected={this.imageSelected} 
                      imageClicked={this.imageClickedHandler}
                      uploadHandler={this.uploadHandler} 
                      imageDummyURL={this.state.imageDummyURL}
                      fileInputRef={this.state.fileInputRef}
                      imagePreviewURL={this.state.imagePreviewURL}
                      headerName={this.props.headerName}
                      />;
    }
    return(
      <div>
        <div className={classes.RetinoSkinHeader} > 
        <img src={this.props.imageURL} alt="icon" className={classes.image}></img>
        <p className={classes.headerName}>{this.props.headerName}</p>
        <p className={classes.button} onClick={()=>{this.showImageInput()}} ><Button value="Test"/></p>
        </div>
        <div >
      {imageInput}
      </div>
    </div>
  
    );
  }
}
export default RetinoSkinHeader;
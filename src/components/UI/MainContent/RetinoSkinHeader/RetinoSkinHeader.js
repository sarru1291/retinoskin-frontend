import React,{Component} from 'react';
import classes from './RetinoSkinHeader.css';
import ImageInput from '../../../ImageInput/ImageInput';
class RetinoSkinHeader extends Component{
  state={
    toggleStatus:true
  }
 
  showImageInput=()=>this.setState({toggleStatus:true});
  hideImageInput=()=>this.setState({toggleStatus:false});
  contentHandler=()=>{
    if(!this.state.toggleStatus)this.showImageInput();
    else this.hideImageInput();
  }
  render(){
    var imageInput='';
    if (this.state.toggleStatus) {
      imageInput=<ImageInput/>;
    }
    return(
      <div>
        <p className={classes.RetinoSkinHeader} onClick={this.contentHandler}> 
        <img src={this.props.imageURL} alt="icon"></img>
        <span className={classes.headerName}>{this.props.headerName}</span>
        </p>
        <div >
      {imageInput}
      </div>
    </div>
  
    );
  }
}
export default RetinoSkinHeader;
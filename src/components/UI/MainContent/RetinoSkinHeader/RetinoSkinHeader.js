import React,{Component} from 'react';
import classes from './RetinoSkinHeader.css';
import ImageInput from '../../../ImageInput/ImageInput';
import Button from '../../../Tools/Buttons/Button';
class RetinoSkinHeader extends Component{
  state={
    toggleStatus:false
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
        <p className={classes.RetinoSkinHeader} > 
        <img src={this.props.imageURL} alt="icon"></img>
        <span className={classes.headerName}>{this.props.headerName}</span>
        <p className={classes.button} onClick={this.contentHandler}><Button/></p>
        </p>
        <div >
      {imageInput}
      </div>
    </div>
  
    );
  }
}
export default RetinoSkinHeader;
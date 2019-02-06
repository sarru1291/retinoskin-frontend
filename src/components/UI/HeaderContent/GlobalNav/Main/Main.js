import React,{Component} from "react";
import classes from './Main.css';
import RetinoSkin from "./MainContent/RetinoSkin";
import retino from '../../../../../assets/photos/retino.png';
import skin from '../../../../../assets/photos/skin.png';
// import Spinner from "../../../../Spinner/Spinner";

class Main extends Component{
  state={
    diseaseTitle:['Skin Cancer','Diabetic Retinopathy'],
    formSubmitted:false,
    content:['slfjaslkfjalsfsalk;fjaklsfjaffasfasdfasfdsfa',
              'asfljaflksjadfasfafsafdasdfafasfasdfasdfaeeeeee']
  }
  
  render(){
    return(
      <div className={classes.Main}>
        <RetinoSkin 
          imageURL={skin}
          headerName={this.state.diseaseTitle[0]} 
          formSubmitted={this.state.formSubmittedHandler}
          content={this.state.content[0]}
          />
       <RetinoSkin 
          imageURL={retino}
          formSubmitted={this.state.formSubmittedHandler}
          headerName={this.state.diseaseTitle[1]}
          content={this.state.content[1]}
          />
      {/* <Spinner/> */}
      </div>
    );
  }
}
export default Main;
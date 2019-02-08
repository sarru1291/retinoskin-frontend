import React,{Component} from "react";
import classes from './Main.css';
import RetinoSkin from "./MainContent/RetinoSkin";
import retino from '../../../../../assets/photos/retino.png';
import skin from '../../../../../assets/photos/skin.png';
// import Spinner from "../../../../Spinner/Spinner";
import skinCancerText from '../../../../../assets/texts/skincancer.txt';
import retinopathyText from '../../../../../assets/texts/retinopathy.txt';
import TextFileReader from "../../../../TextFileReader/TextFileReader";
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
          content={<TextFileReader txt={skinCancerText}/>}
          />
       <RetinoSkin 
          imageURL={retino}
          formSubmitted={this.state.formSubmittedHandler}
          headerName={this.state.diseaseTitle[1]}
          content={<TextFileReader txt={retinopathyText}/>}
          />
      {/* <Spinner/> */}
      </div>
    );
  }
}
export default Main;
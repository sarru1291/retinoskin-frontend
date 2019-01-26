import React,{Component} from "react";
import classes from './Main.css';
import RetinoSkin from "../../components/UI/MainContent/RetinoSkin";
import retino from './retino.png';
import skin from './skin.png';
class Main extends Component{
  
  render(){
    return(
      <div className={classes.Main}>
       <RetinoSkin 
          imageURL={skin}
          headerName="Skin Cancer"/>
       <RetinoSkin 
          imageURL={retino}
          headerName="Diabetic Retinopathy"/>
      </div>
    );
  }
}
export default Main;
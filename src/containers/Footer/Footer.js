import React,{Component} from "react";
import FooterContent from '../../components/UI/FooterContent/FooterContent';
import classes from './Footer.css';
class Footer extends Component{
  render(){
    return(
      <div className={classes.Footer}>
       <FooterContent/>
      </div>
    );
  }
}
export default Footer;
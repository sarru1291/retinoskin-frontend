import React,{Component} from "react";
import FooterContent from '../../components/UI/FooterContent/FooterContent';
import classes from './Footer.css';
class Footer extends Component{
  state={
    data:'Copyright 2019. All rights reserved.'
  }
  render(){
    return(
      <div className={classes.Footer}>
       <FooterContent footerData={this.state.data}/>
      </div>
    );
  }
}
export default Footer;
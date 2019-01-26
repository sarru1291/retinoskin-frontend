import React,{Component} from "react";
import HeaderName from "../../components/UI/HeaderContent/HeaderName/HeaderName";
import classes from './Header.css';
import GlobalNav from "../../components/UI/HeaderContent/GlobalNav/GlobalNav";

class Header extends Component{
  render(){
    return(
      <div className={classes.Header}>
        <HeaderName/>
        <GlobalNav/>
      </div>
    );
  }
}
export default Header;
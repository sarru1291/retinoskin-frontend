import React,{Component} from "react";
import HeaderName from "../../components/UI/HeaderContent/HeaderName/HeaderName";
import classes from './Header.css';
import GlobalNav from "../../components/UI/HeaderContent/GlobalNav/GlobalNav";
import HeaderIcon from '../../components/UI/HeaderContent/HeaderIcon/HeaderIcon';
import Sidebar from "../../components/Sidebar/Sidebar";

class Header extends Component{
  state={
    name:'RetinoSkin'
  }
  render(){
    return(
      <div className={classes.Header}>
        {/* <Sidebar/> */}
        <HeaderIcon/>
        <HeaderName name={this.state.name}/>
        <GlobalNav/>
        
      </div>
    );
  }
}
export default Header;
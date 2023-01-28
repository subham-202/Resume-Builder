import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../static/images/logo.png";
<<<<<<< HEAD
=======
import { isLoaded,isEmpty } from "react-redux-firebase";
import * as authActions from '../../redux/actions/authActions'
import { connect } from "react-redux";
>>>>>>> master

function LoggesOut(props) {
  return (
    <ul>
      <li className="signup ">
        <NavLink className=" btnv-1" to="/register">
        Register
        </NavLink>
      </li>
      <li className="signin"> 
        <NavLink className="text-blue btnv-3" to="/login">
        Sign In
        </NavLink>         
      </li>
    </ul>
  )
}

const Header = (props) => {
<<<<<<< HEAD
  // const auth = props.auth;
  const handleLogOut=()=>{
=======
  const auth = props.auth;
  const handleLogOut=()=>{
    props.signOut();
>>>>>>> master
   console.log('The user will sign out');
  }

  return (  
  <header className="header">
  <nav className="nav">
      <a href="/" className="holder-logo">
        <img className='logo' src={logo}></img>
      </a> 
        <div className="header-links full-height">

<<<<<<< HEAD
        {/* { isLoaded(auth) && !isEmpty(auth) ?<> */}
=======
        { isLoaded(auth) && !isEmpty(auth) ?<>
>>>>>>> master

          <ul>
            <li className="signin ">
              <NavLink className="  " to="/">
<<<<<<< HEAD
               Logged in as 
=======
               Logged in as {auth.email}
>>>>>>> master
              </NavLink>
            </li>
            <li className="signin"> 
              <button className="text-blue btnv-3" onClick={handleLogOut}>
             Signout
              </button>         
            </li>
          </ul>

<<<<<<< HEAD
        {/* </>:<LoggesOut></LoggesOut>} */}
=======
        </>:<LoggesOut></LoggesOut>}
>>>>>>> master
          
          <ul id="nav-mid">
            <li>
            <NavLink className="btn-nvt-gm" to="/resume-templates">
            Resume Templates
            </NavLink>
            </li> 
            <li className="holder-pricing">            
              <NavLink className="btn-nvt-gm" to="/about-us">
              About Us
              </NavLink>
            </li>        
          </ul>
            
      </div>   
    </nav>
  </header>

  );
};

<<<<<<< HEAD
// const mapStateToProps=(state)=>{
//   return{
//      auth: state.firebase.auth
//   }
// }
// const mapDispatchToProps= (dispatch)=>{
//   return {
//    signOut:()=>dispatch(authActions.signout())
//   }
// }
export default Header;
=======
const mapStateToProps=(state)=>{
  return{
     auth: state.firebase.auth
  }
}
const mapDispatchToProps= (dispatch)=>{
  return {
   signOut:()=>dispatch(authActions.signout())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);
>>>>>>> master

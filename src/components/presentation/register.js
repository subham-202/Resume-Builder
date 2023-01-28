import React,{useState,useEffect} from "react";
<<<<<<< HEAD
// import { isLoaded } from 'react-redux-firebase'
// import { connect } from "react-redux";
// import * as authActions from '../../actions/authActions';
import { useHistory } from "react-router";
=======
import { connect } from "react-redux";
import { isLoaded } from 'react-redux-firebase'
// import { connect } from "react-redux";
// import * as authActions from '../../actions/authActions';
import { useHistory } from "react-router";
import * as authActions from '../../redux/actions/authActions';
>>>>>>> master
  function Register(props) {
 
    let history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword]= useState('');
    const handleEmail= (e)=>{
      setEmail(e.target.value);
      }
      const handlePassword=(e)=>{
        setPassword(e.target.value);
      }
   
<<<<<<< HEAD
  const onSubmit=()=>{
    
    //  props.register({email:email, password:password})
=======
  const onSubmit=async()=>{
    
    const res = await props.register({email:email, password:password});
    // if(props.authMine.error==''){
    //   history.push('/');
    // }
    if(props.auth!=null){
      history.push('/')
    }
>>>>>>> master
    
  }

 
    return (
      <>
    {/* To save from multiple request */}
<<<<<<< HEAD
      {/* {!isLoaded(props.auth)?<></>:<>
        {props.authMine.loading?<h4 style={{marginTop:'10%',height:'52vh'}}>Patiently Wait...we are resgistering you in</h4>: */}
=======
      {!isLoaded(props.auth)?<></>:<>
        {props.authMine.loading?<h4 style={{marginTop:'10%',height:'52vh'}}>Patiently Wait...we are resgistering you in</h4>:
>>>>>>> master
          <div className="container med contact">
            <div className="section funnel-section">
                <div className="form-card">
               
                    <h2 className="form-heading center">Enter your details</h2>
                    <div className="form-section">
                        <div className="input-group full"><label>Email</label>
                            <div className="effect"><input type="text" name="email" value={email||''}  onChange={handleEmail}  /><span></span>
                            </div>
                        </div>

                        <div className="input-group full"><label>Password</label>
                            <div className="effect"><input  type="password" name="password"  value={password||''} onChange={handlePassword}/><span></span>
                            </div>
                        </div>
<<<<<<< HEAD
                        {props.authMine?.ErrorMessage?.message?<div className="input-group full">
                                <span className="error-message" >{props.authMine?.ErrorMessage?.message}</span> 
=======
                        {props.authMine?.error?<div className="input-group full">
                                <span className="error-message" >{props.authMine?.error}</span> 
>>>>>>> master
                        </div> :<></>}
                        <div className="form-buttons">
                            <button onClick={onSubmit} className="btn hvr-float-shadow" type='button'>Register</button>
                        </div>
                       
                    </div>
                </div>

            </div>
        </div>
<<<<<<< HEAD

        </>
    );
  }




  export default Register
=======
      }
        </>
  }
  </>
    );
  }

const mapStateToProps = (state) => {
  return{
    authMine : state.auth,
    auth : state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    register : (userData) => dispatch(authActions.register(userData))
  }
}

  export default connect(mapStateToProps,mapDispatchToProps)(Register);
>>>>>>> master

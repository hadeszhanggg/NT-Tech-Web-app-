import React from "react";
import "../Styles/Regisform.scss";
class FormRegister extends React.Component
{
    state ={
        name: "",
        pass: "",
        confPass: ""
    }
    handleClick=()=>{
        if(this.state.name!=null&&this.state.pass!=null&&this.state.confPass!=null)
        {
            if(this.state.pass===this.state.confPass)
                alert(`Register account success with username: ${this.state.name}, password: ${this.state.pass}`);
            else
                alert('Confirm password must like password!!!');
        }else{
            alert('Username, password, confirm password cannot be left blank!!!');
        }       
      }
    handleOnchange=(event, loai)=>{
        if(loai==='name')
            this.setState({
                name: event.target.value,                
              })    
        else if(loai==='pass')
        this.setState({
            pass: event.target.value           
          })
          else
          this.setState({
            confPass: event.target.value           
          })
      }
      render() {
        return (
          <>
            <div className="form-container">
              <form>
                <label htmlFor="fname">Username:</label><br />
                <input
                  type="text"
                  onChange={(event) => this.handleOnchange(event, 'name')}
                  value={this.state.name}
                /><br />
                <label htmlFor="lname">Password:</label><br />
                <input
                  type="password"
                  onChange={(event) => this.handleOnchange(event, 'pass')}
                  value={this.state.pass}
                /><br />
                <label htmlFor="lname">Confirm Password:</label><br />
                <input
                  type="password"
                  onChange={(event) => this.handleOnchange(event, 'confPass')}
                  value={this.state.confPass}
                /><br /><br />
                <input
                  type="button"
                  onClick={() => this.handleClick()}
                  value="Signup"
                />
              </form>
            </div>
          </>
        );
      }
    }
    
    export default FormRegister;
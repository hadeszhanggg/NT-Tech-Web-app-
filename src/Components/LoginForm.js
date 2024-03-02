import React from "react";
class FormLogin extends React.Component
{
    state ={
        name: "",
        pass: ""
    }
    handleClick=()=>{
        this.setState({
          name: this.event.target.value
        })
          alert(`My name is ${this.state.name}`)
        
      }
    handleOnchange=(event, loai)=>{
        if(loai==='name'){
            this.setState({
                name: event.target.value,
                  
              })
        }
        else
        this.setState({
            pass: event.target.value
              
          })
      }
    render(){
        return(
            <>
            <form>
                <label for="fname">Username:</label><br/>
                <input type="text" onChange={(event)=> this.handleOnchange(event,'name')} value={this.state.name}/><br/>
                <label for="lname">Password:</label><br/>
                <input type="text" onChange={(event)=> this.handleOnchange(event,'pass')} value={this.state.pass}/><br/><br/>
                <input type="submit" onClick={ ()=>this.handleClick()} value="Submit"/>
                </form> 
            </>
        );
    }
}


export default FormLogin;

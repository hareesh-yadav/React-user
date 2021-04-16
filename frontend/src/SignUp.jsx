import React,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'

class SignUp extends Component{    
    constructor(){
        super()
        this.state={
            "fullName":"",
            "mobile":"",
            "email":"",
            "password":""
        }
        this.changeFullName=this.changeFullName.bind(this)
        this.changeMobile=this.changeMobile.bind(this)
        this.changeEmail=this.changeEmail.bind(this)
        this.changePassword=this.changePassword.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }
    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
    }
    changeMobile(event){
        this.setState({
            mobile:event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }
    onSubmit(event){
        event.preventDefault()
        const acc={
            fullName:this.state.fullName,
            mobile:this.state.mobile,
            email:this.state.email,
            password:this.state.password
        }

        axios.post("http://localhost:4000/user/signup",acc)
        .then(res=>console.log(res.data))

        window.location='/signin'
    }
    render(){
        const st={
            margin:30,
            width:400
        }
        return(
            <div>
                <div className="container">
                    <div className="form">
                        <form onSubmit={this.onSubmit}>
                            <input style={st} type="text" placeholder="Enter Name" onChange={this.changeFullName} value={this.state.fullName} className="form-control form-group"/>
                            <input style={st} type="number" placeholder="Enter mobile number" onChange={this.changeMobile} value={this.state.mobile} className="form-control form-group"/>
                            <input style={st} type="email" placeholder="Enter E-Mail" onChange={this.changeEmail} value={this.state.email} className="form-control form-group"/>
                            <input style={st} type="password" placeholder="Enter password" onChange={this.changePassword} value={this.state.password} className="form-control form-group"/>                            
                            <input className="btn btn-danger" type="submit" value="signup"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }    
}

export default SignUp
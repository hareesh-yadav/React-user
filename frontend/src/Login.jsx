import React,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'

class Login extends Component{
    constructor(){        
        super()
        this.state={            
            "email":"",
            "password":"",
            "users":[]
        }        
        this.changeMobile=this.changeMobile.bind(this)
        this.changePassword=this.changePassword.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
        
    }    
    changeMobile(event){
        this.setState({
            mobile:event.target.value
        })
    }
    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }
    componentDidMount(){
        this.show(this.state.users)
    }
     async onSubmit(event){
        event.preventDefault()
        const acc={            
            mobile:this.state.mobile,
            password:this.state.password
        }        
         await axios.post("http://localhost:4000/user/signin",acc)
            .then(res=>{           
                localStorage.setItem('token',res.token)
                this.setState({
                    users:res.data
                })     
                console.log(res)            
            })
            .catch(err=>{
                console.log(err)
            })                        
    }
    log(users){
        const st={
            margin:30,
            width:400
        }
        if(users.length==0)
            return(
                <div className="form">
                        <form onSubmit={this.onSubmit}>                                                        
                            <input style={st} type="number" placeholder="Enter mobile number" onChange={this.changeMobile} value={this.state.mobile} className="form-control form-group" required/>
                            <input style={st} type="password" placeholder="Enter password" onChange={this.changePassword} value={this.state.password} className="form-control form-group" required/>                            
                            <input className="btn btn-danger" type="submit" value="signin"/>
                        </form>                        
                    </div>
            )
    }
    show(users){
    console.log("entered..")        
    console.log(users,users.length)        
    if(users.length==0)
        return null
        return(
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th>S.NO</th>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>Password</th>
                                    
                </tr>
            </thead>
            <tbody>
                {users.map((user,index)=>(                        
                    <tr>                        
                        <td>{index+1}</td>
                        <td>{user.fullName}</td>              
                        <td>{user.mobile}</td>              
                        <td>{user.email}</td>                  
                        <td>{user.password}</td>              
                    </tr>
                ))}
            </tbody>
        </table>
    )
    }
    render(){        
        return(
            <div>
                <div className="container">
                    {this.log(this.state.users)}
                    {/* <div className="form">
                        <form onSubmit={this.onSubmit}>                                                        
                            <input style={st} type="number" placeholder="Enter mobile number" onChange={this.changeMobile} value={this.state.mobile} className="form-control form-group"/>
                            <input style={st} type="password" placeholder="Enter password" onChange={this.changePassword} value={this.state.password} className="form-control form-group"/>                            
                            <input type="submit" value="signin"/>
                        </form>                        
                    </div> */}
                </div>
                <div className="tab">
                    {this.show(this.state.users)}
                </div>               
            </div>
        )
    }    
}

export default Login;
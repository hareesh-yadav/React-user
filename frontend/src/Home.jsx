import React,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

class Home extends Component{
    render(){
        const st={
            margin:30,
            fontSize:30            
        }        
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">                    
                        <Link style={st} to="/signup">SignUp</Link>                
                        <Link style={st} to="/signin">SignIn</Link>                    
                </nav>      
            </div>
        )
    }
}

export default Home
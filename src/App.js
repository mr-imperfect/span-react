import React,{Component} from 'react'
import './App.css';

import Example from './Components/Card'
import Footer from './Components/Footer'
class App extends Component{
  render(){
    



    return(
    <div className="container">
         

        <div className="inner-container">
            <header>
                <div className="header-container">
                    <div className="header-innercontainer">
                        <h1><div className="small-s">s</div><span>S</span>PAN   <div className="fitness">FITNESS CENTER</div> </h1>
                 
                        <div className="ham"><i class="fas fa-bars"></i></div> 
                        <nav>
                            
                        <a href="">Home</a>
                        <a href="">Our Services</a>
                        {/* <a href="">Contact us</a> */}
                    </nav>

                    </div>
                </div>
            </header>
                <div className="section-container">
                   <div className="left-section">


                       <h2>"Welcome to span gym family!" </h2>
                       <button>Explore more!</button>
                      
                       {/* <h3>If you want to focus more and build core strength join span gymnasium.span gym provides you both muscle strength building and cardio workout exercise.There are lot of persons who experienced a better atmosphere in our gym and lots of guys were transformed from fat to fit.This is a mixed gym.Womans have special training area and special woman coach.</h3> */}
                   </div>
                   <div className="right-section">
                       <form action="" method="">
                           <h3>SIGN UP</h3>
                           <br/>
                           <br/>
                          
                           <label for="name">Username</label>
                          
                          <br/>
                          <br/>
                        <input type="text" id="name" name="username"/>
                        <br/>
                          <br/>
                           <label for="pass">Password</label>
                           
                           <br/>
                          <br/>
                           <input type="password" id="pass" name="password"/>
                           <br/>
                          <br/>
                         
                           <button>Sign up</button>
                           <br/>
                           <br/>
                          
                           <h4>already have an account? <a href="">signin</a></h4>
                       </form>
                   </div>
                </div>

        </div>
        <div className="containertwo">
        <h1>Our Services</h1>

        <div className="first-card">
        <Example title="Normal Training" src="https://images.unsplash.com/photo-1577221084712-45b0445d2b00?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Z3ltfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" price="650rs" services="Our Services" />

        <Example price="1000rs" title="Cardio+Normal Training" src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fGV4ZXJjaXNlfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60" />
        <Example price="5000rs" title="Special Training" src="https://images.unsplash.com/photo-1518459031867-a89b944bffe4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8Zml0bmVzcyUyMHRyYWluZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
        </div>  

        
        </div>
        <div className="footer">
            <Footer/>
        </div>
 <script src="./ham.js"></script>

    </div>
   

)
}
}

export default App;

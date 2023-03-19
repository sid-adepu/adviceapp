import React from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';






class App extends React.Component{
  state={ advice:''};
   componentDidMount(){
   
    this.fetchAdvice();
   }
    fetchAdvice=()=>
    {
      axios.get('https://api.adviceslip.com/advice')
      .then((response)=>{
        const{advice}= response.data.slip;
        this.setState({advice});
        //console.log(advice);
      }) 

      .catch((error)=>{
        console.log(error);
      });

    }

   render(){
    const{advice}=this.state;
    return (
      
      <div className="app">
        <div className="title">
          <div >
            <button className='b2'> Advice</button>
          </div>
         
          
          
        </div>
        <div className='hr'><hr>
        </hr>
        </div>
        
        
        <div className="card">
          <h1 className="heading">{advice}</h1>
          
    
          <button className="button" onClick={this.fetchAdvice}>
            <span>Give me Advice!</span>
            </button>
            
        </div>
        <div>
        <footer className='footer'>by Siddeshwari Adepu</footer>
        </div>
      </div>
      

      
    )
   }



}
export default App;
import "./App.css";
import React, { Component } from 'react';


 class App extends Component {
  state = {
    Person: {
      fullName:"Elkhazen Ines", 
      bio:"I am an engineer in textile chemistry and I have obtained a research master's degree in this field." ,
      imgSrc: "./assets/ines.jfif",
      profession:"Ingenieur",      
  },
  show:false,
  timeinterval:0,
};
toggleShow = () => {
  this.setState({ show: !this.state.show });
};
componentDidMount(){
setInterval(()=>{this.setState({timeinterval:this.state.timeinterval+1});

},1000);
}


  render() {
    return (
      <div className="App">
            <button onClick={this.toggleShow }>click here</button>

              {this.state.show? <div>
                 <h1> The profile of person </h1>
                 <h2>{this.state.Person.fullName}</h2>
                 <h3>{this.state.Person.bio}</h3>
                 <img src={this.state.Person.imgSrc} alt="personne"></img>
                 <h4>{this.state.Person.profession}</h4> </div> : null}
             <h5>{this.state.timeinterval}</h5>
      
      </div>
      
    )
  }
}
export default App;

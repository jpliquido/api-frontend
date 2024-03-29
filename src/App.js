import React, {Component} from 'react';
import axios from 'axios';


class App extends Component{
  state = {
    books:[]
  };

  componentDidMount(){
    this.getBooks();
  }  

  getBooks(){
    axios
    .get('http://127.0.0.1:8000/api/')
    .then(res=>{
      this.setState({books:res.data});
    })
    .catch(err => {
      console.log(err);
    })

  }

  render(){
    return(
      <div>
        {this.state.books.map(item =>(
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.subtitle}</p>
            <p>{item.author}</p>
            <p>{item.isbn}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default App;

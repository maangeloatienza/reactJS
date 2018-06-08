import React, { Component } from 'react';
import {
  Container,
  Navbar,
  NavItem,
  NavbarBrand,
  Card
} from 'reactstrap';

// import {
//   Grid,
//   Row,
//   Col
// } from 'react-flexbox-grid';
import search from './search.png';
import './App.css';
import MovieRow from './MovieRow';
import $ from 'jquery';

class App extends Component {

  constructor(props) {
    super(props);
    this.performSeacrh();
  }

  performSeacrh(){
    var movieRow = "";
    var movie = [];
    const urlString = `https://api.themoviedb.org/3/search/company?api_key=66b609ca64a3bb3cb9b325283b1ea63d&query=a&page=1`;
    $.ajax({
      url : urlString,
      success : (results)=>{       
          Object.keys(results).map((item, i) => {
            
            const movieRow = <MovieRow movie={results.results[i]}/>
            movie.push(movieRow)
            
          })
        this.setState({res : movie})
        console.log(this.state.res)
      },
      error : (xhr,status,err)=>{
        console.error(err);
      }
    })
  }
  render() {
    return (

      <Container lg={12}>

        <Navbar className="titleBar">
          <NavbarBrand href="/">
            <img
              width="50"
              src={search}
              alt='Search'
            />
          </NavbarBrand>
          <NavItem
            className="hAlign"
            style={{ float: 'left' }}>
            <h1>MovieDB search</h1>
          </NavItem>
        </Navbar>
        <input
          style={{
            display: 'block',
            width: '98%',
            padding: 10
          }}
          placeholder="Enter search term" />

        <Container>
          <Card>
            {/* { this.state.res } */}
          </Card>
        </Container>
      </Container>
    );
  }
}

export default App;

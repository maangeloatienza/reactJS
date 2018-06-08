import React from 'react';
import {
  Container,
  Navbar,
  NavItem,
  NavbarBrand,
  Card
} from 'reactstrap';

import {
  Grid,
  Row,
  Col
} from 'react-flexbox-grid';

class MovieRow extends React.Component {
  render() {
    return <Row
        key={this.props.movie.id}
        className="movieRows"
      >
        <Col xs={6} md={4}>
          <img
            src={this.props.movie.logo_path}
            className='movieImg'
            responsive
          />
        </Col>
        <Col xs={6} md={8}>
          <h3>{this.props.movie.name}</h3>
        </Col>
      </Row >
  }
}

export default MovieRow;
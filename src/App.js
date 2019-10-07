import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {Container, FormControl} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import AddressBook from "./AddressBook/AddressBook";
import {generate} from 'randomstring';

class App extends React.Component {
  state = {
    address: [
      {
        key: generate(10),
        FirstName: "Cathy",
        LastName: "Pierce",
        Birthday: "9/14/1996",
        Telephone: "200-910-8132"
      },
      {
        key: generate(10),
        FirstName: "Alfonso",
        LastName: "Cooley",
        Birthday: "8/10/1973",
        Telephone: "200-657-9362"
      },
      {
        key: generate(10),
        FirstName: "Victor",
        LastName: "Gordon",
        Birthday: "8/3/1970",
        Telephone: "200-661-9407"
      },
      {
        key: generate(10),
        FirstName: "Colleen",
        LastName: "Wright",
        Birthday: "10/28/1967",
        Telephone: "200-250-7949"
      },
      {
        key: generate(10),
        FirstName: "James",
        LastName: "Johnston",
        Birthday: "5/11/1972",
        Telephone: "200-645-3176"
      },
      {
        key: generate(10),
        FirstName: "Anna",
        LastName: "Reyes",
        Birthday: "9/10/1975",
        Telephone: "200-707-8670"
      }
    ],
    FirstName: "",
    LastName: "",
    Birthday: "",
    Telephone: "",
    newAddress: null
  };

  addAddressHandler = (event) => {
    event.preventDefault();
    let newAddress = {
      key: generate(10),
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      Birthday: this.state.Birthday,
      Telephone: this.state.Telephone
    };
    this.setState({address:[...this.state.address,newAddress]});
    this.setState({FirstName:''})
    this.setState({LastName:''});
    this.setState({Birthday:''});
    this.setState({Telephone:''});
  }

  deleteAddressHandler = (key, event) => {
    let address = [...this.state.address];
    let deleteIndex = address.findIndex((item) => item.key === key);
    address.splice(deleteIndex,1);
    this.setState({address:address});
  }

  searchHandler = (event) => {
    let keyword = event.target.value;
    let address = this.state.address;
    let newAddress = address.filter((item => {
      return item.FirstName.toLowerCase().includes(keyword) || item.LastName.toLowerCase().includes(keyword) || item.Birthday.toLowerCase().includes(keyword) || item.Telephone.toLowerCase().includes(keyword)
    }));
    this.setState({newAddress: keyword? newAddress : null});
  }

  render = () => {
    return (
      <div className="App">
        <Container>
          <header className="text-left">
            <h1>React Based Address Book</h1>
          </header>
          <div className="text-right">
            <input type="text"
              placeholder="Search Keyword"
              id="searchwWord"
              onChange={this.searchHandler}>

            </input>
          </div>
          <AddressBook
            address={this.state.newAddress || this.state.address}
            delete={this.deleteAddressHandler}>
          </AddressBook>
          <br />
          <h2 className="text-left">Add Address</h2>
          <Form className="text-left" onSubmit={this.addAddressHandler}>
            <Form.Group controlId="formAddress">
              <Form.Label>FirstName</Form.Label>
              <FormControl
                type="text"
                placeholder="Enter FirstName"
                value={this.state.FirstName}
                onChange={(e) => this.setState({FirstName:e.target.value})}>
              </FormControl>
              <Form.Label>LastName</Form.Label>
              <FormControl
                type="text"
                placeholder="Enter LastName"
                value={this.state.LastName}
                onChange={(e) => this.setState({LastName:e.target.value})}>
              </FormControl>
              <Form.Label>Birthday</Form.Label>
              <FormControl
                type="text"
                placeholder="Enter Birthday"
                value={this.state.Birthday}
                onChange={(e) => this.setState({Birthday:e.target.value})}>
              </FormControl>
              <Form.Label>Telephone</Form.Label>
              <FormControl
                type="text"
                placeholder="Enter Telephone"
                value={this.state.Telephone}
                onChange={(e) => this.setState({Telephone:e.target.value})}>
              </FormControl>
              <br/>
              <Button variant="primary" type="submit">Add New Address</Button>
            </Form.Group>
          </Form>
        </Container>
      </div>
    )
  }

}

export default App;

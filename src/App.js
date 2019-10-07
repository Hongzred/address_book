import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {Container} from "react-bootstrap";
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
    Telephone: ""
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

  render = () => {
    return (
      <div className="App">
        <Container>
          <header className="text-left">
            <h1>React Based Address Book</h1>
          </header>
          <AddressBook
            address={this.state.address}
            delete={this.deleteAddressHandler}>
          </AddressBook>
        </Container>
      </div>
    )
  }

}

export default App;

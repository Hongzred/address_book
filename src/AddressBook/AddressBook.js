import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function AddressBook (props) {

    let address = [...props.address];
    let listItems = address.map((item) => 
        <ListGroup.Item key={item.key}>
            <Card className="bg-light border rounded">
                <span key={item.key}
                    className="text-right pointer"
                    onClick={props.delete.bind(null,item.key)}>
                    {'\u274e'}
                </span>
                <Card.Body className="text-left">
                    <p>FirstName: {item.FirstName}</p>
                    <p>LastName: {item.LastName}</p>
                    <p>BirthDay: {item.Birthday}</p>
                    <p>Telephone: {item.Telephone}</p>
                </Card.Body>
            </Card>
        </ListGroup.Item>
    )
    return listItems;
}

export default AddressBook;
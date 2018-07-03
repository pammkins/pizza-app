import React, { Component } from 'react';
import { Link  } from 'react-router-dom';
import { Header, Container, Segment, Form, Button } from 'semantic-ui-react';
import { formatPrice } from '../helpers';

class CustomerDetailsForm extends Component {

  handleChange = (e) => {
    const updateCustomer = {
      ...this.props.customerDetails,
      [e.currentTarget.name]: e.target.value
    }
    this.props.updateCustomerDetails(updateCustomer);
  }

  render(){

    return (
      <Container>
        <Header as='h1' id="page-header">Your Details</Header>
        <Container id="form-box">
          <Form>
            <Form.Group widths='equal'>
              <Form.Input
                fluid
                label='First name'
                placeholder='First name'
                name='firstName'
                value={this.props.firstName}
                onChange={this.handleChange}
                required />
              <Form.Input
                fluid
                label='Last name'
                placeholder='Last name'
                name='lastName'
                value={this.props.lastName}
                onChange={this.handleChange}
                required />
            </Form.Group>

            <Form.Input
              label='Email'
              placeholder='Email'
              name='email'
              value={this.props.email}
              onChange={this.handleChange}
              required />
            <Form.Input
              label='Contact No.'
              placeholder='Contact No.'
              name='contactNum'
              value={this.props.contactNum}
              onChange={this.handleChange}
              required />
            <Form.Input
              label='Address'
              placeholder='Address'
              name='address'
              value={this.props.address}
              onChange={this.handleChange}
              required />

            <Segment vertical textAlign='right' id="form-confirm" size='large'>
            <Header as='h2'>Total: {formatPrice(this.props.checkoutTotal)} </Header>
            <Button as={Link} to="/payment" color='violet' size='large'>Go to Payment</Button>
            </Segment>

          </Form>
        </Container>
      </Container>
    );
  }

}

export default CustomerDetailsForm;

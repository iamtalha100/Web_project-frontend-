import React, { Component } from 'react'
import { Form, Input, Button, Checkbox,Layout } from 'antd';


import Navbar from './Navbar'

class Contact extends Component {
    state = {  }
    render() { 
        return ( <div>
            <Navbar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className='contact'>
                <h1 className='contact-text'>Contact Us
                <br/>
                <span>@Email:talharajput191@gmail.com
                    <br/>
                    @Phone:03114482825
                    <br/>
                    @Address:Near Bund Road,Lahore</span></h1>
            </div>
            <div className='contact-block'>
            <div className='container-fluid'>
                <div className='title'>
                    <h2>Get in Touch</h2>
                    <p>
                        We are here for you!!
                    </p>
                </div>
                <Form
      name="basic"
      initialValues={{ remember: true }}
      
      
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Message"
        name="Message"
        rules={[{ required: false, message: 'Please input your message' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      

      <Form.Item >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
            </div>
            </div>
            </div>
         );
    }
}
 
export default Contact;
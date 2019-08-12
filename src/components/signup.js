import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.HandleNameChange = this.HandleNameChange.bind(this);
    this.HandlePhoneChange = this.HandlePhoneChange.bind(this);
    this.HandleEmailChange = this.HandleEmailChange.bind(this);
    this.HandlePasswordChange = this.HandlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      activeTab: "1",
      email: "",
      password: "",
      name: "",
      phone: ""
    };
  }
  HandleEmailChange(e) {
    this.setState({ email: e.target.value });
  }
  HandlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }
  HandleNameChange(e) {
    this.setState({ name: e.target.value });
  }
  HandlePhoneChange(e) {
    this.setState({ phone: e.target.value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
      phone: this.state.phone,
      name: this.state.name
    }
    const res = await axios.post("http://13.78.67.3:4000/user/register", user, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    if(res.data.result === "failed") {
      alert('Email đã được sử dụng hoặc lỗi hệ thống!!!!')
    }
    else {
      alert('Bạn đã đăng kí thành công!!');
    }
  }

  render() {
    return (
      <Form className="m-3 col-8 col-sm-4s col-xl-3" onSubmit= {this.handleSubmit}>
        <FormGroup>
          <Label for="name">Tên</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Nhập tên"
            onChange={this.HandleNameChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="name">Số điện thoại</Label>
          <Input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Nhập số điện thoại"
            onChange={this.HandlePhoneChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="newEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="newEmail"
            placeholder="abc@xxx.com"
            onChange={this.HandleEmailChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="newPw1">Mật khẩu</Label>
          <Input
            type="password"
            name="newPw1"
            id="pw1"
            placeholder="Nhập mật khẩu"
            onChange={this.HandlePasswordChange}
            required
          />
        </FormGroup>
        <Button>Đăng kí</Button>
      </Form>
    );
  }
}

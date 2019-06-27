import React from 'react';
import { Card, Icon, Col } from 'antd';
import CollectionCreateForm from './CollectionCreateForm';
import 'antd/dist/antd.css';
import './dynamic.css';


class Card1 extends React.Component {
  constructor(props) {
    super(props);
    //const { name, phone, website, email } = this.props.data;
    this.state = {
      theme: ''
    }
  }
  ChangeColor = () => {
    if (this.state.theme === '') {
      this.setState({ theme: 'filled' });
    } else {
      this.setState({ theme: '' });
    }
  }

  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      console.log('Received values of form: ', values);
      this.setState({
        visible: false,
      });
      this.props.updateValue(values, this.props.data.id);
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };



  render() {

    const img = `https://avatars.dicebear.com/v2/avataaars/${this.props.data.username}.svg?options[mood][]=happy`;
    return (
      <Col xs={24} sm={12} md={8} lg={8} xl={6} >
        <Card
          style={{ marginBottom: "30px", margin: "15px" }}
          cover={
            <img
              alt="example"
              src={img}
            />
          }
          actions={
            [<button onClick={this.ChangeColor} ><Icon type="heart" theme={this.state.theme} style={{ color: 'red' }} /></button>,
            <button onClick={this.showModal}> <Icon type="edit" /></button>,
            <button onClick={() => this.props.deleteUser(this.props.data.id)}><Icon type="delete" theme="filled" /></button>
            ]
          }
        >
          {<div className="card-body">
            <h3>{this.props.data.name}</h3>
            <p> <Icon type="mail" style={{ marginRight: '10px' }} />  {this.props.data.email} </p>
            <p><Icon type="phone" style={{ marginRight: '10px' }} />  {this.props.data.phone}</p>
            <p><Icon type="global" style={{ marginRight: '10px' }} />https://{this.props.data.website}</p>
          </div>}
        </Card>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          data={this.props.data}
        />

      </Col >
    );

  }
}
export default Card1;

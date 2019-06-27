import React from 'react';
import ReactDOM from 'react-dom';
import CardList from './CardList';
import Userdata from './Userdata';
import Loading from './Loading';
import 'antd/dist/antd.css';

class App extends React.Component {
  state = {
    data: [],
    loading: true,
  };
  deleteUser = (index) => {
    const users = this.state.data.filter(e => e.id !== index);
    this.setState({
      data: [...users]
    });
  }
  updateValue = (values, id) => {
    const newData = this.state.data.filter(e => {
      if (e.id === id) {
        e.name = values.name;
        e.email = values.email;
        e.phone = values.phone;
        e.website = values.website;
      }
      return (e);
    });
    this.setState({
      data: [...newData]
    })

  }

  // componentDidMount = async () => {
  //   const response = await Userdata.get('/users');
  //   this.setState({
  //     data: response.data,
  //     loading: false
  //   });
  // }

  componentWillMount = Userdata.get('/users').then(response => {
    this.setState({
      data: response.data,
      loading: false
    });
  })
  render() {
    if (this.state.loading === true) {
      return (
        <div >
          <Loading />
        </div >);

    }
    return (
      <div className="ant-container"
        style={
          {
            margin: '15px'
          }
        } >
        <
          CardList data={
            this.state.data
          }
          deleteUser={
            this.deleteUser
          }
          updateValue={this.updateValue}
        />
        {
          this.state.data.map(e => {
            return (<div key={e.id}>
              <p >{e.name}</p>
              <p >{e.email}</p>
              <p >{e.phone}</p>
              <p >{e.website}</p>
            </div>);
          })
        }
      </div >
    );

  }
}
ReactDOM.render(< App />, document.querySelector('#root'));

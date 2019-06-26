import React from 'react';
import Card1 from './Card';
import { Row } from 'antd';
import 'antd/dist/antd.css';


const CardList = (props) => {

  const cards = props.data.map(e => {
    return <Card1 data={e} key={e.id} deleteUser={props.deleteUser} />;
  });

  return (
    <Row type="flex" style={{ margin: '10px' }}>
      {cards}
    </Row>



  );

}

export default CardList;
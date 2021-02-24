import React, { useEffect, useState } from "react";
import '../styles/App.css';
import Movies from "./Movies";
import { Input, Row, Col, Button, Card } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

function App() {
  const { Meta } = Card;
  const [movieInf, setMovieInf] = useState(null);
  const [movie, setMovie] = useState('car');

  const { Search } = Input;
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );

  useEffect(() => {
    const getData = async () => {
      const info = await fetch(
        `http://www.omdbapi.com/?apikey=b66fe896&i=${movie}`
      );
      const data = await info.json();
      setMovieInf(data.Search);
    };
    getData();
    
  }, [movie]);

  const handleSearchMovie = (value) => {
    setMovie(value);
    document.querySelector("#movie").value = "";
  };

  return (
    <>
      <br></br>
      <Row>
        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
        </Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={4}>
        <Search  
              placeholder="Nombre "
              enterButton="Search"
              size="large"
              suffix={suffix}
              onSearch={handleSearchMovie}    
        />
        </Col>
        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
        </Col>
      </Row>
      <Row>
      <Col span={2}></Col>
        <Col span={22}><Movies movieInf={movieInf}/></Col>
      </Row>
      <br></br>

    </>
  );
}

export default App;

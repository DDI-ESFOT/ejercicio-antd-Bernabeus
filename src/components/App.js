import Movies from "./Movies";
import "../styles/App.css";
import React, {useEffect, useState} from "react";
import { Input, Space,Row,Col} from 'antd';
import { AudioOutlined } from '@ant-design/icons';

function App() {
  const [movieInf, setMovieInf] = useState([]);
  const [movieE, setmovieE] = useState('Transformer');

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
      const response = await fetch(`http://www.omdbapi.com/?apikey=b66fe896&s=${movieE}`);
      const dataMovies = await response.json();
      setMovieInf( dataMovies.Search);
    }
    getData();

  }, [movieE]);
  
   const onSearch =(value) => {
     setmovieE(value);
   }


  return (
      <>
        <Row>
        <Col span={10}></Col>
        <Col span={14}><Space direction="vertical">
          <label>Ingrese nombre de la pelicula</label>
          <Search  
              placeholder=""
              enterButton="Buscar pelicula"
              size="large"
              onSearch={onSearch}
        
          />
        </Space></Col>
        </Row>
        <br></br>
        <Row>
        <Col span={2}></Col>
        <Col span={22}><Movies movies={movieInf}/></Col>
        </Row>
      </>
  );
}

export default App;
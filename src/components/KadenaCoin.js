import React, { useState, useEffect } from 'react';
import axios from 'axios';
import App from '../App';
import { Card, Container, Nav, Col, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const KadenaCoin = () => {
  const [data, setData] = useState()


  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/kadena").then((response) => {
      setData(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])
  //console.log(data)

  if (!data) return null

  return (

<Container>
  <Navbar expand="lg">
    <Container>
      <Navbar.Brand className='text-danger' href="">{data.id} </Navbar.Brand>
      <Nav.Item>
      USD: {data.market_data.current_price.usd}
      </Nav.Item>
      <Nav.Item>
      EUR: {data.market_data.current_price.eur}
      </Nav.Item>
      <Nav.Item>
      Rank: {data.market_cap_rank}
      </Nav.Item>
    </Container>
  </Navbar>
</Container>
  )
}

export default KadenaCoin


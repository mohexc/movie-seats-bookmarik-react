import { Col, Row } from 'antd'
import React from 'react'
import "./App.less"
import Movies from './components/Movies'
import ShowCase from './components/ShowCase'
import Seates from "./components/Seats"

const App = () => {
  return (
    <Row justify="center" align="middle" className="app">
      <Col xs={23} lg={12}>
        <Movies />
        <ShowCase />
        <Seates />
        <p className="text" style={{ marginTop: '2rem' }}>
          You have selected <span>0 </span>
          seats for a pice of <span>0 </span>bath
        </p>
      </Col>
    </Row>
  )
}

export default App

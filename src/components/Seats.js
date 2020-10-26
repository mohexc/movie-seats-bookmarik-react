import { Col, Row } from 'antd'
import React from 'react'

const Seats = () => {

    return (
        <div className="seats-container">
            <div className="screen"></div>

            <Row justify="center" align="m" className="row">
                {Array.from(Array(60).keys()).map(seat => <Col xs={2} key={seat} className="seat">{seat + 1}</Col>)}

            </Row>

        </div>
    )
}

export default Seats

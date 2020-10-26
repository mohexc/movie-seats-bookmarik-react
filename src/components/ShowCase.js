import { Row } from 'antd'
import React from 'react'

const ShowCase = () => {
    return (
        <Row justify="space-around" className="showcase">
            <div className="flex-column-center-middle">
                <div className="seat"></div>
                <small>N/A</small>
            </div>
            <div className="flex-column-center-middle">
                <div className="seat selected"></div>
                <small>Selected</small>
            </div>
            <div className="flex-column-center-middle">
                <div className="seat occupied"></div>
                <small>Occupied</small>
            </div>
        </Row>
    )
}

export default ShowCase

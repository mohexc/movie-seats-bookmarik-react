import { Row, Select } from 'antd'
import React from 'react'

const Movies = () => {
    const listMovies = [
        { value: 10, label: "Avengers: Endgame (200 bath)" },
        { value: 12, label: "Joker (120 bath)" },
        { value: 8, label: "Toy Story 4 (300 bath)" },
        { value: 9, label: "The Lion King (250 bath)" },
    ]
    return (
        <Row justify="center" align="middle" className="movies">
            <label >Pick a movie : </label>
            <Select placeholder="List movies" style={{ width: "80%" }}>
                {listMovies.map(movie => <Select.Option key={movie.label} value={movie.value}>{movie.label}</Select.Option>)}
            </Select>
        </Row>
    )
}

export default Movies

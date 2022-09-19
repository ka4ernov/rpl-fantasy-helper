import React from 'react';

import Form from 'react-bootstrap/Form';

import './next-tour.css';

const NextTour = () => {
  
  return (
    <div className='next-tour-div'>
      <Form.Select 
        aria-label="select-next-tour"
        size='lg' 
        className='fs-4 fw-bold'
        style={{
          color: 'white', 
          backgroundColor: '#3f3f3f', 
          borderColor: 'white', 
          cursor: 'pointer', 
          outline: 'none'
        }}>
        <option>Выберите тур</option>
        <option value="1">Матчи 1 тура</option>
        <option value="3">Матчи 3 тура</option>
        <option value="2">Матчи 2 тура</option>
        <option value="4">Матчи 4 тура</option>
        <option value="5">Матчи 5 тура</option>
        <option value="6">Матчи 6 тура</option>
        <option value="7">Матчи 7 тура</option>
        <option value="8">Матчи 8 тура</option>
        <option value="9">Матчи 9 тура</option>
        <option value="10">Матчи 10 тура</option>
        <option value="11">Матчи 11 тура</option>
        <option value="12">Матчи 12 тура</option>
        <option value="13">Матчи 13 тура</option>
        <option value="14">Матчи 14 тура</option>
        <option value="15">Матчи 15 тура</option>
        <option value="16">Матчи 16 тура</option>
        <option value="17">Матчи 17 тура</option>
        <option value="18">Матчи 18 тура</option>
        <option value="19">Матчи 19 тура</option>
        <option value="20">Матчи 20 тура</option>
        <option value="21">Матчи 21 тура</option>
        <option value="22">Матчи 22 тура</option>
        <option value="23">Матчи 23 тура</option>
        <option value="24">Матчи 24 тура</option>
        <option value="25">Матчи 25 тура</option>
        <option value="26">Матчи 26 тура</option>
        <option value="27">Матчи 27 тура</option>
        <option value="28">Матчи 28 тура</option>
        <option value="29">Матчи 29 тура</option>
        <option value="30">Матчи 30 тура</option>
      </Form.Select>
    </div>
  )
}

export default NextTour;
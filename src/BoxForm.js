import React, { useState, useEffect } from 'react';
import './BoxForm.css';

export const BoxForm = (props) => {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [color, setColor] = useState('');

  function handleSubmit(evnt) {
    console.log(width, height, color);
    evnt.preventDefault();
    const box = { width: width, height: height, color: color };
    props.addToBoxList(box);
  }

  return (
    <>
      <h1 style={{ textAlign: 'center', color: 'brown' }}>Create Box Form</h1>
      <div className="From">
        <form onSubmit={handleSubmit}>
          <label htmlFor="width">Width</label>
          <input
            type="text"
            name="width"
            value={width}
            id="width"
            onChange={() => setWidth(event.target.value)}
          />
          <label htmlFor="height">Height</label>
          <input
            type="text"
            name="height"
            value={height}
            id="height"
            onChange={() => setHeight(event.target.value)}
          />
          <label htmlFor="color">Color</label>
          <input
            type="text"
            name="color"
            value={color}
            id="color"
            onChange={() => setColor(event.target.value)}
          />
          <button name="createBox" type="submit">
            Create Box
          </button>
        </form>
      </div>
    </>
  );
};

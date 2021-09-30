import React, { useState, useEffect } from 'react';
import { BoxForm } from './BoxForm';
import { Box } from './Box';
import { v4 as uuidv4 } from 'uuid';
import './BoxList.css';

export const BoxList = () => {
  const [boxList, setBoxList] = useState([]);

  function addToBoxList(item) {
    const box = { ...item, id: uuidv4() };
    setBoxList((prev) => [...prev, box]);
  }

  function removeToBoxList(id) {
    const box = boxList.filter((box) => box.id !== id);
    setBoxList(box);
  }

  return (
    <>
      <BoxForm addToBoxList={addToBoxList} />
      <div className="Box">
        {boxList.map((item) => (
          <Box
            key={uuidv4()}
            id={item.id}
            width={item.width}
            height={item.height}
            color={item.color}
            removeToBoxList={removeToBoxList}
          />
        ))}
      </div>
    </>
  );
};

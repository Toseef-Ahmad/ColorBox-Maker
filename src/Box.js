import React from 'react';

export const Box = (props) => {
  const styles = {
    box: {
      width: props.width + 'px',
      height: props.height + 'px',
      backgroundColor: props.color,
      // margin: 10,
    },
  };

  function handleClick() {
    props.removeToBoxList(props.id);
  }

  return (
    <>
      <div style={styles.box}></div>
      <button name="removeBox" onClick={handleClick}>
        Remove Box
      </button>
    </>
  );
};

import React from 'react';

const classes = {
  outerContainer: {
    height: '100%',
    width: '100%',
    display: 'table'
  },
  innerContainer: {
    display: 'table-cell',
    verticalAlign: 'middle'
  }
};

const VerticalAlign = (props) => {
  return (
    <div style={classes.outerContainer}>
      <div style={classes.innerContainer}>
        { props.children }
      </div>
    </div>
  )
};

export default VerticalAlign;
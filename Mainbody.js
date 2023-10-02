import React from 'react';
// import './App.css'; // Import your CSS for styling
import MyComponent from './Myprotfolio';

export function MainBody(props) {
  return (
    <div className="main-body">
      Hi! {props.name}
    </div>
  );
}

export default MainBody;

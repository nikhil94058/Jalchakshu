import React, { useState } from 'react';

function Slide({ title, content, imageUrl }) {
  return (
    <div className="slide">
      {imageUrl && <img src={imageUrl} alt="Slide" />}
      {title && <h2>{title}</h2>}
      {content && <p>{content}</p>}
    </div>
  );
}

function Presentation() {
  const [rate, setRate] = useState(0); // Initialize rate state with a default value of 0
  let ratein;
  const handleRateInputChange = (event) => {
    ratein = event.target.value;

  };

  const handleRateSubmit = () => {

    setRate(ratein); ratein = 0;
    console.log('Rate submitted:', rate);
  };

  return (
    <div className="presentation">
      <Slide
        title="Slide 1 Title"
        content="This is the content for Slide 1."
        imageUrl="slide1.jpg"
      />
      <div className='login'>
        <input
          type="number" // Use type="number" for rate input
          placeholder='Enter Rate (0-5)'
          value={rate} // Bind the value to the rate state
          onChange={handleRateInputChange} // Handle rate input change
        />
        <button style={{ backgroundColor: rate > 3 ? 'green' : 'red' }}>
          Water condition
        </button>

        <button type="submit" onClick={handleRateSubmit}>
          Submit
        </button>
      </div>
      <Slide
        title="Slide 3 Title"
        content="This is the content for Slide 3."
        imageUrl="slide3.jpg"
      />
    </div>
  );
}

export default Presentation;

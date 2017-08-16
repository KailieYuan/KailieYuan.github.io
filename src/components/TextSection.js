import React from 'react'
import "../App.css"

const TextSection = ({ eventTitle }) => {
  return (
  	<div className="text-container">
			{eventTitle}
		</div>
  );
};

export default TextSection;

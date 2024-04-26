import React, { useEffect, useState } from "react";

export default function Toggle() {
  // State to track dark mode
  const [darkMode, setDarkMode] = useState(false);
  // State to track the checked state of the toggle
  const [isChecked, setIsChecked] = useState(false);

  // Function to handle checkbox change
  function checkHandler() {
    // Toggle the isChecked state
    setIsChecked(!isChecked);
    // Toggle the darkMode state
    setDarkMode(!darkMode);
  }

  // Effect to apply dark mode styles when darkMode or isChecked changes
  useEffect(() => {
    // Get the body element
    const body = document.body;
    // If dark mode is enabled
    if (darkMode) {
      // Add dark mode classes
      body.classList.add('bg-black', 'text-white');
      body.classList.remove('bg-white');
    } else {
      // Otherwise, add light mode classes
      body.classList.remove('bg-black', 'text-white');
      body.classList.add('bg-white');
    }
  }, [darkMode, isChecked]); // Run the effect whenever darkMode or isChecked changes

  return (
    <label htmlFor="checkbox" className={`flex items-center cursor-pointer w-14 h-8 rounded-full`} >
      <input type="checkbox" id="checkbox" className="sr-only" checked={isChecked} onChange={checkHandler} />
    </label>
  );
}
import React, { useState, useEffect } from "react";

function App() {
  const [showPerson, setShowPerson] = useState(false);
  const [secondsSinceMount, setSecondsSinceMount] = useState(0);

  useEffect(() => {
    let interval;

    if (showPerson) {
      // reset timer when person is shown
      setSecondsSinceMount(0);

      interval = setInterval(() => {
        setSecondsSinceMount((prev) => prev + 1);
      }, 1000);
    }

    // cleanup when user is hidden or component unmounts
    return () => clearInterval(interval);
  }, [showPerson]);

  return (
    <div>
      {showPerson && (
        <div>
          <h2>Fullname: Celestine Ogar</h2>
          <h3>
            Bio: A passionate software engineer and tech enthusiast, building
            innovative solutions and constantly exploring the evolving world of
            development.
          </h3>
          <img
            src="https://www.groovypost.com/wp-content/uploads/2023/01/pc-technician-featured.png"
            alt="Profile"
            width="300"
          />
          <h3>Profession: Software Engineer</h3>
          <p>Time since mounted: {secondsSinceMount} seconds</p>
        </div>
      )}

      <button onClick={() => setShowPerson((prev) => !prev)}>
        Toggle User
      </button>
    </div>
  );
}

export default App;

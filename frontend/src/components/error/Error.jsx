import React from 'react';

function Error(props) {
  return (
    <div className="App">
      <header className="App-header">
        <div><h1>{props.errorMessage}</h1></div>
      </header>
    </div>
  );
}

export default Error;

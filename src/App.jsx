import React from 'react';
import './App.css';
import Accordion from './components/Accordion';

function App() {
  return (
    <div className="app">
      <div className="accordion-container">
        <Accordion allowMultipleOpen>
          <Accordion.Section title="title">
            <div>hello</div>
          </Accordion.Section>
          <Accordion.Section isOpen title="title">
            <div>hello</div>
          </Accordion.Section>
        </Accordion>
      </div>
    </div>
  );
}

export default App;

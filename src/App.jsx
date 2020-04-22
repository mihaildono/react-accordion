import React, { useState } from 'react';
import './App.css';
import Accordion from './components/Accordion';

function App() {
  const [allowMultipleOpen, setAllowMultipleOpen] = useState(false);

  return (
    <div className="app">
      <div>
        <input type="checkbox" value={allowMultipleOpen} onChange={() => setAllowMultipleOpen(!allowMultipleOpen)} />
        <span>AllowMultipleOpen </span>
      </div>
      <div className="accordion-container">
        <Accordion allowMultipleOpen={allowMultipleOpen}>
          <Accordion.Section title="Lorem">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua
            </p>
          </Accordion.Section>
          <Accordion.Section isOpen title="Title">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,</p>
          </Accordion.Section>
        </Accordion>
      </div>
    </div>
  );
}

export default App;

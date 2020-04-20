import React from 'react';
import './App.css';
import AccordionSection from './components/AccordionSection';
import Accordion from './components/Accordion';

function App() {
  return (
    <div className="app">
      <Accordion>
        <AccordionSection title="title">
          <div>hello</div>
        </AccordionSection>
        <AccordionSection title="title2">
          <div>hello2</div>
        </AccordionSection>
      </Accordion>
    </div>
  );
}

export default App;

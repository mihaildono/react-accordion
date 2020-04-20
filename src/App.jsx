import React from 'react';
import './App.css';
import AccordionSection from './components/AccordionSection';
import Accordion from './components/Accordion';

function App() {
  return (
    <div className="app">
      <Accordion allowMultipleOpen>
        <AccordionSection title="title">
          <div>hello</div>
        </AccordionSection>
        <AccordionSection isOpen title="title2">
          <div>hello2</div>
        </AccordionSection>
      </Accordion>
    </div>
  );
}

export default App;

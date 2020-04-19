import React from 'react';
import './App.css';
import AccordionSection from './components/AccordionSection';

function App() {
  return (
    <div className="app">
      <AccordionSection isOpen={false} title="title" onClick={() => {}}>
        <div>hello</div>
      </AccordionSection>
    </div>
  );
}

export default App;

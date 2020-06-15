# React Accordion [![npm](https://img.shields.io/npm/v/@mihailgeorgiev94/react-accordion)](https://www.npmjs.com/package/@mihailgeorgiev94/react-accordion)

# Installation

```sh
npm i @mihailgeorgiev94/react-accordion
```

# Example

```javascript
import React from 'react';

import Accordion from '@mihailgeorgiev94/react-accordion'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="accordion-container">
        <Accordion allowMultipleOpen>
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

```

# API

|Accordion|type|description|
|---|---|---|
|allowMultipleOpen|Boolean|Allows for multiple sections to be open at the same time|


|Accordion.Section|type|description|
|---|---|---|
|isOpen|Boolean|Specifies default state for section. If allowMultipleOpen is false only the first section will be open|
|title|String|Text for header of section|
|children|String; Number; Element|Displayed information in description of section|

# React Accordion [![npm](https://img.shields.io/npm/v/@mihailgeorgiev94/react-accordion)](https://www.npmjs.com/package/@mihailgeorgiev94/react-accordion)

![Accordion
Demo](https://cdn.fbsbx.com/v/t59.2708-21/94098264_539164163461647_6846296569835159552_n.gif?_nc_cat=100&fallback=1&_nc_sid=041f46&_nc_oc=AQnQqRhu_DCdRgGkywECWRtJkXmuyAoHebFP5Wp92kJAXmRTf_LAwnj0LK4ciITt61k&_nc_ht=cdn.fbsbx.com&oh=2de87735af54d33a8d0fd976f655bc49&oe=5EA1EA2A)

# Demo

[Try demo](https://master.d26of7f6w4ftzf.amplifyapp.com/) or
[Visit demo repo](https://www.npmjs.com/package/@mihailgeorgiev94/react-accordion)



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

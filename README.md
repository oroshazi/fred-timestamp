# USAGE

## 1. Install

```
npm i fred-timestamp -s
```

## 2. Import

```ts
import ADF from "fred-timestamp";
```

## 3. Use

```ts
import React from "react";
import "./App.css";
import ADF from "fred-timestamp";

function App() {
  return (
    <div className="App">
      {ADF.inSeconds() >= 0 ? (
        <div> Fred left mySugr since: {ADF.inSeconds()} secs </div>
      ) : (
        <div>
          Time left until Fred leaves mySugr : {Math.abs(ADF.inSeconds())} secs
        </div>
      )}
    </div>
  );
}

export default App;
```

import {BrowserRouter} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import { useCallback, useRef, useState } from 'react';
import { ChildArea } from './components/ChildArea';
import { InlineStyle } from './components/inlineStyle';
import { CssModules } from './components/CssModules';
import { Home } from './components/Home';
import { Page1 } from './components/Page1';

export function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const onChangeText = (e) => {
    setText(e.target.value);
  }
  const onClickOpen = () => setOpen(!open);
  const onClickClose = useCallback(() => setOpen(false),[setOpen]);
  const myRef = useRef(null);
  return (
    <div className="App" ref={myRef}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
        <InlineStyle/>
        <CssModules/>
        <br/>
        <input value={text} onChange={onChangeText}/>
        <br/>
        <button onClick={onClickOpen}> 表示ボタン</button>
        <ChildArea open={open} onClickClose={onClickClose}/>
        {/* <br>以下ではルーティング関係</br>  */}
        <BrowserRouter>
          <Home />
          <Page1/>
        </BrowserRouter>
      </header>
    </div>
    
  );
}

export default App;

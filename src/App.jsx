import logo from './logo.svg';
import './App.css';
import { useCallback, useState } from 'react';
import { ChildArea } from './components/ChildArea';
import { InlineStyle } from './components/inlineStyle';

export function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const onChangeText = (e) => {
    setText(e.target.value);
  }
  const onClickOpen = () => setOpen(!open);
  const onClickClose = useCallback(() => setOpen(false),[setOpen]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
        <InlineStyle/>
        <br/>
        <input value={text} onChange={onChangeText}/>
        <br/>
        <button onClick={onClickOpen}> 表示ボタン</button>
          <ChildArea open={open} onClickClose={onClickClose}/>
      </header>
    </div>
  );
}

export default App;

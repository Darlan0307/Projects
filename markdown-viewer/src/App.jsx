import { useState,useEffect,useRef } from 'react'
import './App.css'
import ToolBar from './ToolBar'
import { AreaText } from './AppStyle'
import { marked } from 'marked';

function App() {

  const [text,setText] = useState(localStorage.getItem('textMarkdown') || "# Escreva aqui");

  const textReferencied = useRef(null);

  const textMarkdown = ()=>{
    return {__html:marked(text)}
  }

  useEffect(()=>{
    localStorage.setItem('textMarkdown',text);
  },[text])

  const insertText = (before,after)=>{
    const textatual = textReferencied.current;
    const start = textatual.selectionStart;
    const end = textatual.selectionEnd;
    const prevText = textatual.value;
    const beforeText = prevText.substring(0,start);
    const selectedText = prevText.substring(start,end);
    const afterText = prevText.substring(end);

    const newText = `${beforeText}${before}${selectedText}${after}${afterText}`
    setText(newText)
    textatual.focus()
  }

  return (
    <main style={{ display:"flex", flexDirection:"column", gap:"2em" }}>
      <ToolBar insertText={insertText}/>
      <AreaText 
      value={text}
      ref={textReferencied}
      onChange={(e)=>setText(e.target.value)}
      />
      <div dangerouslySetInnerHTML={textMarkdown()}>
      </div>
    </main>
  )
}

export default App

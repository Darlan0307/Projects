import React from 'react'
import { ToolButton } from './AppStyle.jsx'

const ToolBar = ({insertText}) => {
  return (
    <div>
        <ToolButton onClick={()=> insertText("# ","")}>Título</ToolButton>
        <ToolButton onClick={()=> insertText("## ","")}>Subtítulo</ToolButton>
        <ToolButton onClick={()=> insertText("**","**")}>Negrito</ToolButton>
        <ToolButton onClick={()=> insertText("*","*")}>Itálico</ToolButton>
        <ToolButton onClick={()=> insertText("- ","")}>Item de lista</ToolButton>
        <ToolButton onClick={()=> insertText("\n---\n","")}>Linha horizontal</ToolButton>
        <ToolButton onClick={() => insertText("[", "](http://)")}>Link</ToolButton>
    </div>
  )
}

export default ToolBar
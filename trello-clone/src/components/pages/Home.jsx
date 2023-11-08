import React from 'react'

import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Paper, Slide, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import { Draggable } from "react-beautiful-dnd";
import AddIcon from '@mui/icons-material/Add';

const inicialItems = [
  { id: "111", content: "Conteúdo 1" },
  { id: "222", content: "Conteúdo 2" },
  { id: "333", content: "Conteúdo 3" },
];

const inicialColumns = [
  {
    name: "To do",
    id: "1",
    items: inicialItems,
  },
  {
    name: "Doing",
    id: "2",
    items: [],
  },
  {
    name: "Done",
    id: "3",
    items: [],
  },
];
// Contante da transicao do dialogo
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Home() {
    
    const [columns, setColumns] = useState(inicialColumns);
    const [itemContent,setItemContent] = useState("");
    const [stateDialog,setStateDialog] = useState(false);
    const [idColumn, setIdColumn] = useState(null)
    // Mudando o estado do dialogo
    const handleStateDialog = () => {
      setStateDialog(!stateDialog)
    }

    // Acoes do botao de adicionar items

    function actionButton (state,idColumn){
      setStateDialog(state)
      setIdColumn(idColumn)
    }

    // Adicionar Item na Coluna
    const addItemColumn = (idColumn) => {
        var updateColumn = columns.map((column)=>{
            if(column.id == idColumn){
                const objTemp = {
                    id: Date.now().toString(),
                    content: itemContent,
                }

                column.items = [...column.items,objTemp]
            }
            return column
    })
    setColumns(updateColumn);
    setStateDialog(false);
}

    // Acao dos items para se mover entre as colunas
    const onDragEnd = (result) => {
        // var sourceColumnItems = columns[0].items;
        var sourceColumnItems = [];
        var destinationColumnItems = [];
        var draggedItem = {};
    
        var sourceColumnId = 0;
        var destinationColumnId = 0;
    
        for (var i in columns) {
          if (columns[i].id == result.source.droppableId) {
            sourceColumnItems = columns[i].items;
            sourceColumnId = i;
          } else if (columns[i].id == result.destination.droppableId) {
            destinationColumnItems = columns[i].items;
            destinationColumnId = i;
          }
        }
    
        //Guardando o objeto excluido
        for (var i in sourceColumnItems) {
          if (sourceColumnItems[i].id == result.draggableId) {
            draggedItem = sourceColumnItems[i];
          }
        }
    
        // Excluí o objeto arrastado.
        var filteredSourceColumnItems = sourceColumnItems.filter((item) => item.id != result.draggableId);
    
        // Adicionar o mesmo na nova posição.
        if (result.source.droppableId == result.destination.droppableId) {
          filteredSourceColumnItems.splice(result.destination.index, 0, draggedItem);
    
          // Mudar o state
          var columnsCopy = JSON.parse(JSON.stringify(columns));
          columnsCopy[sourceColumnId].items = filteredSourceColumnItems;
          setColumns(columnsCopy);
        } else {
          destinationColumnItems.splice(result.destination.index, 0, draggedItem);
          // Mudar o state
          var columnsCopy = JSON.parse(JSON.stringify(columns));
          columnsCopy[sourceColumnId].items = filteredSourceColumnItems;
          columnsCopy[destinationColumnId].items = destinationColumnItems;
          setColumns(columnsCopy);
        }
      };

  return (

    <DragDropContext onDragEnd={onDragEnd}>
        {columns.map((column) => (
          <>
          <Box style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            
            <Droppable droppableId={column.id} key={column.id}>
              {(provided) => (
                <Box style={{ backgroundColor: "#ebebf1", width: 400, height:"fit-content", padding: 10, margin: 10 }}>
                  <Typography variant="h4">{column.name}</Typography>
                  <Box ref={provided.innerRef} width="100%" height="100%">

                  
                  {column.items.map((item, index) => (
                    <Draggable draggableId={item.id} index={index} key={item.id}>
                      {(provided) => (
                        <Paper
                          elevation={2}
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                          style={{
                            height: 40,
                            marginTop: 15,
                            padding: 5,
                            ...provided.draggableProps.style,
                          }}
                        >
                          {item.content}
                        </Paper>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                  <Button sx={{ marginTop: "20px", color:"#959dab" }} size="large" startIcon={<AddIcon/>} onClick={()=> actionButton(true, column.id)}>
  CARD
</Button>

                 
                  </Box>
                </Box>
              )}
            </Droppable>
          </Box>
                    {/* Caixa de Dialogo */}

<Dialog 
open={stateDialog} 
onClose={handleStateDialog} 
fullWidth
TransitionComponent={Transition}
keepMounted
aria-describedby="alert-dialog-slide-description"

>

  <DialogTitle>{"Digite uma nova atividade!"}</DialogTitle>
  <DialogContent>
    <TextField defaultValue={itemContent} fullWidth onChange={(e) => setItemContent(e.target.value)}/>
  </DialogContent>
  <DialogActions>
    <Button onClick={handleStateDialog}>Cancelar</Button>
    <Button onClick={() => {      
          addItemColumn(idColumn)
          setItemContent("")
          }}>Ok</Button>
  </DialogActions>
</Dialog>
        </>
        ))}
      </DragDropContext>
    
  )
}

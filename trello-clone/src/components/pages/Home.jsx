import React from 'react'

import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Paper, Slide, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import { Draggable } from "react-beautiful-dnd";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const inicialColumns = [
  {
    name: "To do",
    id: "0",
    items: [],
  },
  {
    name: "Doing",
    id: "1",
    items: [],
  },
  {
    name: "Done",
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

export default function Home({ textNewColumn, stateNewColumn }) {
 
    const [columns, setColumns] = useState(inicialColumns);
    const [itemContent,setItemContent] = useState("");
    const [textTemp,setTextTemp] = useState("");
    const [stateDialog,setStateDialog] = useState(false);
    const [stateEditDialog,setStateEditDialog] = useState(false)
    const [idColumn, setIdColumn] = useState(null)
    const [idItem, setIdItem] = useState(null)

    // Criando nova coluna

    function createNewColumn(){
      console.log(textNewColumn);
      console.log(columns.length);
    }

    if(stateNewColumn){
      createNewColumn()
    }
    

    // Mudando o estado do dialogo
    const handleStateDialog = () => {
      setStateDialog(!stateDialog)
    }
    const handleStateEditDialog = () => {
      setStateEditDialog(!stateEditDialog)
    }

    // Acoes do botao de adicionar items
    function actionButton (state,idColumn){
      setStateDialog(state)
      setIdColumn(idColumn)
    }

    // Acaos do botao de editar itens
    function actionButtonEdit(idColumn,idItem){
      setStateEditDialog(true)
      const texto = columns[idColumn].items.filter((item) => item.id == idItem)[0].content;
      setTextTemp(texto)
      setIdColumn(idColumn)
      setIdItem(idItem)
    }

    // Editar item da coluna
    const editItemColumn = (idColumn,idItem) => {
      const updateColumn = columns.map((column) => {

          if(column.id == idColumn){
            const arrayTemp = column.items.map((item) => {
              if(item.id == idItem){
                item.content = textTemp
              }
              return item
            })
          }

        return column
      })

      setColumns(updateColumn)
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

    // Remover Item da coluna
    const removeItem = (idColumn,idItem) => {
      const updatedColumns = columns.map((column) => {
        if (column.id === idColumn) {          
          const filteredItems = column.items.filter((item) => item.id !== idItem);
          column.items = filteredItems;          
        }
        return column;
      });
    
      setColumns(updatedColumns);

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
  
    <>
  
    <DragDropContext onDragEnd={onDragEnd}>
        {columns.map((column) => (
        
          <Box style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
            
            <Droppable droppableId={column.id} key={column.id}>
              {(provided) => (
                <div style={{ backgroundColor: "#ebebf1", width: 400, height:"fit-content", padding: 10, margin: 10, borderRadius: 20 }}>
                  <Typography variant="h3" textAlign="center">{column.name}</Typography>
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
                            height: 60,
                            marginTop: 15,
                            padding: 5,
                            ...provided.draggableProps.style,
                            fontSize:20,
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"space-between"
                          }}
                        >
                          {item.content}
                          
                            <Box>
                            <Button 
                            onClick={()=>actionButtonEdit(column.id, item.id)}
                            sx={{ color:"#959dab" }}>
                            <EditIcon style={{ fontSize:30, cursor:"pointer" }}/>
                            </Button>
                            <Button
                            onClick={() => removeItem(column.id, item.id)}
                            sx={{ color:"#959dab" }}>
                            <DeleteIcon style={{ fontSize:30, cursor:"pointer" }}/>
                            </Button>                            
                            </Box>
                            
                          
                        </Paper>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                  <Button sx={{ marginTop: "20px", color:"#959dab" }} size="large" startIcon={<AddIcon/>} onClick={()=> actionButton(true, column.id)}>
  CARD
</Button>

                 
                  </Box>
                </div>
              )}
            </Droppable>
          </Box>

        
        ))}
      </DragDropContext>
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
    <TextField value={itemContent} fullWidth onChange={(e) => setItemContent(e.target.value)}/>
  </DialogContent>
  <DialogActions>
    <Button onClick={handleStateDialog}>Cancelar</Button>
    <Button onClick={() => {      
          addItemColumn(idColumn)
          setItemContent("")
          }}>Ok</Button>
  </DialogActions>
</Dialog>

{/* Dialogo para editar o card */}
<Dialog 
open={stateEditDialog} 
onClose={handleStateEditDialog} 
fullWidth
TransitionComponent={Transition}
keepMounted
aria-describedby="alert-dialog-slide-description"

>

  <DialogTitle>{"Editando o card"}</DialogTitle>
  <DialogContent>
    <TextField value={textTemp} fullWidth onChange={(e) => setTextTemp(e.target.value)}/>
  </DialogContent>
  <DialogActions>
    <Button onClick={handleStateEditDialog}>Cancelar</Button>
    <Button onClick={() => {      
          editItemColumn(idColumn,idItem);
          handleStateEditDialog();
          }}>Ok</Button>
  </DialogActions>
</Dialog>
      </>
  
  )
}



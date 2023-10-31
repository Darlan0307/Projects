import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditTodoDialog({ open, dialogHandle, todo, editTodo }) {

    const [editedTodo,setEditedTodo] = React.useState(todo.text)

    const updateTodo = () => {
        editTodo(todo.id,editedTodo)
        dialogHandle()
    }
  return (
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={dialogHandle}
        aria-describedby="alert-dialog-slide-description"
        fullWidth
      >
        <DialogTitle>{"Editando Tarefa"}</DialogTitle>
        <DialogContent>
          <TextField defaultValue={todo.text} fullWidth onChange={(e) => setEditedTodo(e.target.value)}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={dialogHandle}>Cancelar</Button>
          <Button onClick={updateTodo}>Ok</Button>
        </DialogActions>
      </Dialog>
  );
}
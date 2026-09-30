import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { useContext, useState } from "react";
import { TodoActionsContext } from "../contexts/TodoActionsContext";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

export default function ToDo({ todo }) {
  const [achieveFunction, deleteFunction, updateTodo] = useContext(TodoActionsContext);
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const [openUpdateModal, setOpenUpdateModal] = useState(false)

  const deleteModal = () => {
    setOpenDeleteModal((isOpen) => !isOpen)
  }

  const updateModal = () => {
    setOpenUpdateModal((isOpen) => !isOpen)
  }

  const [inputValues, setInputValues] = useState({ title: todo.title, description: todo.description })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValues((current)=>({...current, [name]: value}))
  }

  const submitUpdatedInputs = (e) => {
    e.preventDefault()
    updateTodo({ id: todo.id, title: inputValues.title, description: inputValues.description })
    updateModal()
  }

  return (
    <Card
      style={{ width: "500px", backgroundColor: "#283593", color: "white", height: "100px", display: "flex", justifyContent: "center"}}
    >
      <Grid container spacing={2}  style={{display: "flex", alignItems: "center", width: "100%"}}>
        <Grid size={8}>
          <CardContent style={{padding: "10px"}}>
            <Dialog
              style={{direction: "rtl"}}
              open={openDeleteModal}
              keepMounted
              aria-describedby="alert-dialog-slide-description"
              role="alertdialog"
          >
            <DialogTitle>هل أنت متأكد من أنك تريد حذف المهمة؟</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={deleteModal}>إلغاء</Button>
              <Button onClick={() => deleteFunction(todo.id)}>
                تأكيد
              </Button>
            </DialogActions>
            </Dialog>
            <Dialog
              style={{direction: "rtl"}}
            open={openUpdateModal}
            keepMounted
            aria-describedby="alert-dialog-slide-description"
            role="alertdialog"
          >
            <DialogTitle>تعديل المهمة</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                </DialogContentText>
                <form onSubmit={ submitUpdatedInputs } id="subscription-form">
                  <TextField
                  autoFocus
                  required
                  margin="dense"
                  id="title"
                  name="title"
                  label="عنوان المهمة"
                  type="text"
                  fullWidth
                  variant="standard"
                  value={inputValues.title}
                  onChange={handleChange}
                  />
                <TextField
                  autoFocus
                  required
                  margin="dense"
                  id="description"
                  name="description"
                  label="وصف المهمة"
                  type="text"
                  fullWidth
                  variant="standard"
                  value={inputValues.description}
                  onChange={handleChange}
                />
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={updateModal}>إلغاء</Button>
              <Button type="submit" form="subscription-form">
                تعديل
              </Button>
            </DialogActions>
          </Dialog>
            <Typography style={{  textAlign: "right", textDecoration: todo.isComplete? "line-through": null }} variant="h6">
                {todo.title}
            </Typography>
            <Typography variant="h6">
                {todo.description}     
            </Typography>
          </CardContent>
        </Grid>
        <Grid size={4}>
            <CardActions style={{display: "flex", justifyContent: "space-between"}}>
                      <IconButton style={{ backgroundColor:  todo.isComplete ? "green" : "white", width: "35px", height: "35px", border: "solid 2px green" }} onClick={() => { achieveFunction(todo.id) }} >
                    <CheckRoundedIcon style={{color: todo.isComplete? "white":"green"}}/>
                </IconButton>
                <IconButton style={{backgroundColor: "white", width: "35px", height: "35px", border: "solid 2px blue", marginLeft: "0px"}} onClick={updateModal}>
                    <EditRoundedIcon style={{color: "blue", fontSize: "25px"}}/>
                </IconButton>
                <IconButton style={{backgroundColor: "white", width: "35px", height: "35px", border: "solid 2px red"}}  onClick={ deleteModal }>
                    <DeleteRoundedIcon style={{color: "red", fontSize: "25px"}}/>
                </IconButton>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
}

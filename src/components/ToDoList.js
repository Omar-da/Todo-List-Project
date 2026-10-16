import { Button, TextField } from "@mui/material";
import ToDo from "./ToDo";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

export default function ToDoList({todos, updateFunction, deleteFunction}) {
    const [isDeleteModalOpened, setIsDeleteModalOpened] = useState(false);
    const [isUpdateModalOpened, setIsUpdateModalOpened] = useState(false);
    const [inputValues, setInputValues] = useState({title: "", description: ""});
    const [todoInModal, setTodoInModal] = useState(null)

    const openDeleteModal = (todo) => {
        setTodoInModal(todo)
        setIsDeleteModalOpened(true);
    };

    const closeDeleteModal = () => {
        setIsDeleteModalOpened(false)
    }

    const submitDeleteModal = () => {
        deleteFunction(todoInModal.id)
        closeDeleteModal()
    }

    const openUpdateModal = (todo) => {
        setTodoInModal(todo)
        setInputValues({title: todo.title, description: todo.description})
        setIsUpdateModalOpened(true);
    };

    const closeUpdateModal = () => {
        setIsUpdateModalOpened(false)
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputValues((current) => ({ ...current, [name]: value }));
    };

    const submitUpdatedInputs = (e) => {
        e.preventDefault();
        updateFunction({
            id: todoInModal.id,
            title: inputValues.title,
            description: inputValues.description,
        });
        closeUpdateModal()
    };
    
    const todosList = todos.map((todo) => {
        return <ToDo openDeleteModalFunction={openDeleteModal} openUpdateModalFunction={openUpdateModal} key={todo.id} todo={ todo } />
    })

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Dialog
              style={{ direction: "rtl" }}
              open={isDeleteModalOpened}
              keepMounted
              aria-describedby="alert-dialog-slide-description"
              role="alertdialog"
            >
              <DialogTitle>هل أنت متأكد من أنك تريد حذف المهمة؟</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={closeDeleteModal}>
                  إلغاء
                </Button>
                <Button onClick={submitDeleteModal}>تأكيد</Button>
              </DialogActions>
            </Dialog>
            <Dialog
              style={{ direction: "rtl" }}
              open={isUpdateModalOpened}
              keepMounted
              aria-describedby="alert-dialog-slide-description"
              role="alertdialog"
            >
              <DialogTitle>تعديل المهمة</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
                <form onSubmit={submitUpdatedInputs} id="subscription-form">
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
                <Button onClick={closeUpdateModal}>إلغاء</Button>
                <Button type="submit" form="subscription-form">
                  تعديل
                </Button>
              </DialogActions>
            </Dialog>
            {todosList}
        </div>
    );
}
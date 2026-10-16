import { Card, CardActions, CardContent, Divider, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import ToDoList from "./ToDoList";
import InputSection from "./InputSection";
import { useMemo, useReducer, useState } from "react";
import { TodoActionsContext } from "../contexts/TodoActionsContext";
import { useToast } from "../contexts/ToastContext";
import TodosReducer from "../reducers/TodosReducer";


export default function ToDoBox() {
  // const [todos, setTodos] = useState(() => {
  //   const localStorageTodos = JSON.parse(localStorage.getItem("todos"))
  //   if(localStorageTodos)
  //     return localStorageTodos
  //   return []
  // })

  const [todos, todosDispatch] = useReducer(
    TodosReducer,
    undefined,
    () => {
    const localStorageTodos = JSON.parse(localStorage.getItem("todos"))
    if(localStorageTodos)
      return localStorageTodos
    return []
  }
  );
  const [filter, setFilter] = useState("all")
  const createToast = useToast()

  function addTask(todo) {
    todosDispatch({ type: "add", payload: todo})
    createToast("تم إضافة مهمة جديدة")
  }
  
  const achieveTodo = (id) => {
    todosDispatch({type: "achieve", payload: id})
    createToast("تم تعديل حالة المهمة")
  };

  const deleteTodo = (id) => {
    todosDispatch({type: "delete", payload: id})
    createToast("تم حذف المهمة")
  }

  const updateTodo = (updatedValues) => {
    todosDispatch({type: "update", payload: updatedValues})
    createToast("تم تعديل المهمة")
  }

  const handleFilter = (e) => {
    const newFilter = e.target.name
    setFilter(newFilter)
  }

  const achieveTodos = useMemo(() => {
    return todos.filter((todo) => todo.isComplete)
  }, [todos]),
    notAchievedTodos = useMemo(() => {
      return todos.filter((todo) => !todo.isComplete) 
  }, [todos])

  let filteredTodos = []
  switch (filter) {
    case "achieved":
      filteredTodos = achieveTodos
      break;
    case "notAchieved":
      filteredTodos = notAchievedTodos
      break;
    default:
      filteredTodos = todos
  }

  return (
    <Card style={{maxHeight: "90vh", overflow: "scroll", scrollbarWidth: "none"}}>
      <CardContent style={{display: "flex", flexDirection:"column", gap: "30px", alignItems: "center"}}>
        <Typography variant="h2">مهامي</Typography>
        <Divider style={{width: "100%"}}/>
        <ToggleButtonGroup value={filter} color={"primary"} exclusive aria-label="text alignment" style={{ display: "flex", justifyContent: "center", direction: "ltr"}}>
            <ToggleButton name="notAchieved" variant="outlined" value="notAchieved" aria-label="left aligned" onClick={handleFilter}>غير منجز</ToggleButton>
            <ToggleButton name="achieved" variant="outlined" value="achieved" aria-label="left aligned" onClick={handleFilter}>منجز</ToggleButton>
            <ToggleButton name="all" variant="outlined" value="all" aria-label="left aligned" onClick={handleFilter}>الكل</ToggleButton>
          </ToggleButtonGroup>
        
          <TodoActionsContext.Provider value={[achieveTodo, deleteTodo, updateTodo]}>
          <ToDoList todos={filteredTodos} updateFunction={updateTodo} deleteFunction={deleteTodo} />
          </TodoActionsContext.Provider>
          
      </CardContent>
      <CardActions>
          <InputSection addFunction={ addTask } />
      </CardActions>
    </Card>
    )
}
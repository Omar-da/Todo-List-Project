import { Box, Button, Card, CardActions, CardContent, Divider, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import ToDo from "./ToDo";
import ToDoList from "./ToDoList";
import InputSection from "./InputSection";
import { useEffect, useState } from "react";
import { v4 as uuid } from 'uuid';
import { TodoActionsContext } from "../contexts/TodoActionsContext";


export default function ToDoBox() {
  const [todos, setTodos] = useState(([
    {
            id: uuid(),
            title: "دراسة كورس react",
            description: "task description",
            isComplete: false
        },
        {
            id: uuid(),
            title: "تصوير حلقة DLL",
            description: "task description",
            isComplete: false
        },
        {
            id: uuid(),
            title: "إكمال تطبيق المعلم",
            description: "task description",
            isComplete: false
          },
  ]))

  useEffect(() => {
    const localStorageTodos = JSON.parse(localStorage.getItem("todos"))
    if(localStorageTodos)
      setTodos(localStorageTodos)
  }, [])
  

  const [filter, setFilter] = useState("all")

  function addTask(todo) {
    setTodos([...todos, todo])
    localStorage.setItem('todos', JSON.stringify(todos))
  }
  
  const achieveTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
    );

    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos))

  };

  const deleteTodo = (id) => {
    const  updatedTodos = todos.filter((todo) =>
        todo.id !== id  
      )
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos))
  }

  const updateTodo = ({ id, title, description }) => {
    const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, title: title, description: description } : todo
      )
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos))
  }

  const handleFilter = (e) => {
    const newFilter = e.target.name
    setFilter(newFilter)
  }

  let filteredTodos = [...todos];
    switch (filter) {
      case "achieved":
        filteredTodos = todos.filter((todo) => todo.isComplete)
        break;
      case "notAchieved":
        filteredTodos = todos.filter((todo) => !todo.isComplete)
        break;
    }
    
    return (
    <Card style={{height: "90vh", overflow: "scroll", scrollbarWidth: "none"}}>
      <CardContent style={{display: "flex", flexDirection:"column", gap: "30px", alignItems: "center"}}>
        <Typography variant="h2">مهامي</Typography>
        <Divider style={{width: "100%"}}/>
        <ToggleButtonGroup value={filter} color={"primary"} exclusive aria-label="text alignment" style={{ display: "flex", justifyContent: "center", direction: "ltr"}}>
            <ToggleButton name="notAchieved" variant="outlined" value="notAchieved" aria-label="left aligned" onClick={handleFilter}>غير منجز</ToggleButton>
            <ToggleButton name="achieved" variant="outlined" value="achieved" aria-label="left aligned" onClick={handleFilter}>منجز</ToggleButton>
            <ToggleButton name="all" variant="outlined" value="all" aria-label="left aligned" onClick={handleFilter}>الكل</ToggleButton>
          </ToggleButtonGroup>
        
          <TodoActionsContext.Provider value={[achieveTodo, deleteTodo, updateTodo]}>
            <ToDoList todos={filteredTodos} />
          </TodoActionsContext.Provider>
          
      </CardContent>
      <CardActions>
          <InputSection addFunction={ addTask } />
      </CardActions>
    </Card>
    )
}
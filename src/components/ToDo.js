import {
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { useContext } from "react";
import { TodoActionsContext } from "../contexts/TodoActionsContext";

export default function ToDo({ todo, openDeleteModalFunction, openUpdateModalFunction }) {
  const [achieveFunction] = useContext(TodoActionsContext,);

  return (
    <Card
      style={{
        width: "500px",
        backgroundColor: "#283593",
        color: "white",
        minHeight: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        spacing={2}
        style={{ display: "flex", alignItems: "center", width: "100%" }}
      >
        <Grid size={8}>
          <CardContent style={{ padding: "10px" }}>
            <Typography
              style={{
                textAlign: "right",
                textDecoration: todo.isComplete ? "line-through" : null,
              }}
              variant="h6"
            >
              {todo.title}
            </Typography>
            <Typography variant="h6">{todo.description}</Typography>
          </CardContent>
        </Grid>
        <Grid size={4}>
          <CardActions
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <IconButton
              style={{
                backgroundColor: todo.isComplete ? "green" : "white",
                width: "35px",
                height: "35px",
                border: "solid 2px green",
              }}
              onClick={() => {
                achieveFunction(todo.id);
              }}
            >
              <CheckRoundedIcon
                style={{ color: todo.isComplete ? "white" : "green" }}
              />
            </IconButton>
            <IconButton
              style={{
                backgroundColor: "white",
                width: "35px",
                height: "35px",
                border: "solid 2px blue",
                marginLeft: "0px",
              }}
              onClick={() => openUpdateModalFunction(todo)}
            >
              <EditRoundedIcon style={{ color: "blue", fontSize: "25px" }} />
            </IconButton>
            <IconButton
              style={{
                backgroundColor: "white",
                width: "35px",
                height: "35px",
                border: "solid 2px red",
              }}
              onClick={() => openDeleteModalFunction(todo)}
            >
              <DeleteRoundedIcon style={{ color: "red", fontSize: "25px" }} />
            </IconButton>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
}

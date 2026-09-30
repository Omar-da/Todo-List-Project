// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
// import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Container from '@mui/material/Container';
import ToDoBox from './ToDoBox';

export default function MainContainer() {
  return (
    <Container maxWidth="sm">
      <ToDoBox/>
    </Container>
  );
}
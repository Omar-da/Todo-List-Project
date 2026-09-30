import { Button, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

export default function InputSection({ addFunction }) {
    const [input, setInput] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const addTask = () => {
        const todo = {
            id: uuid(),
            title: input,
            description: "",
            isComplete: false
        }
        addFunction(todo)
        setInput("")
    }
    return (
        <>
            <Grid container spacing={2} style={{width: "100%", display: "flex", alignItems: "center"}}>
                <Grid size={8}>
                    <TextField id="outlined-basic" label="مهمة جديدة" variant="outlined" style={{width: "100%"}} value={input} onChange={handleChange}/>
                </Grid>
                <Grid size={4}>
                    <Button onClick={addTask} variant="contained" style={{width: "100%", padding: "10px"}} disabled={input.length == 0} color="primary">إضافة</Button>
                </Grid>
            </Grid>
        </>
    )
}
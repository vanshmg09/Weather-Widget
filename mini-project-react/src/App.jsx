import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';
// import './App.css'

function App() {
let handleClick = () => {
  console.log("button was clicked")
}

  return (
    <>
      <h1>Material UI Demo</h1>
      <Button variant="contained" onClick={handleClick} startIcon={<DeleteIcon />}>Delete</Button>
      <Alert severity="error">Delete option is given</Alert>

    </>
  )
}

export default App

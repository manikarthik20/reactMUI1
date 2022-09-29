import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Add from "./componets/Add";
import Feed from "./componets/Feed";
import Navbar from "./componets/Navbar";
import Rightbar from "./componets/Rightbar";
import Sidebar from "./componets/Sidebar";


function App() {

  const [mode,setMode] = useState("light");

 const darkTheme = createTheme({
  palette:{
    mode:mode
  }
 })

  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar setMode={setMode} mode={mode}/>
        <Feed />
        <Rightbar />
      </Stack>
      <Add/>
    </Box>
    </ThemeProvider>
  );
}

export default App;





// import { Button, styled, Typography } from "@mui/material";

// import { Add, Settings } from '@mui/icons-material';

// const BlueButton = styled(Button)({
//   backgroundColor: "skyblue",
//   color: "#888",
//   margin: 5,
//   "&:hover": {
//     backgroundColor: "lightblue"
//   }
//   ,
//   "&:disabled": {
//     backgroundColor: "gray",
//     color: "white"
//   }
// })


{/* <Button variant="text">Text</Button>
      <Button startIcon={<Settings />} color="secondary" size="small" variant="contained">Settings</Button>
      <Button startIcon={<Add />} color="success" size="small" variant="contained">Add new</Button>
      <Button variant="outlined" disabled>Outlined</Button>
      <Typography variant="h1" component="p">
        It uses H1 Style But It's P tag
      </Typography>

      <BlueButton>My FOreing Key</BlueButton> */}
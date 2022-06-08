import { BrowserRouter as Router,Link, Route, Routes } from 'react-router-dom';
import ListSmartphones from './Components/Smartphone/ListSmartphones';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AjoutSmartphone from './Components/Smartphone/AjouterSmartphone'; 
import EditSmartphone from './Components/Smartphone/EditSmartphone';
import Login from './Authentification/login'; 
import ListCards from './Components/Client/ListCards'; 
import { CartProvider } from "react-use-cart"; 
import CartProduct from './Components/Client/CartProduct'; 
import Registration from './Components/Client/Registration';
import LoginClient from './Components/Client/LoginClient'; 
import ListCommandes from './Components/Commandes/ListCommandes';
import Dashboard from './Components/Admin/Dashboard'; 


function App() {
return (
<>
<CartProvider>
 <Router>
 <Box sx={{ flexGrow: 1 }}>
 <AppBar position="static">
 <Toolbar>
 <IconButton
 size="large"
 edge="start"
 color="inherit"
 aria-label="menu"
 sx={{ mr: 2 }}
 >
 </IconButton>
 <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
 BoujaShop
 </Typography>
<Link to="/"><Button color="error">Liste des Smartphones</Button></Link>

 </Toolbar>
 </AppBar>
 </Box>
 <Routes>
 <Route exact path="/smartphone" element={<ListSmartphones/>}></Route>
 <Route path="/addSmartphones" element={<AjoutSmartphone/>}></Route>
 <Route path="/editSmartphones/:_id" element={<EditSmartphone/>}></Route>
 <Route path="/admin" element={<Login/>}></Route>
 <Route path="/" element={<ListCards/>}></Route>
 <Route path="/cart" element={<CartProduct/>}></Route>
 <Route path="/register" element={<Registration/>}></Route>
 <Route path="/loginclient" element={<LoginClient/>}></Route>
 <Route path="/listcommandes" element={<ListCommandes/>}></Route>
<Route path="/dashboard" element={<Dashboard/>}></Route>
 </Routes>
 </Router>
 </CartProvider>
</>
 );
}
export default App; 
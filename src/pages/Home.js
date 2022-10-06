import React from 'react';
import ReactDOM from 'react-dom';
import Homebar from "../components/Homebar.js";
import Logo from "../components/Logo.js";
import Box from '@material-ui/core/Box';


const Home = () => {
  return (

    //<div>
    <div style={{ marginLeft: '40%', marginTop: '60px', width: '30%' }}>
    <Box color="white" bgcolor="maroon" p={1}>
      Homebar
    </Box>
      <Logo />
    </div>
  );

}

export default Home;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import phpLogo from '/php.svg'
import viteLogo from '/vite.svg'
import daniel from '/Daniel_Nunes.jpg'
import * as React from 'react';
import PropTypes from 'prop-types';
import './App.css'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import backgroundImage from '/pexels-markus-spiske-330771.jpg';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (

    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function App() {
  // const [count, setCount] = useState(0)
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {
        <Box sx={{ width: '100%', position: 'fixed', top: '0' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Home" {...a11yProps(0)} />
              <Tab label="Formação" {...a11yProps(1)} />
              <Tab label="Tecnologias" {...a11yProps(2)} />
              <Tab label="Experiência" {...a11yProps(3)} />
              <Tab label="Sobre" {...a11yProps(4)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <section>
              <div className="background-image" style={{
                backgroundImage: `url(${backgroundImage})`

              }}>
              </div>
              <h1 className='title'>Daniel Victor</h1>
              <h2 className='title2 mt-4'>Software Denveloper</h2>
              <h3 className='contato'>Contato</h3>
              <div className='title3'>
                <a href="https://www.linkedin.com/in/daniel-victor-nunes-dos-santos-a11024173/" target="_blank" rel="noopener noreferrer" > <LinkedInIcon color="primary" className='tamanhoIcon' /></a>
                <a href="#" target="_blank" rel="noopener noreferrer" > <GitHubIcon color="" className='tamanhoIcon' /></a>
                <a href="#" target="_blank" rel="noopener noreferrer" > <InstagramIcon color="" className='tamanhoIcon ' /></a>
              </div>
            </section >

          </TabPanel >
          <TabPanel value={value} index={1}>
            <div className='formacao'>
              <ul>
                <li>Tecnico em informatica para web- IFNMG (formado em 2016)</li>
                <li>Engenharia de controle e automação- CEFET-MG (Previsão de formação 2024)</li>
              </ul>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className='formacao' style={{ textAlign: 'center' }}>
              <div>
                <h4>PHP</h4>
                <p>Conhecimento pleno em PHP, incluindo a biblioteca Codignaiter</p>
                <img src={phpLogo} className="logo react" />
              </div>
              <div>
                <h4>JavaScript</h4>
                <p>Conhecimento intermediario em JS, incluindo uso de Jquery</p>
              </div>
              <div>
                <h4>React</h4>
                <p>Estou dando meus primeiros passos com a biblioteca React</p>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={4}>
            <div className='formacao' style={{ textAlign: 'center' }}>
              <img src={daniel} className="logoPerfil react" />
              <p>Meu nome é Daniel VIctor, sou um apaixonado por programação</p>
            </div>

          </TabPanel>
        </Box >
      }
    </>
  )
}

export default App

import React from "react";
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


const GameCreate =()=> {

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
return (
 
  <div>
 <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"><p> Tournament Name:</p>
    <p>
       <input
          type="text"
          style={{
            color: "black",
            background: "purple",
            width: "100%",
            borderBottomLeftRadius: "10px",
            borderTopRightRadius: "5px",
            paddingBottom: "5%",
            fontSize: "16px",
          }}
        />
     </p>
     <label className="date">
       <p>Select Date:</p>
       <p className="time"> Select Time:</p>
      </label>
    <label className="date">
        <p>
          {" "}
          <input
            type="date"
            style={{
              color: "black",
              background: "purple",
              width: "100%",
              borderBottomLeftRadius: "10px",
              borderTopRightRadius: "5px",
              paddingBottom: "5%",
              fontSize: "16px",
            }}
          />
        </p>
        <p className="time1">
          <input
            type="date"
            style={{
              color: "black",
              background: "purple",
              width: "100%",
              borderBottomLeftRadius: "10px",
              borderTopRightRadius: "5px",
              paddingBottom: "5%",
              fontSize: "16px",
            }}
          />
        </p>
      </label>
      About Tournament :
      <p>
        {" "}
        <input
          type="text"
          style={{
            color: "black",
            background: "purple",
            width: "100%",
            borderBottomLeftRadius: "10px",
            borderTopRightRadius: "5px",
            paddingBottom: "5%",
            fontSize: "16px",
          }}
        />
      </p>
      <label>
        Header Banner Picture:
        <p>
          {" "}
          <input type="image" name="name" />
        </p>
      </label>
  </TabPanel>
        <TabPanel value="2">item2</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>

      
  </div>
);
        }  


export default  GameCreate;

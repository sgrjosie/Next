import * as React from "react";
import Head from "next/head";
import type { NextPage } from "next";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Layout from "../../components/layout";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
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
        // <Box sx={{ p: 3 }}>
        //   <Typography>{children}</Typography>
        // </Box>
        <div>{children}</div>
      )}
    </div>
  );
}

function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const Text: NextPage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const data = {
    Portland: '78/50',
    Dublin: '88/52',
    Lima: '58/40'
  } 
  Object.defineProperty(data, 'Lima', {
    value: '2222'
  })
  const st = Object.entries(data).map(([city, temp]) => {
   return`City: ${city.padEnd(16)} Weather: ${temp}`
  })
  return (
    <Layout>
      <Head>
        <title>Josie</title>
      </Head>
      <Box sx={{ width: "100%" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Bike Ongoing" {...a11yProps(1)} />
          <Tab label="Plan" {...a11yProps(2)} />
          <Tab label="Finished" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {st}
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item four
      </TabPanel>
    </Layout>
  );
};
export default Text;

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./pr.css"
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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
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

export default function Prt1_1(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function handleItem(eve) {
    eve.target.parentElement.classList.toggle("active")
  }

  return (
    <li className="listName">
      <div className="item-main-content" >
        <div className="pos-abs" onClick={handleItem}></div>
        <div className="nr-item">
          {props.regularNr}
        </div>
        <p>{props.regularName}</p>
        <div className="menu"></div>
      </div>
      <div className="item-info-element">
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs className='item-tabs-crt' textColor="#fff" value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label={props.tab1} {...a11yProps(0)} sx={{ width: "30%", fontSize: "clamp(0.875rem, 0.208rem + 3.33vw, 1.25rem)" }} />
              <Tab label={props.tab2} {...a11yProps(1)} sx={{ width: "30%" }} />
              <Tab label={props.tab3} {...a11yProps(2)} sx={{ width: "30%" }} />
            </Tabs>
          </Box>
          <TabPanel style={{ textAlign: "start" }} value={value} index={0}>
            <span className="item-paragraph">
              {props.Description}
              <br />
              {props.Description1}
              <br />
              {props.Description2}
              <br />
              {props.Description3}
              <br />
              {props.Description4}
              <br />
              {props.Description5}
              <br />
              {props.Description6}
              <br />
              {props.Description7}
              <br />
              {props.Description8}
            </span>
          </TabPanel>
          <TabPanel style={{ textAlign: "start" }} value={value} index={1}>
            <span className="item-paragraph">
              {props.voiseDescription}
              <br />
              {props.voiseDescription1}
              <br />
              {props.voiseDescription2}
              <br />
              {props.voiseDescription3}
              <br />
              {props.voiseDescription4}
            </span>
          </TabPanel>
          <TabPanel style={{ textAlign: "start", fontSize: "clamp(0.313rem, -0.473rem + 3.93vw, 1rem)" }} value={value} index={2}>
            <span className="item-paragraph">
              {props.chatDescription}
              <br />
              {props.chatDescription1}
              <br />
              {props.chatDescription2}
              <br />
              {props.chatDescription3}
              <br />
              {props.chatDescription4}
              <br />
              {props.chatDescription5}
              <br />
              {props.chatDescription6}
              <br />
              {props.chatDescription7}
              <br />
              {props.chatDescription8}
            </span>
          </TabPanel>
        </Box>
      </div>
    </li >

  );
}
Prt1_1.defaultProps = {
  tab1: "Подробное",
  tab2: "Войс примеры",
  tab3: "Чат примеры"
}
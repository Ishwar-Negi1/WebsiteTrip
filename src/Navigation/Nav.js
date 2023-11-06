import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import ExploreIcon from '@mui/icons-material/Explore';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import SearchIcon from '@mui/icons-material/Search';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import Button from '@mui/material/Button';
import "./Nav.css";

const Nav = ({ handleInputChange, query }) => {
  return (
    <>
    <div className="middleSection">
    <h1>Tours In London</h1>
  <nav>
    <div className="middle2">
      <div className="nav-container">
        <span style={{fontWeight:'bold'}}><span><PlaceOutlinedIcon/></span>Location</span>
        <br/>
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="where are you going."
        />
      </div>
      <div className="checkin">
      <span style={{fontWeight:'bold'}}><EventAvailableIcon/>Check in - Check out</span>
      <br/>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['SingleInputDateRangeField']}>
        <DateRangePicker slots={{ field: SingleInputDateRangeField }} />
      </DemoContainer>
    </LocalizationProvider>
      </div>
      <div className="tourtype">
      <span style={{fontWeight:'bold'}}><ExploreIcon/>Tour Type</span>
      <br/>
      <input type="text" placeholder="2adults,1children,1 room"/>
      </div>
      <Button style={{padding:'0px 32px'}}variant="contained" className="searchbtn"><SearchIcon/>Search</Button>
    </div>
  </nav>
    </div>
    </>
  );
};

export default Nav;

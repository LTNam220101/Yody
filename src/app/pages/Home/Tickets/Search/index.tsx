/**
 *
 * Search
 *
 */
import React, { memo } from 'react';
import { makeStyles } from '@mui/styles';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

interface Props {}

const useStyles: any = makeStyles({
  root: {
    backgroundColor: '#fff',
    width: '100%',
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '18px',
     // height: '50px',
    // margin: '3px 0px 20px 0px',
    // borderRadius: '9px',
    // alignItems: 'center',
    // display: 'flex',
    // fontSize: '18px',
    // fontWeight: 500,
  },
  main: {
    display: 'flex',
    justifyContent: 'space-around',
    // height: '300vh',
    // width: '100%',
    // backgroundColor: '#fff',
    // borderRadius: '9px',
  },
  button: {
    margin: 'auto',
    paddingBottom: '24px',
    display: 'flex',
    width: '460px',
    justifyContent: 'space-between',
    '& button': {
      width: '220px',
      padding: '10px 0px',
    },
  },
});

export const Search = memo((props: Props) => {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <Box className={classes.root}>
      <Box
        sx={{
          fontSize: '18px',
          fontWeight: 600,
          marginTop: '18px',
        }}
      >
        Thông tin tìm kiếm
      </Box>
      <Box className={classes.main}>
        <Box>
          <FormControl fullWidth size="small" className="form-control">
            <InputLabel id="demo-simple-select-label1">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label1"
              className="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth size="small" className="form-control">
            <InputLabel id="demo-simple-select-label1">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label1"
              className="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth size="small" className="form-control">
            <InputLabel id="demo-simple-select-label1">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label1"
              className="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth size="small" className="form-control">
            <InputLabel id="demo-simple-select-label1">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label1"
              className="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <FormControl fullWidth size="small" className="form-control">
            <InputLabel id="demo-simple-select-label1">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label1"
              className="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth size="small" className="form-control">
            <InputLabel id="demo-simple-select-label1">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label1"
              className="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth size="small" className="form-control">
            <InputLabel id="demo-simple-select-label1">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label1"
              className="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box className={classes.button}>
        <button className="button">Tìm kiếm</button>
        <button className="button">Xuất Excel</button>
      </Box>
    </Box>
  );
});

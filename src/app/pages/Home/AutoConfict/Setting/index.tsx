/**
 *
 * Setting
 *
 */
import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import React, { memo, useState } from 'react';
import './styles.css';
interface Props {}

export const Setting = memo((props: Props) => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <Box
      sx={{
        width: '400px',
        padding: '35px 36px 20px 36px',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <Box sx={{ flex: 1 }}>
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
          <InputLabel id="demo-simple-select-label2">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label2"
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
          <InputLabel id="demo-simple-select-label3">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label3"
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
          <InputLabel id="demo-simple-select-label4">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label4"
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
          <InputLabel id="demo-simple-select-label5">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label5"
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
          <InputLabel id="demo-simple-select-label6">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label6"
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
          <InputLabel id="demo-simple-select-label7">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label7"
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

      <button className="button">Cập nhật</button>
    </Box>
  );
});

/**
 *
 * Content
 *
 */
import {
  Autocomplete,
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import React, { memo } from 'react';
import { makeStyles } from '@mui/styles';

interface Props {}

const useStyles: any = makeStyles({
  top: {
    backgroundColor: '#fff',
    width: '100%',
    height: '50px',
    marginBottom: '20px',
    borderRadius: '9px',
  },
  main: {
    height: '300vh',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: '9px',
  },
  comment: {
    height: '300vh',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: '9px',
    margin: '20px 4px',
    border: '1px solid #B9B9B9',
  },
});

export const Content = memo((props: Props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginRight: '10px',
      }}
    >
      <Box className={classes.top}>Facebook</Box>
      <Box className={classes.main}>
        <Box>asdasdasdasd</Box>
        <Divider />
        <Box>169 lượt thích 169 bình luận 169 chia sẻ</Box>
        <Box>
          <Box className={classes.comment}>
            <Box>asdasdasdasd</Box>
            <Divider />
            <Box>169 lượt thích</Box>
            <TextField
              sx={{ marginTop: '20px' }}
              fullWidth
              multiline
              placeholder="Nội dung câu trả lời"
              value={value}
              onChange={handleChange}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
});

/**
 *
 * ListTicket
 *
 */
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SearchButton from 'app/components/SearchButton';
import BasicTable from 'app/components/Table';
import React, { memo } from 'react';

interface Props {}

const useStyles: any = makeStyles({
  root: {
    backgroundColor: '#DBEEFF',
    width: '100%',
    paddingLeft: '20px',
    paddingRight: '20px',
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
    display: 'flex',
    width: '460px',
    justifyContent: 'space-between',
    '& button': {
      width: '220px',
      padding: '10px 0px',
    },
  },
});

export const ListTicket = memo((props: Props) => {
  const classes = useStyles();
  
  return (
    <Box className={classes.root}>
      <Box
        sx={{
          fontSize: '18px',
          fontWeight: 600,
          margin: '18px 0px 8px 0px',
        }}
      >
        Danh sách ticket
      </Box>

      <SearchButton />
      <BasicTable />
    </Box>
  );
});

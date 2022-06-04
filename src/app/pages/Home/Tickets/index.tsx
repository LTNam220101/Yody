/**
 *
 * Tickets
 *
 */
import { Box } from '@mui/material';
import React, { memo } from 'react';
import { ListTicket } from './ListTicket';
import { Search } from './Search';
import { makeStyles } from '@mui/styles';

interface Props {}

const useStyles: any = makeStyles({
  top: {
    // backgroundColor: '#fff',
    width: '100%',
    height: '50px',
    // margin: '3px 0px 20px 0px',
    // borderRadius: '9px',
    alignItems: 'center',
    display: 'flex',
    fontSize: '18px',
    fontWeight: 600,
    marginLeft: '20px',
  },
  main: {
    height: '300vh',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: '9px',
  },
  comment: {
    height: '300vh',
    // width: '100%',
    backgroundColor: '#fff',
    borderRadius: '9px',
    margin: '20px 4px',
    border: '1px solid #B9B9B9',
  },
});

export const Tickets = memo((props: Props) => {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.top}>Tickets</Box>
      <Search />
      <ListTicket />
    </Box>
  );
});

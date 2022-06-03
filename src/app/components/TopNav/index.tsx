import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';

const useStyles: any = makeStyles({
  root: {
    height: '52px',
    display: 'flex',
  },
  wrap: {},
});

interface Props {}

const TopNav = (props: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.wrap}></Box>
    </div>
  );
};

export default TopNav;

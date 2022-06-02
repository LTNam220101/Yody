/**
 *
 * Navbar
 *
 */
import React, { memo } from 'react';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';
import { Logo2 } from '../Logo2';

interface Props {}

const useStyles: any = makeStyles({
  root: {
    backgroundColor: '#FFFFFF',
    width: '52px',
    height: '100vh',
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  // logo: { textAlign: 'center' },
  nav: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export const Navbar = memo((props: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.logo}>
        <Logo2 />
      </Box>
      <Box className={classes.nav}>
        <Box className={classes.button}>Button</Box>
        <Box className={classes.setting}>Setting</Box>
      </Box>
    </div>
  );
});

/**
 *
 * Home
 *
 */
import { Navbar } from 'app/components/Navbar';
import React, { memo, useEffect } from 'react';
import { Grid, useMediaQuery } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { AutoConfict } from './AutoConfict';
import { Routes, Route } from 'react-router-dom';

interface Props {}

const useStyles: any = makeStyles({
  root: {
    backgroundColor: '#FFF2F2',
    width: '100%',
  },
  main: {
    padding: '0 40px 40px',
  },
});

export const Home = memo((props: Props) => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <div>
      <Grid className={classes.root} container>
        <Navbar />
        <Routes>
          {/* <Route path="" element={<Navigate to="home" />} /> */}
          <Route path="" element={<AutoConfict />} />
          {/* <Route path=":search" element={<Search />} /> */}
        </Routes>
      </Grid>
    </div>
  );
});

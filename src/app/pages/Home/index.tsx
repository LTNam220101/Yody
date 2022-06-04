/**
 *
 * Home
 *
 */
import { Navbar } from 'app/components/Navbar';
import React, { memo, useEffect } from 'react';
import { Grid, useMediaQuery, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { AutoConfict } from './AutoConfict';
import { Routes, Route } from 'react-router-dom';
import { Tickets } from './Tickets';

interface Props {}

const useStyles: any = makeStyles({
  root: {
    backgroundColor: '#DBEEFF',
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
        <Box sx={{ marginLeft: '52px', width: '100%' }}>
          <Routes>
            {/* <Route path="" element={<Navigate to="home" />} /> */}
            <Route path="" element={<Tickets />} />
            <Route path="detail" element={<AutoConfict />} />
            {/* <Route path=":search" element={<Search />} /> */}
          </Routes>
        </Box>
      </Grid>
    </div>
  );
});

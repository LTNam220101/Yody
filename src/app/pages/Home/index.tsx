/**
 *
 * Home
 *
 */
import { makeStyles } from '@mui/styles';
import React, { memo, useEffect } from 'react';

interface Props {}

const useStyles: any = makeStyles({
  root: {
    backgroundColor: '#FFF2F2',
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

  return <div className={classes.root}>Home Page</div>;
});

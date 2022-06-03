/**
 *
 * Layout
 *
 */
import { makeStyles } from '@mui/styles';
import { Sidebar } from 'app/components/Sidebar';
import TopNav from 'app/components/TopNav';
import React, { memo, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

interface Props {}

const useStyles: any = makeStyles({
  root: {
    backgroundColor: '#FFF2F2',
  },
  main: {
    minHeight: '100vh',
    paddingLeft: '52px',
  },
  mainContent: {
    padding: '24px',
  },
});

export const Layout = memo((props: Props) => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <div className={classes.root}>
      <Sidebar />
      <div className={classes.main}>
        <TopNav />
        <div className={classes.mainContent}>
          <Outlet />
        </div>
      </div>
      {/* <Grid className={classes.root} container>
         <Sidebar />
         <Routes>
           <Route path="" element={<Navigate to="home" />} />
           <Route path="" element={<AutoConfict />} />
           <Route path=":search" element={<Search />} />
         </Routes>
       </Grid> */}
    </div>
  );
});

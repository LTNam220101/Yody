/**
 *
 * Navbar
 *
 */
import React, { memo, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, List, ListItem } from '@mui/material';
import { Logo2 } from '../Logo2';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SettingsIcon from '@mui/icons-material/Settings';

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
    borderRight: '1px solid #DBEEFF',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
  },
  // logo: { textAlign: 'center' },
  nav: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  button: {
    '& li': {
      backgroundColor: '#fff',
      borderRadius: '9px',
      justifyContent: 'center',
      alignContent: 'center',
      height: '40px',
      width: '40px',
      display: 'inline-grid',
      cursor: 'pointer',
      transition: 'all 0.5s',
    },
    '& li:hover': {
      backgroundColor: '#CCE8FF',
    },
    '& > li': {
      margin: '12px 0',
    },
  },
  active: {
    backgroundColor: '#006ECB !important',
    color: '#fff',
  },
});

export const Navbar = memo((props: Props) => {
  const classes = useStyles();
  const [isActive, setIsActive] = useState(1);

  return (
    <div className={classes.root}>
      <Box className={classes.logo}>
        <Logo2 />
      </Box>
      <Box className={classes.nav}>
        <List className={classes.button}>
          {nav.map(item => (
            <ListItem
              className={`${isActive === item.id ? classes.active : ''} `}
              onClick={() => setIsActive(item.id)}
            >
              {item.icon}
            </ListItem>
          ))}
        </List>
        <Box className={classes.setting}>
          <ListItem
          // className={`${isActive === item.id ? classes.active : ''} `}
          // onClick={() => setIsActive(item.id)}
          >
            <SettingsIcon />
          </ListItem>
        </Box>
      </Box>
    </div>
  );
});

const nav = [
  {
    id: 1,
    icon: <HomeOutlinedIcon sx={{ fontSize: 28 }} />,
  },
  {
    id: 2,
    icon: <PersonOutlinedIcon sx={{ fontSize: 28 }} />,
  },
  {
    id: 3,
    icon: <ForumOutlinedIcon sx={{ fontSize: 28 }} />,
  },
  {
    id: 4,
    icon: <BuildOutlinedIcon sx={{ fontSize: 28 }} />,
  },
  {
    id: 5,
    icon: <CalendarMonthOutlinedIcon sx={{ fontSize: 28 }} />,
  },
];

/**
 *
 * Navbar
 *
 */
import React, { memo, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, List, ListItem } from '@mui/material';
import { Logo2 } from '../Logo2';
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
  logo: { alignItems: 'center', height: '50px', display: 'flex' },
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
    '& svg': {
      stroke: '#fff',
    },
  },
});

export const Navbar = memo((props: Props) => {
  const classes = useStyles();
  const [isActive, setIsActive] = useState(1);

  return (
    <div className={classes.root}>
      <Box className={classes.logo}>
        <img
          src="https://bizweb.sapocdn.net/100/438/408/themes/863105/assets/logo.svg?1654240378846"
          style={{ width: '100%' }}
        />
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
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1E1E1E"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="feather feather-home"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    ),
  },
  {
    id: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1E1E1E"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="feather feather-user"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
  },
  {
    id: 3,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1E1E1E"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="feather feather-message-circle"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    ),
  },
  {
    id: 4,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1E1E1E"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="feather feather-tool"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    ),
  },
  {
    id: 5,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1E1E1E"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="feather feather-calendar"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
    ),
  },
];

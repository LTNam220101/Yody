/**
 *
 * Navbar
 *
 */
import AddCommentRoundedIcon from '@mui/icons-material/AddCommentRounded';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import { Box, IconButton, List, ListItemButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { memo } from 'react';
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
  setting: {
    marginTop: 'auto',
    marginBottom: '12px',
  },
});

const sideBarItems = [
  {
    title: 'Home',
    icon: <AddCommentRoundedIcon />,
  },
  {
    title: 'Home',
    icon: <AddCommentRoundedIcon />,
  },
  {
    title: 'Home',
    icon: <AddCommentRoundedIcon />,
  },
  {
    title: 'Home',
    icon: <AddCommentRoundedIcon />,
  },
  {
    title: 'Home',
    icon: <AddCommentRoundedIcon />,
  },
];

export const Sidebar = memo((props: Props) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <div className={classes.root}>
      <Box className={classes.logo}>
        <Logo2 />
      </Box>
      <Box>
        <List>
          {sideBarItems.map((item, index) => (
            <ListItemButton
              key={index}
              selected={selectedIndex === index}
              onClick={() => setSelectedIndex(index)}
            >
              {item.icon}
            </ListItemButton>
          ))}
        </List>
      </Box>
      <Box className={classes.setting}>
        <IconButton>
          <SettingsApplicationsIcon />
        </IconButton>
      </Box>
    </div>
  );
});

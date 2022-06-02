/**
 *
 * Login
 *
 */
import { Box, TextField, InputAdornment, Button } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import PasswordIcon from '@mui/icons-material/Password';
import { makeStyles } from '@mui/styles';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Logo } from './logo';

interface Props {}

const useStyles: any = makeStyles({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3D81BB',
  },
  div: {
    width: '300px',
    height: '400px',
    textAlign: 'center',
  },
  button: {
    color: '#2148C0',
    backgroundColor: '#fff',
    margin: '10px 0px',
    border: 'none',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.3)',
    borderRadius: '4px',
  },
  form: { display: 'flex', flexDirection: 'column' },
});

export function Login(props: Props) {
  const classes = useStyles();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.div}>
          <Logo />
          <Box className={classes.form}>
            <TextField
              label="User name"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Password"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PasswordIcon />
                  </InputAdornment>
                ),
              }}
            />
            <button className={classes.button}>Đăng nhập</button>
          </Box>
        </Box>
      </Box>
      {/*  {t(...messages.someThing())}  */}
    </>
  );
}

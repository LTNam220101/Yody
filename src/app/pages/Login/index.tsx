/**
 *
 * Login
 *
 */
import { Box, TextField, InputAdornment, Button } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import PasswordIcon from '@mui/icons-material/Password';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Logo } from '../../components/Logo';
import background from './dashboard.png';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface Props {}

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#fff',
  },
  '& label': {
    color: '#fff',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#fff',
    borderWidth: 2,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#fff',
      borderWidth: 2,
    },
    '&:hover fieldset': {
      borderColor: '#fff',
      borderWidth: 2,
    },
    '&.Mui-focused fieldset': {
      borderColor: '#fff',
      borderWidth: 2,
    },
  },
});

const useStyles: any = makeStyles({
  root: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3D81BB',
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    textColor: '#fff',
  },
  div: {
    width: '300px',
    height: '400px',
    textAlign: 'center',
  },
  form: { display: 'flex', flexDirection: 'column', marginTop: '60px' },
  text: {
    margin: '20px 0px 40px 0px !important',
  },
  button: {
    color: '#2148C0',
    backgroundColor: '#fff',
    padding: '15px 0px',
    margin: '10px 0px',
    border: 'none',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.3)',
    borderRadius: '4px',
    fontWeight: '600',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#F1F1F1',
    },
  },
});

export function Login(props: Props) {
  let navigate = useNavigate();
  const classes = useStyles();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <Box className={classes.root}>
        {/* <Background /> */}
        <Box className={classes.div}>
          <Logo />
          <Box className={classes.form}>
            <CssTextField
              {...register('name', { required: true })}
              helperText={errors.name ? 'Please enter your username' : ' '}
              error={errors.name ? true : false}
              required
              autoComplete="off"
              label="USERNAME"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <CssTextField
              {...register('password', { required: true })}
              helperText={errors.password ? 'Please enter your password' : ' '}
              error={errors.password ? true : false}
              required
              autoComplete="off"
              label="PASSWORD"
              variant="outlined"
              className={classes.text}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PasswordIcon />
                  </InputAdornment>
                ),
              }}
            />
            <button
              className={classes.button}
              onClick={handleSubmit(() => navigate('/'))}
            >
              LOGIN
            </button>
          </Box>
        </Box>
      </Box>
      {/*  {t(...messages.someThing())}  */}
    </>
  );
}

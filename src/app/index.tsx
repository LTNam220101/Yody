/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import { GlobalStyle } from '../styles/global-styles';

import { useTranslation } from 'react-i18next';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

const AuthRoute = (props: { type: string; children: any }) => {
  const { type, children } = props;
  const dataSignIn = true;

  if (type === 'PRIVATE' && !dataSignIn) {
    return <Navigate to="/login" />;
  }
  return children;
};

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Routes>
        <Route
          path="/"
          element={
            <AuthRoute type="PRIVATE">
              <Home />
            </AuthRoute>
          }
        />
        <Route
          path="/login"
          element={
            <AuthRoute type="GUEST">
              <Login />
            </AuthRoute>
          }
        />
        <Route
          path="*"
          element={
            <AuthRoute type="GUEST">
              <NotFound />
            </AuthRoute>
          }
        />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

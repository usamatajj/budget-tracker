'use client';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { inter } from '../layout';
import { Theme, createTheme } from '@mui/material';

const theme: Theme = createTheme({
  typography: {
    fontSize: 16,
    fontFamily: inter.style.fontFamily,
  },
});

const CustomThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default CustomThemeProvider;

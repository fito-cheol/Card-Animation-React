import React from 'react';

import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { merge } from 'ts-deepmerge';
import { createTheme, responsiveFontSizes, Theme } from '@mui/material/styles';

import { getDesignTokens, getThemedComponents } from '../src/theme/Theme';
import GlobalStyle from '../src/styles/global-styles';

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const mode = 'light';
let theme: Theme = createTheme(merge(getDesignTokens(mode), getThemedComponents(mode)));
theme = responsiveFontSizes(theme);

const customViewports = {
  GalaxyNote20Ultra: {
    name: 'Galaxy Note S20 Ultra',
    styles: {
      width: '412px',
      height: '883px',
    },
  },
  browser1024: {
    name: 'Browser 1024px',
    styles: {
      width: '1024px',
      height: '100%',
    },
  },
  browser768: {
    name: 'Browser 768px',
    styles: {
      width: '768px',
      height: '100%',
    },
  },
  browser500: {
    name: 'Browser 500px',
    styles: {
      width: '500px',
      height: '100%',
    },
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        ...customViewports,
        ...INITIAL_VIEWPORTS,
      },
      // defaultViewport: "GalaxyNote20Ultra",
    },
  },
};

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    </ThemeProvider>
  ),
];

export default preview;

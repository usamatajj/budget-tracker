import React, { ComponentType } from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

const withStyledComponents = (Component: ComponentType<any>) => {
  const sheet = new ServerStyleSheet();

  return (props: any) => {
    try {
      const html = renderToString(
        sheet.collectStyles(<Component {...props} />)
      );
      const styleTags = sheet.getStyleElement(); // or sheet.getStyleElement();
      return styleTags;
    } catch (error) {
      // handle error
      console.error(error);
    } finally {
      sheet.seal();
    }
  };
};
export default withStyledComponents;

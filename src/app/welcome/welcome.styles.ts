import { Button } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-height: 80vh;
`;

export const WelcomeBanner = styled.h1`
  text-align: center;
`;
export const WelcomeMessage = styled.p`
  text-align: center;
`;

export const OptionsButton = styled(Button)`
  width: 200px;
  height: 200px;
  font-size: 20px;
`;

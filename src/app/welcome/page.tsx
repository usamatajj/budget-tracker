'use client';
import Link from 'next/link';
import {
  Container,
  OptionsButton,
  WelcomeBanner,
  WelcomeMessage,
} from './welcome.styles';

export default function WelcomePage() {
  return (
    <>
      <WelcomeBanner>Welcome to Budget Tracker App</WelcomeBanner>
      <WelcomeMessage>Please click one of the below options</WelcomeMessage>
      <Container>
        <Link href="login">
          <OptionsButton variant="contained">Sign In</OptionsButton>
        </Link>
        <Link href="signup">
          <OptionsButton variant="contained">Sign Up</OptionsButton>
        </Link>
      </Container>
    </>
  );
}

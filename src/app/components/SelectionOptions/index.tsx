'use client';
import Link from 'next/link';
import { OptionsButton } from './SelectionOptions.styles';

const SelectionOptions = () => {
  return (
    <>
      <Link href="login">
        <OptionsButton variant="contained">Sign In</OptionsButton>
      </Link>
      <Link href="signup">
        <OptionsButton variant="contained">Sign Up</OptionsButton>
      </Link>
    </>
  );
};

export default SelectionOptions;

import './welcome.css';
import { Metadata } from 'next';
import SelectionOptions from '../components/SelectionOptions';

export const metadata: Metadata = {
  title: 'Welcome',
  description: 'Welcome to budget tracker',
};

function WelcomePage() {
  return (
    <>
      <h1 className="banner">Welcome to Budget Tracker App</h1>
      <p className="message">Please click one of the below options</p>
      <div className="container">
        <SelectionOptions />
      </div>
    </>
  );
}

export default WelcomePage;

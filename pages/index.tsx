import * as React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      
    </div>
  )
}

Home.getInitialProps = async ({ req }) => {
  return 1;
};

export default Home;

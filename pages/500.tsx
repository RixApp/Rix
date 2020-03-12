import * as React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';

const ErrorPage: NextPage = () => {
  return (
    <div>
      
    </div>
  )
}

ErrorPage.getInitialProps = async ({ req }) => {
  return 1;
};

export default ErrorPage;

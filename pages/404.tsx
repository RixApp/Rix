import * as React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';

const NotFoundPage: NextPage = () => {
  return (
    <div>
      
    </div>
  )
}

NotFoundPage.getInitialProps = async ({ req }) => {
  return 1;
};

export default NotFoundPage;

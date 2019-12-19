import * as React from 'react';
import Link from 'next/link';
// import Layout from '../components/Layout'
import { NextPage } from 'next'

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => {
  return (
    <h1>Hello world! - user agent: {userAgent}</h1>
  )
}

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

export default Home;

import Link from 'next/link';
import styled from 'styled-components';
import Page from '../components/Page';

export default () => (
  <Page>
    <Link href="/items">
      <a>Itdems</a>
    </Link>
    Welcome to next.js!
  </Page>
);

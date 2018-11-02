import React from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import Nav from './Nav';

Router.events.on('routeChangeStart', () => {
    console.log('sda');
    NProgress.start();
});

Router.events.on('routeChangeComplete', () => {
    console.log('sdafsdad');
    NProgress.done();
});

Router.events.on('routeChangeError', () => {
    NProgress.done();
});

const Header = () => (
    <header>
        Header
        <Nav />
    </header>
);

export default Header;

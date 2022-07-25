import React from 'react';
import Footer from './templates/Footer';
import Header from './templates/Header';

function Layout({children}: any) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;
// components/NetlifyIdentityWidget.js
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Script from 'next/script';

const NetlifyIdentityWidget = () => {
  useEffect(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.init();
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
  }, []);

  return (
    <>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
      
    </>
  );
};

export default NetlifyIdentityWidget;

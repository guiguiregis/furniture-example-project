/* eslint-disable @next/next/inline-script-id */
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

const Document = () => {
  return (
    <Html style={{ scrollBehavior: 'smooth' }}>
      <Head>
        <meta
          name="p:domain_verify"
          content="aa813161cb0ddd1f7b3199aa6dd8a558"
        />
        <meta
          name="google-site-verification"
          content="UeJqrNyV8JUFnOcyIziDukVnhdGb3qInOKMgGO3rOco"
        />
        <meta name="msvalidate.01" content="FD0808727893810B6EE56F655369E5E1" />
        <meta
          name="google-site-verification"
          content="ZyZx6yOhgC87386vlnIkTkQB-JIYf4QdxNJvlemxPaU"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <Script
          strategy="beforeInteractive"
          src="https://viewer.cylindo.com/v4/viewer.min.js"
        />
        {/* <Script
          id="marker"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.markerConfig = {
                project: '645d2fb7aa026eafebf7a140', 
                source: 'snippet'
              };
              !function(e,r,a){if(!e.__Marker){e.__Marker={};var t=[],n={__cs:t};["show","hide","isVisible","capture","cancelCapture","unload","reload","isExtensionInstalled","setReporter","setCustomData","on","off"].forEach(function(e){n[e]=function(){var r=Array.prototype.slice.call(arguments);r.unshift(e),t.push(r)}}),e.Marker=n;var s=r.createElement("script");s.async=1,s.src="https://edge.marker.io/latest/shim.js";var i=r.getElementsByTagName("script")[0];i.parentNode.insertBefore(s,i)}}(window,document)`,
          }}
        /> */}
        {/* <Script
          id="marker"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:3492807,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
          }}
        /> */}
      </Head>

      <body>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://viewer.cylindo.com/v4/viewer.min.css"
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;

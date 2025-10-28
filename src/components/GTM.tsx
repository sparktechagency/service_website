/* eslint-disable @next/next/no-head-element */
/* eslint-disable @next/next/next-script-for-ga */
import Navbar from "@/components/shared/Navbar";
import React from "react";

export const metadata = {
  title: "Your App Title",
  description: "App description here",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* GTM script (head) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id=GTM-5VWGRHTN';f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5VWGRHTN');
            `,
          }}
        />
      </head>
      <body>
        {/* GTM noscript (body) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5VWGRHTN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Navbar />
        {children}
      </body>
    </html>
  );
}

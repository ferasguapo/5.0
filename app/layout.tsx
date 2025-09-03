import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "obuddy5000",
  description: "Vehicle diagnostics assistant",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Site Verification (replace xxxxxxx with the code from AdSense/Search Console) */}
        <meta
          name="google-site-verification"
          content="xxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        />

        {/* ✅ Google AdSense Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2479836262167230"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        {children}

        {/* Monetag Script */}
        <Script
          id="monetag-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(d, z, s) {
                s.src = 'https://' + d + '/400/' + z;
                try {
                  (document.body || document.documentElement).appendChild(s);
                } catch (e) {}
              })('gizokraijaw.net', 9787836, document.createElement('script'));
            `,
          }}
        />

        {/* Counter.dev Script */}
        <Script
          src="https://cdn.counter.dev/script.js"
          data-id="81321b51-0ec8-4922-a991-afb5927fa309"
          data-utcoffset="-4"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}


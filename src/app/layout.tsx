// import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import Head from "next/head";
import { Dancing_Script } from "next/font/google";
import Image from "next/image";
import Style from "./layout.module.css";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import TabBar from "./tabBar";

const inter = Inter({ subsets: ["latin"] });
const dancingScript = Dancing_Script({ subsets: ["latin"] });

if (process.env.NODE_ENV === 'development') {
	const { worker } = require('../mocks/browser')
	worker.start()
  }
  
//  ReactDOM.render(<App />, document.getElementById('root'))

export const metadata: Metadata = {
  title: "hystagram",
  description: "instagram clone coding by hyna",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: "0", padding: "0", backgroundColor: "fafafa" }}>
        <div className={Style.logo}>
          <Image
            src="/image/logo.svg"
            width={32}
            height={32}
            alt="logo for hystagram."
            style={{ margin: "8px 16px" }}
          />
          <h1 className={dancingScript.className}>Hystragram</h1>
        </div>
        <div className={`${inter.className} ${Style.body}`} style={{}}>
          {children}
        </div>
        {/* <TabBar /> */}
      </body>
    </html>
  );
}

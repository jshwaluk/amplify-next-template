'use client'

import type { Metadata } from "next";
import { Inter } from "next/font/google";


import { Amplify } from "aws-amplify";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import outputs from "@/amplify_outputs.json";


import "./app.css";

Amplify.configure(outputs);


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        
    <html lang="en">
      <body>      
        <Authenticator>
          {children}
        </Authenticator>
      </body>
    </html>
  );
}

/*
Category: Front End Components
Purpose: Types for React components for the front end 
*/
import { ReactNode } from "react";
import React from "react";

// auth-register/page.tsx
export interface authUserProps {
    userName: string;
    email: string;
    walletAddress: string;
    password: string;
};

// auth-sign-in/page.tsx
export interface authUserSignIn {
    email: string;
    password: string;
};
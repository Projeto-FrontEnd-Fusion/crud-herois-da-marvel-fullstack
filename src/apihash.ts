import { MD5 } from "crypto-js";



export const ts = new Date().getTime().toString();
export const dataHash = ts + import.meta.env.VITE_PRIVATE_KEY + import.meta.env.VITE_PUBLIC_KEY;
export const hash = MD5(dataHash).toString()
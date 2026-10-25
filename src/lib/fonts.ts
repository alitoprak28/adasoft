import { Archivo, Plus_Jakarta_Sans } from "next/font/google";

export const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "latin-ext"],
});

// Headings: Archivo's width axis lets titles run slightly expanded, which reads sturdier than the body face.
export const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
});

export const fontVariables = `${jakarta.variable} ${archivo.variable}`;

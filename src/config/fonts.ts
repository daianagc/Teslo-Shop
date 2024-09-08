//1: Creamos Carpeta font donde van a ir todas las fuentes que usemos

import { Inter, Montserrat_Alternates } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const titleFont = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["500", "700"],
});

//La aplico en page principal asi:
// <h1 className={titleFont.className}>Hola Mundo</h1>
//Agrego estilos: <h1 className={`${titleFont.className} font bold`}>Hola Mundo</h1>

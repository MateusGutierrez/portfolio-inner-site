const colors = {
    white: '#FFFFFF',
    black: '#000000',
    turquoise: '#3e9697',
    lightGray: '#c3c6ca',
    darkGray: '#86898d',
    blue: '#0000a3',
    darkBlue: '#0000aa',
    red: '#ff0000',
    lightBlue: '#3c8ce8', // Fundo claro da barra
    mediumBlue: '#245DDB', // Fundo mais escuro da barra
    yellowLight: '#fdfdbd', // Fundo claro do botão Start
    yellowDark: '#d6c44d', // Fundo escuro do botão Start
    yellowHoverLight: '#f4e68b', // Fundo claro do botão Start (hover)
    yellowHoverDark: '#cbb24a', // Fundo escuro do botão Start (hover)
    borderGray: '#a4a4a4', // Borda do botão Start
    shadowBlue: '#4a6da7', // Divisores e sombreamento
} as const;

export type ColorName = keyof typeof colors;
export type ThemeColor = typeof colors[ColorName];

export default colors;

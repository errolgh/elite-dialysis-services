const Theme = {
  colors: {
    eliteBlue: "#20BEC9",
    elitePurple: "#C920BE",
    eliteGreen: "#9FC920",

    darkBlue: "#0D253A",
    black: "#333",
    white: "#FFF",
    lightGray: "#F4F4F4",
  },
  fonts: {
    eliteText: '"Montserrat", monospace',
    eliteSubTitle: '"Oswald", monospace',
    eliteTitle: '"dmsDisplay", Georgia, serif',
  },
  text: {
    xs: "14",
    sm: "16",
    md: "22",
    lg: "28",
    xl: "36",
    xxl: "48",
  },
  breakpoints: {
    xs: 380,
    sm: 576, //512ish?
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
  },
}
export default Theme

// Responsive Design Media Queries:

/*
    //380px:
    @media (min-width: ${Theme.breakpoints.xs}px) {
        border: 1px solid red;
    }
    
    //576px:
    @media (min-width: ${Theme.breakpoints.sm}px) {
        border: 1px solid red;
    }
    
    //768px:
    @media (min-width: ${Theme.breakpoints.md}px) {
        border: 1px solid red;
    }
    
    //992px:
    @media (min-width: ${Theme.breakpoints.lg}px) {
        border: 1px solid red;
    }
    
    //1200px:
    @media (min-width: ${Theme.breakpoints.xl}px) {
        border: 1px solid red;
    }
    
    //1400px:
    @media (min-width: ${Theme.breakpoints.xxl}px) {
        border: 1px solid red;
    } 

*/

import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const fontFamily =
  "Montserrat, Roboto, Helvetica, sans-serif !important";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#63142C",
      contrastText: "#FFFFFF",
    },
  },
  typography: {
    allVariants: {
      fontFamily,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          padding: "8px 24px",
          textTransform: "none",
          fontFamily,
        },
        outlinedPrimary: {
          background: "#DACFBE",
          color: "#63142C",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        fontFamily,
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily,
        },
        colorSecondary: {
          color: "#63142C",
          background: "#FFFBF5",
          "&:hover": {
            background: "#63142C",
            color: "#FFFBF5",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            borderRadius: "16px !important",
          },
          "& input": {
            borderRadius: "16px !important",
          },
          border: "none",
          borderRadius: "16px !important",
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);

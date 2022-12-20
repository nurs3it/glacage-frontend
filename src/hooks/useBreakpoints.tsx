import { useMediaQuery, useTheme } from "@mui/material";

export const useBreakpoints = () => {
  const theme = useTheme();

  const mobile = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const tablet = useMediaQuery(theme.breakpoints.between("sm", "lg"));
  const desktop = useMediaQuery(theme.breakpoints.up("lg"));

  const upDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const upTablet = useMediaQuery(theme.breakpoints.up("sm"));

  const downDesktop = useMediaQuery(theme.breakpoints.down("lg"));
  const downTablet = useMediaQuery(theme.breakpoints.down("sm"));

  return {
    mobile,
    tablet,
    desktop,
    upDesktop,
    upTablet,
    downDesktop,
    downTablet,
  };
};

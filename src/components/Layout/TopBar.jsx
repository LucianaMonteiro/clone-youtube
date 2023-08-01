import { AppBar, Toolbar, makeStyles } from "@mui/material";
import { Box } from "@mui/material/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.background.default,
  },
}));

export default function TopBar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} color="default">
      <Toolbar>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </Toolbar>
    </AppBar>
  );
}

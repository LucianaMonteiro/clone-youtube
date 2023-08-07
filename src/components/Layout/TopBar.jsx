import { AppBar, Box, Button, Toolbar, makeStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.background.default,
  },
  Toolbar: {
    minHeight: 56,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    cursor: "pointer",
    height: 18,
    marginLeft: theme.spacing(3),
  },
}));

export default function Topbar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} color="default">
      <Toolbar className={classes.Toolbar}>
        <Box display="flex" alignItems="center">
          <MenuIcon />
          <img src="logo-youtube.png" alt="logo" className={classes.logo} />
        </Box>
        <Box></Box>
        <Box>
          <Button color="secondary" variant="outlined">
            SEARCH
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

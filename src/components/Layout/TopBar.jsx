import {
  AppBar,
  Box,
  Button,
  Hidden,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import { Paper, InputBase, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCall from "@material-ui/icons/VideoCall";
import MoreVert from "@material-ui/icons/MoreVert";
import Apps from "@material-ui/icons/Apps";
import { AccountCircle } from "@material-ui/icons";

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
  search: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    height: 35,
    width: 700,
  },
  input: {
    flex: 1,
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
        <Hidden mdDown>
          <Box>
            <Paper component="form" className={classes.search}>
              <InputBase
                flex="1"
                placeholder="Pesquisar"
                inputProps={{
                  "aria-label": "search google maps",
                }}
              />
              <IconButton type="submit">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Box>
        </Hidden>
        <Box style={{ display: "flex" }}>
          <IconButton>
            <Apps />
          </IconButton>
          <IconButton>
            <VideoCall />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
          <Button
            color="secondary"
            component="a"
            startIcon={<AccountCircle />}
            variant="outlined"
          >
           FAZER LOGIN
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

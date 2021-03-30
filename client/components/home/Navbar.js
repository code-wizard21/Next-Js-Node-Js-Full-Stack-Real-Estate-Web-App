import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Container,
} from "@material-ui/core";
import HomeWorkIcon from "@material-ui/icons/HomeWork";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    // marginRight: theme.spacing(2),
  },
  title: {
    // flexGrow: 1,
    fontSize: "28px",
    marginRight: "20px",
  },
  titleSpan: {
    fontWeight: 700,
  },
  toolbarMain: {
    padding: "0px",
    minHeight: 100,
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  toolbarLeft: {
    display: "flex",
    alignItems: "center",
  },
  toolbarRight: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    fontSize: "46px",
    color: theme.palette.primary.main,
    // "&:hover": {
    //   color: "#0ec6d5",
    // },
  },
  link: {
    margin: theme.spacing(2),
    fontSize: ".975rem",
    color: "#ffffff",
    fontWeight: 500,
    // textTransform: "capitalize",
    textDecoration: "none",
    transition: ".3s",
    "&:hover": {
      color: "#0ec6d5",
      fontSize: "1rem",
    },
  },
  titleLink: {
    color: "#ffffff",
    fontWeight: 500,
    fontSize: "28px",
    textDecoration: "none",
    transition: ".3s",
    "&:hover": {
      color: "#0ec6d5",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar
        position="absolute"
        color="transparent"
        elevation={0}
        className={classes.root}
      >
        <Container maxWidth="lg">
          <Toolbar className={classes.toolbarMain}>
            <div className={classes.toolbarLeft}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                {/* <HomeWorkIcon className={classes.logo} /> */}
                <img src="/images/buildings.svg" alt="logo" width="50" />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                <Link href="/">
                  <a className={classes.titleLink}>
                    home <span className={classes.titleSpan}>ID</span>
                  </a>
                </Link>
              </Typography>
              <nav>
                <Link href="#">
                  <a className={classes.link}>Home</a>
                </Link>
                <Link href="#">
                  <a className={classes.link}>Properties</a>
                </Link>
                <Link href="#">
                  <a className={classes.link}>About</a>
                </Link>
              </nav>
            </div>
            <div className="toolbarRight">
              <Link href="#">
                <a
                  className={classes.link}
                  style={{ borderRight: "1px solid #ffffff", paddingRight: 30 }}
                >
                  LOGIN
                </a>
              </Link>
              <Link href="#">
                <a className={classes.link}>REGISTER</a>
              </Link>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;

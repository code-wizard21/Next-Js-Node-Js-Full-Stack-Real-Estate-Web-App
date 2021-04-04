import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Container,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    borderBottom: "1px solid #eee",
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
  toolbarSecondary: {
    padding: "0px",
    minHeight: 80,
    color: "#333333",
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
  linkSecondary: {
    margin: theme.spacing(2),
    fontSize: ".975rem",
    color: "#333333",
    fontWeight: 500,
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
  titleLinkSecondary: {
    color: "#333333",
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
  const router = useRouter();

  // console.log(router.pathname);
  // color={router.pathname === "/" ? "transparent" : "primary"}

  return (
    <>
      <AppBar
        position={router.pathname === "/" ? "absolute" : "static"}
        color="transparent"
        elevation={0}
        className={router.pathname === "/" ? "" : classes.root}
      >
        <Container maxWidth="lg">
          <Toolbar
            className={
              router.pathname === "/"
                ? classes.toolbarMain
                : classes.toolbarSecondary
            }
          >
            <div className={classes.toolbarLeft}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                {/* <HomeWorkIcon className={classes.logo} /> */}
                <Link href="/">
                  <img src="/images/buildings.svg" alt="logo" width="50" />
                </Link>
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                <Link href="/">
                  <a
                    className={
                      router.pathname === "/"
                        ? classes.titleLink
                        : classes.titleLinkSecondary
                    }
                  >
                    home <span className={classes.titleSpan}>ID</span>
                  </a>
                </Link>
              </Typography>
              <nav>
                <Link href="#">
                  <a
                    className={
                      router.pathname === "/"
                        ? classes.link
                        : classes.linkSecondary
                    }
                  >
                    Home
                  </a>
                </Link>
                <Link href="#">
                  <a
                    className={
                      router.pathname === "/"
                        ? classes.link
                        : classes.linkSecondary
                    }
                  >
                    Properties
                  </a>
                </Link>
                <Link href="#">
                  <a
                    className={
                      router.pathname === "/"
                        ? classes.link
                        : classes.linkSecondary
                    }
                  >
                    About
                  </a>
                </Link>
              </nav>
            </div>
            <div className="toolbarRight">
              <Link href="#">
                <a
                  className={
                    router.pathname === "/"
                      ? classes.link
                      : classes.linkSecondary
                  }
                  style={{
                    borderRight:
                      router.pathname === "/"
                        ? "1px solid #ffffff"
                        : "1px solid #333333",
                    paddingRight: 30,
                  }}
                >
                  LOGIN
                </a>
              </Link>
              <Link href="#">
                <a
                  className={
                    router.pathname === "/"
                      ? classes.link
                      : classes.linkSecondary
                  }
                >
                  REGISTER
                </a>
              </Link>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;

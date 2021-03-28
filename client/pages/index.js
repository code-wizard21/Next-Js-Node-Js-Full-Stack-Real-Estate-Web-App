import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Paper,
  Container,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  Divider,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const useStyles = makeStyles((theme) => ({
  showCase: {
    width: "100vw",
    height: "100vh",
    backgroundImage: 'url("/images/showcase.jpg")',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  root: {
    flexGrow: 1,
  },
  smallTitle: {
    color: "#ffffff",
    marginBottom: theme.spacing(4),
    letterSpacing: "3.67px",
    fontWeight: 500,
    fontSize: "24px",
  },
  bigTitle: {
    color: "#ffffff",
    letterSpacing: "3.67px",
    fontWeight: 500,
    fontSize: "4.0625rem",
    marginBottom: theme.spacing(10),
  },
  bigTitleSpan: {
    color: theme.palette.primary.main,
  },
  paper: {
    padding: theme.spacing(3),
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    backdropFilter: "blur(10px)",
    // boxShadow: "0 8px 32px 0 rgba(14, 198, 213, 0.30)",
    // color: "#ffffff",
    borderRadius: "3px",
  },
  formControl: {
    width: "100%",
  },
  radioGroup: {
    flexDirection: "row",
    height: "56px",
  },
  radioControlLabel: {
    margin: 0,
  },
  searchButton: {
    padding: "15px 15px",
    color: "#ffffff",
    width: "100%",
  },
  featuredForSaleSection: {
    padding: theme.spacing(10),
  },
  seeAllPropertiesButton: {
    padding: "1rem 2.5rem",
    textTransform: "capitalize",
    color: "#1e1d85",
    fontSize: "15px",
    fontWeight: "500",
    borderRadius: 0,
    "&:hover": {
      backgroundColor: "#d6e8ea",
    },
  },
  typographyDivider: {
    display: "block",
    width: "75px",
    height: "3px",
    marginTop: "19px",
    backgroundColor: "#0ec6d5",
  },
  card: {
    height: "100%",
    border: "1px solid #eee",
    borderRadius: "3px",
    // display: "flex",
    // flexDirection: "column",
    //
    // cursor: "pointer",
  },
}));

const Home = () => {
  const classes = useStyles();

  const [propertyStatus, setPropertyStatus] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [selectedState, setSelectedState] = useState("");

  return (
    <>
      <section className={classes.showCase}>
        <Container maxWidth="lg" style={{ marginTop: "30px" }}>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12}>
              <Typography
                variant="h4"
                align="center"
                className={classes.smallTitle}
              >
                LET US GUIDE YOU TO
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h1"
                align="center"
                className={classes.bigTitle}
              >
                Find Your{" "}
                <span className={classes.bigTitleSpan}>Dream Home</span>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Paper className={classes.paper} elevation={0}>
                <Grid container spacing={1}>
                  <Grid item xs={3}>
                    <FormControl
                      component="fieldset"
                      className={classes.formControl}
                    >
                      <RadioGroup
                        aria-label="property-status"
                        name="property_status"
                        value={propertyStatus}
                        onChange={(e) => setPropertyStatus(e.target.value)}
                        className={classes.radioGroup}
                      >
                        <FormControlLabel
                          value="for sale"
                          control={<Radio color="primary" />}
                          label="For Sale"
                          className={classes.radioControlLabel}
                        />
                        <FormControlLabel
                          value="for rent"
                          control={<Radio color="primary" />}
                          label="For Rent"
                          className={classes.radioControlLabel}
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={3}>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel id="property-type-label">
                        Property Type
                      </InputLabel>
                      <Select
                        labelId="property-type-label"
                        id="property-type-select"
                        name="property_type"
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                        label="Property Type"
                      >
                        <MenuItem value="apartment">Apartment</MenuItem>
                        <MenuItem value="house">House</MenuItem>
                        <MenuItem value="commercial">Commercial</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel id="state-label">State</InputLabel>
                      <Select
                        labelId="state-label"
                        id="state-select"
                        value={selectedState}
                        onChange={(e) => setSelectedState(e.target.value)}
                        label="State"
                      >
                        <MenuItem value="NY">New York</MenuItem>
                        <MenuItem value="NMX">New Mexico</MenuItem>
                        <MenuItem value="LA">Los Angeles</MenuItem>
                        <MenuItem value="FL">Florida</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={2}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      disableElevation
                      startIcon={<SearchIcon />}
                      className={classes.searchButton}
                    >
                      Search
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </section>
      {/* Featured For Sale Starts Here */}
      <section className={classes.featuredForSaleSection}>
        <Container maxWidth="lg">
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={6}>
              <Typography
                style={{ fontSize: "1.5rem", fontWeight: "500" }}
                variant="h2"
              >
                Featured Properties For Sale
              </Typography>
              <Divider className={classes.typographyDivider} />
            </Grid>
            <Grid item xs={6} style={{ textAlign: "right" }}>
              <Button
                className={classes.seeAllPropertiesButton}
                variant="contained"
                color="secondary"
                size="large"
                disableElevation
                endIcon={<ArrowRightAltIcon />}
              >
                See all properties
              </Button>
            </Grid>
          </Grid>
          {/* Feautured For Sale Properties */}
          <Grid container spacing={4} style={{ marginTop: "30px" }}>
            <Grid item xs={6} sm={4} md={3}>
              <Card className={classes.card} elevation={0}>
                <CardActionArea>
                  <CardMedia
                    className={classes.cardMedia}
                    component="img"
                    alt="Contemplative Reptile"
                    height="220"
                    image="/images/re5.jpg"
                    title="Property title here"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Property Title
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <Divider />
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Card className={classes.card} elevation={0}>
                <CardActionArea>
                  <CardMedia
                    className={classes.cardMedia}
                    component="img"
                    alt="Contemplative Reptile"
                    height="220"
                    image="/images/re6.jpg"
                    title="Property title here"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Property Title
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <Divider />
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </section>
      {/* Featured For Sale Ends Here */}
    </>
  );
};

Home.layout = "default";

export default Home;

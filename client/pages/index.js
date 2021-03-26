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
  FormLabel,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

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
    fontWeight: 700,
    fontSize: "1.5rem",
  },
  bigTitle: {
    color: "#ffffff",
    letterSpacing: "3.67px",
    fontWeight: 700,
    fontSize: "4rem",
    marginBottom: theme.spacing(10),
  },
  bigTitleSpan: {
    color: theme.palette.primary.main,
  },
  paper: {
    padding: theme.spacing(3),
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 32px 0 rgba(14, 198, 213, 0.30)",
    // color: "#ffffff",
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
}));

const Home = () => {
  const classes = useStyles();

  const [propertyStatus, setPropertyStatus] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [selectedState, setSelectedState] = useState("");

  return (
    <div className={classes.showCase}>
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
              Find Your <span className={classes.bigTitleSpan}>Dream Home</span>
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
                        control={<Radio />}
                        label="For Sale"
                        className={classes.radioControlLabel}
                      />
                      <FormControlLabel
                        value="for rent"
                        control={<Radio />}
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
    </div>
  );
};

Home.layout = "default";

export default Home;

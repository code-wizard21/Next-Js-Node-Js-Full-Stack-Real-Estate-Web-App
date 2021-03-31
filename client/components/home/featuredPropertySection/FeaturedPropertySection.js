import { makeStyles } from "@material-ui/core/styles";
import FeaturedPropertyCard from "./FeaturedPropertyCard";
import {
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const useStyles = makeStyles((theme) => ({
  featuredPropertySection: {
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
}));

const FeaturedPropertySection = ({ propertyStatus, featuredProperties }) => {
  const classes = useStyles();

  return (
    <section className={classes.featuredPropertySection}>
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={6}>
            <Typography
              style={{ fontSize: "2rem", fontWeight: "500" }}
              variant="h2"
            >
              Featured Properties {propertyStatus}
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
        {/* Feautured Properties */}
        <Grid container spacing={4} style={{ marginTop: "30px" }}>
          {featuredProperties &&
            featuredProperties.map((property) => (
              <FeaturedPropertyCard key={property._id} property={property} />
            ))}
        </Grid>
      </Container>
    </section>
  );
};

export default FeaturedPropertySection;

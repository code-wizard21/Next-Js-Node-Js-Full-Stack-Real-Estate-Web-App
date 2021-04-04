import axios from "axios";
import { useRouter } from "next/router";
import { prettyDate } from "../../helpers/helpers";
import {
  Avatar,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ScheduleIcon from "@material-ui/icons/Schedule";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import PrintOutlinedIcon from "@material-ui/icons/PrintOutlined";
import HomeWorkOutlinedIcon from "@material-ui/icons/HomeWorkOutlined";
import BuildOutlinedIcon from "@material-ui/icons/BuildOutlined";
import TheatersOutlinedIcon from "@material-ui/icons/TheatersOutlined";
import SquareFootOutlinedIcon from "@material-ui/icons/SquareFootOutlined";
import KingBedOutlinedIcon from "@material-ui/icons/KingBedOutlined";
import BathtubOutlinedIcon from "@material-ui/icons/BathtubOutlined";
import DriveEtaOutlinedIcon from "@material-ui/icons/DriveEtaOutlined";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
  propertyImage: {
    width: "100%",
    height: "100%",
    borderRadius: "5px",
  },
  upperTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ulStyle: {
    listStyle: "none",
    display: "flex",
    alignItems: "center",
  },
  li: {
    marginRight: ".625rem",
    display: "flex",
    alignItems: "center",
  },
  chip: {
    color: "#fff",
    borderRadius: "3px",
    backgroundColor: "#ff6935",
    letterSpacing: ".87px",
    lineHeight: "1.15",
    textTransform: "uppercase",
    padding: "5px 8px",
    fontWeight: "500",
    fontSize: ".8125rem",
  },
  mainTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 0",
  },
  title: {
    fontSize: "35px",
    fontWeight: 600,
    color: "#333",
  },
  p: {
    color: "#696969",
    fontSize: ".875rem",
    lineHeight: "2.14",
  },
  price: {
    color: "#333",
    fontWeight: 600,
    fontSize: "22px",
  },
  paper: {
    padding: theme.spacing(4),
  },
  descriptionTitle: {
    color: "#333",
    fontSize: "22px",
    marginBottom: ".625rem",
    fontWeight: 500,
  },
  divider: {
    margin: "35px 0",
  },
  mediaWrapper: {
    marginBottom: "1rem",
  },
  media: {
    display: "flex",
    alignItems: "flex-start",
  },
  mediaInner: {
    padding: ".625rem",
    boxShadow: "0 0 7px 0 rgba(0,0,0,.07)",
    borderRadius: "5px",
    marginRight: ".625rem",
  },
  mediaIcon: {
    display: "inline-block",
    width: "1em",
    height: "1em",
    strokeWidth: 0,
    fontSize: "32px",
  },
  mediaBody: {
    flex: 1,
  },
  mediaBodyH5: {
    fontSize: "14px",
    letterSpacing: ".93px",
    textTransform: "uppercase",
    margin: ".3125rem 0",
  },
  mediaBodyP: {
    marginBottom: 0,
    fontSize: "13px",
    fontWeight: 600,
    color: "#333",
  },
  detailColWrap: {
    display: "flex",
    marginBottom: ".6rem",
  },
  detailH5: {
    width: "130px",
    fontWeight: 500,
    color: "#333",
    fontSize: "14px",
  },
  amenitiesColWrap: {
    display: "flex",
    alignItems: "center",
    // marginBottom: ".6rem",
  },
  amenitiesIcon: {
    marginRight: ".625rem",
  },
  realtorWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
  },
  avatar: {
    width: theme.spacing(9),
    height: theme.spacing(9),
    marginRight: "1rem",
  },
  realtorName: {
    fontWeight: 600,
    fontSize: "15px",
    color: "#333",
    marginBottom: theme.spacing(1),
  },
  realtorPhone: {
    fontSize: "13px",
    color: "#696969",
    fontSize: ".875rem",
  },
  formInput: {
    marginBottom: "10px",
  },
}));

const Property = ({ property }) => {
  const classes = useStyles();
  const router = useRouter();

  const handlePrintPage = () => {
    window.print();
  };

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
        <div className={classes.upperTitle}>
          <ul className={classes.ulStyle}>
            {property.isFeatured && (
              <li className={classes.li}>
                <Chip className={classes.chip} label="Featured" />
              </li>
            )}

            <li className={classes.li}>
              <Chip
                style={{ backgroundColor: "#0ec6d5" }}
                className={classes.chip}
                label={property.property_status}
              />
            </li>
            <li className={classes.li}>
              <ScheduleIcon
                style={{ marginRight: "5px" }}
                color="action"
                fontSize="small"
              />{" "}
              {prettyDate(property.createdAt)}
            </li>
            <li className={classes.li}>
              <VisibilityOutlinedIcon
                style={{ marginRight: "5px" }}
                color="action"
                fontSize="small"
              />{" "}
              {property.views} views
            </li>
          </ul>
          <div>
            <Button
              variant="outlined"
              size="small"
              style={{
                color: "#757575",
                borderColor: "#eee",
                marginRight: "10px",
              }}
              startIcon={
                <FavoriteBorderOutlinedIcon color="primary" fontSize="small" />
              }
            >
              Save
            </Button>
            <Button
              onClick={handlePrintPage}
              variant="outlined"
              size="small"
              style={{ color: "#757575", borderColor: "#eee" }}
              startIcon={<PrintOutlinedIcon color="primary" fontSize="small" />}
            >
              Print
            </Button>
          </div>
        </div>

        <div className={classes.mainTitle}>
          <div>
            <Typography className={classes.title} component="h4">
              {property.title}
            </Typography>
            <Typography className={classes.p} component="p">
              {property.property_address.address +
                " " +
                property.property_address.city}
            </Typography>
          </div>

          <div style={{ textAlign: "right" }}>
            <Typography className={classes.price} component="p">
              ${property.price.toLocaleString()}
            </Typography>
            <Typography className={classes.p} component="p">
              {property.size} Sqft
            </Typography>
          </div>
        </div>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <img
              className={classes.propertyImage}
              src="/images/re2.jpg"
              alt="image1"
            />
          </Grid>
          <Grid item xs={6}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <img
                  className={classes.propertyImage}
                  src="/images/re1.jpg"
                  alt="image1"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  className={classes.propertyImage}
                  src="/images/re3.jpg"
                  alt="image1"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  className={classes.propertyImage}
                  src="/images/re4.jpg"
                  alt="image1"
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  className={classes.propertyImage}
                  src="/images/re5.jpg"
                  alt="image1"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Description start here */}
        <Grid container spacing={2} style={{ padding: "25px 0" }}>
          <Grid item xs={8} style={{ paddingRight: "50px" }}>
            <div>
              <Typography className={classes.descriptionTitle} component="h4">
                Description
              </Typography>
              <Typography className={classes.p} component="p">
                Massa tempor nec feugiat nisl pretium. Egestas fringilla
                phasellus faucibus scelerisque eleifend donec. Porta nibh
                venenatis cras sed felis eget velit aliquet. Neque volutpat ac
                tincidunt vitae semper quis lectus. Turpis in eu mi bibendum
                neque egestas congue quisque. Sed elementum tempus egestas sed
                sed risus pretium quam. Dignissim sodales ut eu sem. Nibh mauris
                cursus mattis molestie a iaculis at erat pellentesque. Id
                interdum velit laoreet id donec ultrices tincidunt.
              </Typography>
            </div>
            <Divider light={true} className={classes.divider} />
            <div>
              <Typography
                className={classes.descriptionTitle}
                style={{ marginBottom: "1.875rem" }}
                component="h4"
              >
                Facts and Features
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs={3} className={classes.mediaWrapper}>
                  <div className={classes.media}>
                    <div className={classes.mediaInner}>
                      <HomeWorkOutlinedIcon
                        color="primary"
                        className={classes.mediaIcon}
                      />
                    </div>
                    <div className={classes.mediaBody}>
                      <Typography
                        className={classes.mediaBodyH5}
                        component="h5"
                      >
                        Type
                      </Typography>
                      <Typography className={classes.mediaBodyP} component="p">
                        House
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={3} className={classes.mediaWrapper}>
                  <div className={classes.media}>
                    <div className={classes.mediaInner}>
                      <BuildOutlinedIcon
                        color="primary"
                        className={classes.mediaIcon}
                      />
                    </div>
                    <div className={classes.mediaBody}>
                      <Typography
                        className={classes.mediaBodyH5}
                        component="h5"
                      >
                        Year Built
                      </Typography>
                      <Typography className={classes.mediaBodyP} component="p">
                        {property.year_build}
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={3} className={classes.mediaWrapper}>
                  <div className={classes.media}>
                    <div className={classes.mediaInner}>
                      <TheatersOutlinedIcon
                        color="primary"
                        className={classes.mediaIcon}
                      />
                    </div>
                    <div className={classes.mediaBody}>
                      <Typography
                        className={classes.mediaBodyH5}
                        component="h5"
                      >
                        Heating
                      </Typography>
                      <Typography className={classes.mediaBodyP} component="p">
                        Radiant
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={3} className={classes.mediaWrapper}>
                  <div className={classes.media}>
                    <div className={classes.mediaInner}>
                      <SquareFootOutlinedIcon
                        color="primary"
                        className={classes.mediaIcon}
                      />
                    </div>
                    <div className={classes.mediaBody}>
                      <Typography
                        className={classes.mediaBodyH5}
                        component="h5"
                      >
                        Sqft
                      </Typography>
                      <Typography className={classes.mediaBodyP} component="p">
                        {property.size.toFixed(1)}
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={3} className={classes.mediaWrapper}>
                  <div className={classes.media}>
                    <div className={classes.mediaInner}>
                      <KingBedOutlinedIcon
                        color="primary"
                        className={classes.mediaIcon}
                      />
                    </div>
                    <div className={classes.mediaBody}>
                      <Typography
                        className={classes.mediaBodyH5}
                        component="h5"
                      >
                        Bedrooms
                      </Typography>
                      <Typography className={classes.mediaBodyP} component="p">
                        {property.rooms}
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={3} className={classes.mediaWrapper}>
                  <div className={classes.media}>
                    <div className={classes.mediaInner}>
                      <BathtubOutlinedIcon
                        color="primary"
                        className={classes.mediaIcon}
                      />
                    </div>
                    <div className={classes.mediaBody}>
                      <Typography
                        className={classes.mediaBodyH5}
                        component="h5"
                      >
                        Bathrooms
                      </Typography>
                      <Typography className={classes.mediaBodyP} component="p">
                        {property.bathrooms}
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={3} className={classes.mediaWrapper}>
                  <div className={classes.media}>
                    <div className={classes.mediaInner}>
                      <DriveEtaOutlinedIcon
                        color="primary"
                        className={classes.mediaIcon}
                      />
                    </div>
                    <div className={classes.mediaBody}>
                      <Typography
                        className={classes.mediaBodyH5}
                        component="h5"
                      >
                        Garage
                      </Typography>
                      <Typography className={classes.mediaBodyP} component="p">
                        {property.garage}
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={3} className={classes.mediaWrapper}>
                  <div className={classes.media}>
                    <div className={classes.mediaInner}>
                      <AssignmentOutlinedIcon
                        color="primary"
                        className={classes.mediaIcon}
                      />
                    </div>
                    <div className={classes.mediaBody}>
                      <Typography
                        className={classes.mediaBodyH5}
                        component="h5"
                      >
                        Status
                      </Typography>
                      <Typography className={classes.mediaBodyP} component="p">
                        Active
                      </Typography>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
            <Divider className={classes.divider} />
            <div>
              <Typography
                className={classes.descriptionTitle}
                style={{ marginBottom: "1.25rem" }}
                component="h4"
              >
                Additional Details
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <div className={classes.detailColWrap}>
                    <Typography className={classes.detailH5} component="h5">
                      Property ID
                    </Typography>
                    <Typography className={classes.p} component="p">
                      {property._id}
                    </Typography>
                  </div>

                  <div className={classes.detailColWrap}>
                    <Typography className={classes.detailH5} component="h5">
                      Property Type
                    </Typography>
                    <Typography className={classes.p} component="p">
                      {property.property_type}
                    </Typography>
                  </div>

                  <div className={classes.detailColWrap}>
                    <Typography className={classes.detailH5} component="h5">
                      Rooms
                    </Typography>
                    <Typography className={classes.p} component="p">
                      {property.rooms}
                    </Typography>
                  </div>

                  <div className={classes.detailColWrap}>
                    <Typography className={classes.detailH5} component="h5">
                      Size
                    </Typography>
                    <Typography className={classes.p} component="p">
                      {property.size}
                    </Typography>
                  </div>

                  <div className={classes.detailColWrap}>
                    <Typography className={classes.detailH5} component="h5">
                      Garage
                    </Typography>
                    <Typography className={classes.p} component="p">
                      {property.garage}
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className={classes.detailColWrap}>
                    <Typography className={classes.detailH5} component="h5">
                      Price
                    </Typography>
                    <Typography className={classes.p} component="p">
                      ${property.price.toLocaleString()}
                    </Typography>
                  </div>

                  <div className={classes.detailColWrap}>
                    <Typography className={classes.detailH5} component="h5">
                      Property Status
                    </Typography>
                    <Typography className={classes.p} component="p">
                      {property.property_status}
                    </Typography>
                  </div>

                  <div className={classes.detailColWrap}>
                    <Typography className={classes.detailH5} component="h5">
                      Bathrooms
                    </Typography>
                    <Typography className={classes.p} component="p">
                      {property.bathrooms}
                    </Typography>
                  </div>

                  <div className={classes.detailColWrap}>
                    <Typography className={classes.detailH5} component="h5">
                      Year build
                    </Typography>
                    <Typography className={classes.p} component="p">
                      {property.year_build}
                    </Typography>
                  </div>

                  <div className={classes.detailColWrap}>
                    <Typography className={classes.detailH5} component="h5">
                      Garage Size
                    </Typography>
                    <Typography className={classes.p} component="p">
                      {property.garage_size}
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </div>
            <Divider className={classes.divider} />
            <div>
              <Typography
                className={classes.descriptionTitle}
                style={{ marginBottom: "1.25rem" }}
                component="h4"
              >
                Amenities
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs={3} className={classes.amenitiesColWrap}>
                  <CheckIcon
                    className={classes.amenitiesIcon}
                    fontSize="small"
                    color="primary"
                  />{" "}
                  <span className={classes.p}>Balcony</span>
                </Grid>
                <Grid item xs={3} className={classes.amenitiesColWrap}>
                  <CheckIcon
                    className={classes.amenitiesIcon}
                    fontSize="small"
                    color="primary"
                  />{" "}
                  <span className={classes.p}>Fireplace</span>
                </Grid>
                <Grid item xs={3} className={classes.amenitiesColWrap}>
                  <CheckIcon
                    className={classes.amenitiesIcon}
                    fontSize="small"
                    color="primary"
                  />{" "}
                  <span className={classes.p}>Dishwasher</span>
                </Grid>
                <Grid item xs={3} className={classes.amenitiesColWrap}>
                  <CheckIcon
                    className={classes.amenitiesIcon}
                    fontSize="small"
                    color="primary"
                  />{" "}
                  <span className={classes.p}>Pool</span>
                </Grid>
                <Grid item xs={3} className={classes.amenitiesColWrap}>
                  <CheckIcon
                    className={classes.amenitiesIcon}
                    fontSize="small"
                    color="primary"
                  />{" "}
                  <span className={classes.p}>Basement</span>
                </Grid>
                <Grid item xs={3} className={classes.amenitiesColWrap}>
                  <CheckIcon
                    className={classes.amenitiesIcon}
                    fontSize="small"
                    color="primary"
                  />{" "}
                  <span className={classes.p}>Cooling</span>
                </Grid>
                <Grid item xs={3} className={classes.amenitiesColWrap}>
                  <CheckIcon
                    className={classes.amenitiesIcon}
                    fontSize="small"
                    color="primary"
                  />{" "}
                  <span className={classes.p}>Schools</span>
                </Grid>
                <Grid item xs={3} className={classes.amenitiesColWrap}>
                  <CheckIcon
                    className={classes.amenitiesIcon}
                    fontSize="small"
                    color="primary"
                  />{" "}
                  <span className={classes.p}>Mercados</span>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper} elevation={2}>
              <div className={classes.realtorWrap}>
                <Avatar
                  className={classes.avatar}
                  alt="Remy Sharp"
                  src="/images/avatars/woman.jpg"
                />
                <div>
                  <Typography className={classes.realtorName} component="h3">
                    Olivia Dunham
                  </Typography>
                  <Typography className={classes.realtorPhone} component="p">
                    (+123) 1900 68668
                  </Typography>
                </div>
              </div>
              <form>
                <TextField
                  required
                  className={classes.formInput}
                  id="name"
                  label="First Name, Last Name"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  required
                  className={classes.formInput}
                  id="email"
                  label="Your Email"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  required
                  className={classes.formInput}
                  id="phone"
                  label="Your Phone"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  required
                  className={classes.formInput}
                  id="message"
                  label="Your Message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={5}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  style={{ color: "#fff", textTransform: "capitalize" }}
                >
                  Request info
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "property-1" } }],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  try {
    const res = await axios.get(
      `${process.env.baseURL}/properties/getbyslug/${params.slug}`
    );

    const property = res.data.data;

    return {
      props: {
        property,
      },
    };
  } catch (error) {
    console.log("fucking error is: ", error);
  }
}

export default Property;

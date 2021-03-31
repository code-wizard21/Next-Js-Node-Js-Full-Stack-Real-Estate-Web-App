import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Divider,
  Grid,
} from "@material-ui/core";
import WeekendOutlinedIcon from "@material-ui/icons/WeekendOutlined";
import BathtubOutlinedIcon from "@material-ui/icons/BathtubOutlined";
import SquareFootOutlinedIcon from "@material-ui/icons/SquareFootOutlined";
import DirectionsCarOutlinedIcon from "@material-ui/icons/DirectionsCarOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    border: "1px solid #eee",
    borderRadius: "3px",
  },
  propertyTitle: {
    fontSize: "16px",
    fontWeight: "500",
  },
  propertyAddress: {
    fontSize: "15px",
    fontWeight: "500",
    color: "#9b9b9b",
    marginBottom: "10px",
  },
  propertyAmetinitiesWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#9b9b9b",
    fontSize: "14px",
    fontWeight: "500",
  },
  propertyAmenitySpan: {
    display: "flex",
    alignItems: "center",
  },
  propertyAmenityIcon: {
    marginRight: "5px",
    fontSize: "18px",
  },
  cardActions: {
    padding: "20px 15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  propertyPrice: {
    fontSize: "17px",
    fontWeight: "600",
    margin: 0,
  },
  addtoFavouriteProperty: {
    border: "1px solid #eee",
    borderRadius: "50%",
    fontSize: "40px",
    padding: "10px",
    cursor: "pointer",
  },
}));

const FeaturedPropertyCard = ({ property }) => {
  const classes = useStyles();

  const { title, price, rooms, bathrooms, size, garage, slug } = property;
  const { address, city } = property.property_address;

  return (
    <Grid item xs={6} sm={4} md={3}>
      <Card className={classes.card} elevation={0}>
        <Link href={`/property/${encodeURIComponent(slug)}`}>
          <div style={{ cursor: "pointer" }}>
            <CardMedia
              className={classes.cardMedia}
              component="img"
              alt="Contemplative Reptile"
              height="220"
              image="/images/re6.jpg"
              title={title}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className={classes.propertyTitle}
              >
                {title}
              </Typography>
              <Typography
                gutterBottom
                component="p"
                className={classes.propertyAddress}
              >
                {address + " " + city}
              </Typography>
              <div className={classes.propertyAmetinitiesWrapper}>
                <span className={classes.propertyAmenitySpan}>
                  <WeekendOutlinedIcon
                    className={classes.propertyAmenityIcon}
                    color="primary"
                  />{" "}
                  {rooms} Br
                </span>
                <span className={classes.propertyAmenitySpan}>
                  <BathtubOutlinedIcon
                    className={classes.propertyAmenityIcon}
                    color="primary"
                  />{" "}
                  {bathrooms} Ba
                </span>
                <span className={classes.propertyAmenitySpan}>
                  <SquareFootOutlinedIcon
                    className={classes.propertyAmenityIcon}
                    color="primary"
                  />{" "}
                  {size} Sq.Ft
                </span>
                <span className={classes.propertyAmenitySpan}>
                  <DirectionsCarOutlinedIcon
                    className={classes.propertyAmenityIcon}
                    color="primary"
                  />{" "}
                  {garage} Gr
                </span>
              </div>
            </CardContent>
          </div>
        </Link>
        <Divider />
        <CardActions className={classes.cardActions}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.propertyPrice}
          >
            ${price.toLocaleString()}
          </Typography>
          <FavoriteBorderOutlinedIcon
            color="primary"
            className={classes.addtoFavouriteProperty}
          />
        </CardActions>
      </Card>
    </Grid>
  );
};

export default FeaturedPropertyCard;

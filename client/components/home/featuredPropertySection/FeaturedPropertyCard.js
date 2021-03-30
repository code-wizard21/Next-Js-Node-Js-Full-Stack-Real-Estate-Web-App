import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
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

const FeaturedPropertyCard = () => {
  const classes = useStyles();

  return (
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
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.propertyTitle}
            >
              Affordable Urban House
            </Typography>
            <Typography
              gutterBottom
              component="p"
              className={classes.propertyAddress}
            >
              1421 San Pedro St, Los Angeles
            </Typography>
            <div className={classes.propertyAmetinitiesWrapper}>
              <span className={classes.propertyAmenitySpan}>
                <WeekendOutlinedIcon
                  className={classes.propertyAmenityIcon}
                  color="primary"
                />{" "}
                3 Br
              </span>
              <span className={classes.propertyAmenitySpan}>
                <BathtubOutlinedIcon
                  className={classes.propertyAmenityIcon}
                  color="primary"
                />{" "}
                2 Ba
              </span>
              <span className={classes.propertyAmenitySpan}>
                <SquareFootOutlinedIcon
                  className={classes.propertyAmenityIcon}
                  color="primary"
                />{" "}
                260 Sq.Ft
              </span>
              <span className={classes.propertyAmenitySpan}>
                <DirectionsCarOutlinedIcon
                  className={classes.propertyAmenityIcon}
                  color="primary"
                />{" "}
                1 Gr
              </span>
            </div>
          </CardContent>
        </CardActionArea>
        <Divider />
        <CardActions className={classes.cardActions}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.propertyPrice}
          >
            $1.250.000
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

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));

const AdminHome = () => {
  const classes = useStyles();

  return (
    <div>
      <h1>Admin Home Page</h1>
    </div>
  );
};

AdminHome.layout = "admin";

export default AdminHome;

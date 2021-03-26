import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div>
      <h1>Admin Dashboard Page</h1>
    </div>
  );
};

Dashboard.layout = "admin";

export default Dashboard;

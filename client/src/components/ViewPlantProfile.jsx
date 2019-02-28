import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
// import { blue500, red500, greenA200 } from 'material-ui/styles/colors';
// import SvgIcon from 'material-ui/SvgIcon';

// const iconStyles = {
//   marginRight: 24,
// };

// const Toggle = props => (
//   <SvgIcon {...props}>
//     <path d="M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
//   </SvgIcon>
// );

const x = document.getElementById('demo');

const styles = theme => ({
  root: {
    color: theme.palette.text.primary,
  },
  icon: {
    margin: theme.spacing.unit,
    fontSize: 32,
    padding: '0%',
  },
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'center',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

class ViewPlantProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plantId: '',
      userId: props.userId,
    };
    this.favoriteButton = this.favoriteButton.bind(this);
    this.getDirections = this.getDirections.bind(this);
    this.getLocation = this.getLocation.bind(this);
    this.deleteButton = this.deleteButton.bind(this);
    this.toggleButton = this.toggleButton.bind(this);
  }

  // doesnt work
  getDirections() {
    console.log('lets get directions');
    // get req to server for map view
    //   need enpoint from api
    //   should send address of plant
  }

  // gets location of current user https://www.w3schools.com/html/html5_geolocation.asp
  // need to find a way to get cordinates/location in Mapview.
  //    May moved function to MapView component
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      x.innerHTML = 'Geolocation is not supported by this browser.';
    }
  }

  // THIS IS CLOSE TO WORKING BUT NOT QUITE FUNCTIONAL
  favoriteButton() {
    console.log('favorite button clicked');
    // const { userId } = this.state;
    // const { plantId } = this.props;
    // post request to server
    //  add plant to users favs
    //  send user id + plant id
    // axios.put('/user/favorite', { userId, plantId })
    axios({
      method: 'put',
      url: '/likes',
      data: {
        iduser: '1' || this.state.userId,
        idplant: '1' || this.state.idplant,
      },
    })
      .then((res) => { console.log(res); })
      .catch((err) => { console.log(err); });
  }

  deleteButton() {
    console.log('delete button clicked');
    // const { userId } = this.state;
    // const { plantId } = this.props;
    // axios.post('/user/delete', { userId, plantId })
    //   .then(() => console.log('plant removed'))
    //   .catch((err) => { console.log('could not delete plant', err); });
  }

  toggleButton() {
    console.log('toggle button clicked');
    // const { userId } = this.state;
    // const { plantId } = this.props;
    // axios.post('/user/toggle', { userId, plantId })
    //   .then(() => console.log('plant toggled'))
    //   .catcch((err) => { console.log(`${err} in toggling plant`); });
  }

  showPosition(position) {
    // x.innerHTML = 'Latitude: ' + position.coords.latitude +
    // '<br>Longitude: ' + position.coords.longitude;
  }
  // linebreak isnt working in the temp lit
  // `Latitude: ${position.coords.latitude}
  // Longitude: ${position.coords.longitude}`;

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          title={this.props.plant.title}
        />
        <CardMedia
          className={classes.media}
          image={this.props.plant.image_url}
          title={this.props.plant.title}
        />
        <CardContent>
          <Typography component="p">
            {this.props.plant.description}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites" onClick={this.favoriteButton}>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="delete this plant" onClick={this.deleteButton}>
            <DeleteOutlinedIcon className={classes.icon} />
          </IconButton>
          <IconButton aria-label="toggle on and off" onClick={this.toggleButton}>
            {/* <Toggle style={iconStyles} color={red500} hoverColor={greenA200} /> */}
            <FavoriteIcon />
          </IconButton>
          <NavLink to="/plantLocation" style={{ textDecoration: 'none' }}>
            <Button variant="contained" onClick={this.getLocation} className={classes.button}>
                Get Directions
            </Button>
          </NavLink>
          
          {/* <IconButton aria-label="Add to favorites" onClick={this.favoriteButton}>
            
          </IconButton> */}
        </CardActions>
      </Card>
    );
  }
}

// ViewPlantProfile.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(ViewPlantProfile);

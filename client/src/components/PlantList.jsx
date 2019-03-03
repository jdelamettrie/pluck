import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { Route, Redirect } from 'react-router-dom';
import ViewPlantProfile from './ViewPlantProfile.jsx';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

class PlantList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.plants, // list of plants in a specific zip
      favorites: [],
    };
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: `/user/favorites?iduser=${this.props.userId}`,
    }).then((result) => {
      this.setState({
        favorites: result.data,
      });
    }).catch((err) => {
      console.log(err);
    });
  }

  // Pass down to ViewPlantProfile to render grid
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {this.state.data.map(plant => <ViewPlantProfile userId={this.props.userId} plant={plant} key={plant.id} liked={_.includes(_.map(this.state.favorites, favorite => favorite.id), plant.id)} favorites={this.state.favorites} />)
      }
      </div>
    );
  }
}

PlantList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PlantList);

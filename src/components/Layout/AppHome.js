import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        maxWidth: 345,
        marginBottom: 15
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
};

function AppHome(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image="https://report.migros.ch/2017/_/img/modules/placeholder-PieChart.png"
                    title="Conversion Data"
                />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        Conversion Data
                    </Typography>
                    <Typography component="p">
                        Click learn more to see your conversion for the last month
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
            <Card className={classes.card}>
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        App Update
                    </Typography>
                    <Typography component="p">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, mollitia.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

AppHome.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppHome);
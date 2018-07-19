import React from "react";
import PropTypes from "prop-types";
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import NewReleases from '@material-ui/icons/NewReleases';
import OpenInBrowser from '@material-ui/icons/OpenInBrowser';


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

function QuoteCard(props) {
    const {classes} = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <IconButton>
                            <NewReleases />
                        </IconButton>
                        <Typography>
                            {props.driver}
                        </Typography>
                        <Typography>
                            {props.mobiletel}
                        </Typography>
                        <Typography>
                            {props.email}
                        </Typography>
                        <IconButton>
                            <OpenInBrowser />
                        </IconButton>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

QuoteCard.propTypes = {
    driver: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(QuoteCard);
import React from "react";
import PropTypes from "prop-types";
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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
                        <Typography variant="headline" component="h3">
                            {props.driver}
                        </Typography>
                        {props.mobiletel} | {props.email}
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
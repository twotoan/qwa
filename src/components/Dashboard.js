import React from 'react';
import QuoteList from "./QuoteList";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const quotes = [
    {id: 1, name: "Leanne Graham"},
    {id: 2, name: "Ervin Howell"},
    {id: 3, name: "Clementine Bauch"},
    {id: 4, name: "Patricia Lebsack"}
];

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

function Dashboard(props) {
    const {classes} = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    Header
                </Grid>
                <Grid item xs={3}>
                    123456
                </Grid>
                <Grid item xs={9}>
                    <QuoteList quotes={quotes}/>
                </Grid>
            </Grid>
        </div>
    );
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
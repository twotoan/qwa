import React, {Component} from 'react';
import Drawer from '@material-ui/core/Drawer';
import Navigation from "./Navigation";


class Sidebar extends Component {
    state = {
        left: false
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {

        return (
            <div>
                <span onClick={this.toggleDrawer('left', true)}>Menu</span>
                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        <Navigation />
                    </div>
                </Drawer>
            </div>
        );
    }
}

export default Sidebar;
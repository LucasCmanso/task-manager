import React from 'react';
import { IconButton } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import MobileMenuStyles from './styles';


const ITEM_HEIGHT = 48;


export default function MobileMenu() {

    const styles = MobileMenuStyles();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={styles.navStylesMobile}>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
            >
                <MenuItem key="dash" selected onClick={handleClose}>
                    DashBoard
                </MenuItem>
                <MenuItem key="dash" onClick={handleClose}>
                    Calendar
                </MenuItem>
                <MenuItem key="dash" onClick={handleClose}>
                    Insight
                </MenuItem>
                <MenuItem key="dash" onClick={handleClose}>
                    Settings
                </MenuItem>
            </Menu>
        </div>
    )
}
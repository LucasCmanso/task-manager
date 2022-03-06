import React from 'react';
import { Card, Grid, Link, Typography } from '@mui/material';

import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import useMediaQuery from '@mui/material/useMediaQuery';
import MobileMenu from '../MobileMenu';

import SidebarStyles from './styles';


export default function Sidebar() {

    const matches = useMediaQuery('(min-width:600px)');

    const styles = SidebarStyles();

    return ( 
        <Card elevation={3} className={styles.sidebarStyles}>

            <Grid container
                component="nav"
                direction="column"
                spacing={2}
                className={styles.gridStyles}>

                <Grid item>
                    <Typography className={styles.logoStyles} variant="h6">
                        <TaskAltIcon className={styles.iconStylesLogo} color="primary" /> Task Manager
                    </Typography>
                </Grid>

                {matches &&
                    <>
                        <Grid item>
                            <Link className={styles.linkStyles} href="#">
                                <DashboardOutlinedIcon className={styles.iconStyles} fontSize="small" />
                                Dashboard
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link className={styles.linkStyles} href="#">
                                <CalendarTodayOutlinedIcon className={styles.iconStyles} fontSize="small" />Calendar
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link className={styles.linkStyles} href="#">
                                <InsightsOutlinedIcon className={styles.iconStyles} fontSize="small" />Insight
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link className={styles.linkStyles} href="#">
                                <SettingsApplicationsOutlinedIcon className={styles.iconStyles} fontSize="small" />Settings
                            </Link>
                        </Grid>
                    </>
                }


                {!matches &&
                    <>
                        <Grid item>
                            <MobileMenu />
                        </Grid>
                    </>
                }
            </Grid>

        </Card>
    )
}
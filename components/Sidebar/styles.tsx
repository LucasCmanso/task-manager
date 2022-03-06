import { makeStyles } from '@mui/styles';


const SidebarStyles = makeStyles(() => ({
    sidebarStyles: {
        width: '20vw',
        height: '100vh',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        display: 'flex',
        flexDirection: 'column',
    },
    iconStyles: {
        marginRight: '0.5rem',
    },
    iconStylesLogo: {
        fontSize: 40
    },
    logoStyles: {
        display: 'flex',
        fontSize: 24
    },
    linkStyles: {
        display: 'flex',
        marginTop: '1em',
        textDecoration: 'none'
    },
    navStyles: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
        justifyItems: 'center',
        marginTop: '3rem'
    },

    gridStyles: {
        padding: '1rem'
    },

    "@media (max-width: 1150px)": {
        logoStyles: {
            fontSize: 18
        },
    },

    "@media (max-width: 800px)": {
        logoStyles: {
            fontSize: 16
        },
    },

    "@media (max-width: 900px)": {
        iconStylesLogo: {
            fontSize: 24
        }
    },
    "@media (max-width: 600px)": {
        iconStylesLogo: {
            fontSize: 18
        },
        logoStyles: {
            fontSize: 14,
            justifyContent: 'flex-start',
            marginLeft: '1rem'
        },
        sidebarStyles: {
            width: '100%',
            height: 'auto',
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0
        },
        gridStyles: {
            padding: '0.5rem'
        }
    },
}));


export default SidebarStyles;
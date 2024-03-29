import React, { Fragment, useRef, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import {connect} from 'react-redux'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Drawer,
  List,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Hidden,
  Tooltip,
  Box,
  withStyles,
  isWidthUp,
  withWidth,
  Grid
} from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ImageIcon from "@material-ui/icons/Image";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import MenuIcon from "@material-ui/icons/Menu";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import MessagePopperButton from "./MessagePopperButton";
import SideDrawer from "./SideDrawer";
import Balance from "./Balance";
import NavigationDrawer from "../../../shared/components/NavigationDrawer";
import {signout} from '../../../services/connectToServer'
import {deleteAuthorizationCookies} from '../../../util/common_utils'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {emtStores} from '../../../store/action'
import DescriptionIcon from '@material-ui/icons/Description';

const styles = (theme) => ({
  appBar: {
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.common.white,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginLeft: 0,
    },
  },
  appBarToolbar: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
  },
  accountAvatar: {
    backgroundColor: theme.palette.secondary.main,
    height: 24,
    width: 24,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(1.5),
      marginRight: theme.spacing(1.5),
    },
  },
  drawerPaper: {
    height: "100%vh",
    whiteSpace: "nowrap",
    border: 0,
    width: theme.spacing(7),
    overflowX: "hidden",
    marginTop: theme.spacing(8),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
    backgroundColor: theme.palette.common.black,
  },
  smBordered: {
    [theme.breakpoints.down("xs")]: {
      borderRadius: "50% !important",
    },
  },
  menuLink: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
  iconListItem: {
    width: "auto",
    borderRadius: theme.shape.borderRadius,
    paddingTop: 11,
    paddingBottom: 11,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  colorbox: {
    width: "10px",
    height: "10px",
    display: "inline-block",
    backgroudColor: "#ccc",
    position: "absolute",
    left: "5px",
    top: "5px"
},
  textPrimary: {
    color: theme.palette.primary.main,
  },
  mobileItemSelected: {
    backgroundColor: `${theme.palette.primary.main} !important`,
  },
  brandText: {
    fontFamily: "'Baloo Bhaijaan', cursive",
    fontWeight: 400,
  },
  username: {
    paddingLeft: 0,
    paddingRight: theme.spacing(2),
  },
  justifyCenter: {
    justifyContent: "center",
  },
  permanentDrawerListItem: {
    justifyContent: "center",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
   bottomPush: {
    position: "fixed",
    bottom: 0,
    textAlign: "center",
    paddingBottom: 10,
}
});



function NavBar(props) {
  const { selectedTab, messages, classes, width, openAddBalanceDialog } = props;
  // Will be use to make website more accessible by screen readers
  const links = useRef([]);
  const bottomLinks = useRef([]);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);

  const openMobileDrawer = useCallback(() => {
    setIsMobileOpen(true);
  }, [setIsMobileOpen]);

  const closeMobileDrawer = useCallback(() => {
    setIsMobileOpen(false);
  }, [setIsMobileOpen]);

  const openDrawer = useCallback(() => {
    setIsSideDrawerOpen(true);
  }, [setIsSideDrawerOpen]);

  const closeDrawer = useCallback(() => {
    setIsSideDrawerOpen(false);
  }, [setIsSideDrawerOpen]);


  const logOut=async()=>{
    console.log("log out")
    const signOutRes=await signout();
    if([200,204].includes(signOutRes.status))
    {
     props.emtStores()
     deleteAuthorizationCookies();
    
    }
    else
    {
        const exception=true;
    }
  }

  const bottomMenuItems=[ {
   
    name: "Logout",
    onClick:logOut,
    icon: {
      desktop: (
        <ExitToAppIcon className="text-white" style={{color:"red"}} fontSize="large" />
      ),
      mobile: <ExitToAppIcon className="text-white" />,
    },
  },];

  const menuItems = [
    
    {
      link: "/home/files",
      name: "Files",
      onClick: closeMobileDrawer,
      icon: {
        desktop: (
          <DescriptionIcon
            className={
              selectedTab === "Posts" ? classes.textPrimary : "text-white"
            }
            fontSize="small"
          />
        ),
        mobile: <ImageIcon className="text-white" />,
      },
    },
    {
      link: "/home/accounts",
      name: "Accounts",
      onClick: closeMobileDrawer,
      icon: {
        desktop: (
          <AccountBoxIcon
            className={
              selectedTab === "Subscription"
                ? classes.textPrimary
                : "text-white"
            }
            fontSize="small"
          />
        ),
        mobile: <AccountBalanceIcon className="text-white" />,
      },
    },
   
  ];
  return (
    <Fragment>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar className={classes.appBarToolbar}>
          <Box display="flex" alignItems="center">
            <Hidden smUp>
              <Box mr={1}>
                <IconButton
                  aria-label="Open Navigation"
                  onClick={openMobileDrawer}
                  color="primary"
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Hidden>
            <Hidden xsDown>
              <Typography
                variant="h4"
                className={classes.brandText}
                display="inline"
                color="primary"
              >
                Digy- 
              </Typography>
              <Typography
                variant="h4"
                className={classes.brandText}
                display="inline"
                color="secondary"
              >
                Coffer
              </Typography>
            </Hidden>
          </Box>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            width="100%"
          >
            {isWidthUp("sm", width) && (
              <Box mr={3}>
                {/* <Balance
                  balance={2573}
                  openAddBalanceDialog={openAddBalanceDialog}
                /> */}
              </Box>
            )}
            <MessagePopperButton messages={messages} />
            <ListItem
              disableGutters
              className={classNames(classes.iconListItem, classes.smBordered)}
            >
        
            </ListItem>
          </Box>
        </Toolbar>
      </AppBar>
      <Hidden xsDown>
        <Drawer //  both drawers can be combined into one for performance
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          open={false}
        >
        <Grid
  container
  item
  direction="column"
  justify="space-between"
  alignItems="stretch"
  flex
  xs={11}
>
          <Grid item container flex>
          <List>
            {menuItems.map((element, index) => (
              <Link
                to={element.link}
                className={classes.menuLink}
                onClick={element.onClick}
                key={index}
                ref={(node) => {
                  links.current[index] = node;
                }}
              >
                <Tooltip
                  title={element.name}
                  placement="right"
                  key={element.name}
                >
                  <ListItem
                    selected={selectedTab === element.name}
                    button
                    divider={index !== menuItems.length - 1}
                    className={classes.permanentDrawerListItem}
                    onClick={() => {
                      links.current[index].click();
                    }}
                    aria-label={
                      element.name === "Logout"
                        ? "Logout"
                        : `Go to ${element.name}`
                    }
                  >
                    <ListItemIcon className={classes.justifyCenter}>
                      {element.icon.desktop}
                    </ListItemIcon>
                  </ListItem>
                </Tooltip>
              </Link>

             
            ))}
          </List>
          </Grid>
          <Grid item >
          <List>
            {bottomMenuItems.map((element, index) => (
              <Link
                to={element.link}
                className={classes.menuLink}
                onClick={element.onClick}
                key={index}
                ref={(node) => {
                  bottomLinks.current[index] = node;
                }}
              >
                <Tooltip
                  title={element.name}
                  placement="right"
                  key={element.name}
                >
                  <ListItem
                    selected={selectedTab === element.name}
                    button
                    divider={index !== menuItems.length - 1}
                    className={classes.permanentDrawerListItem}
                    onClick={() => {
                      bottomLinks.current[index].click();
                    }}
                    aria-label={
                      element.name === "Logout"
                        ? "Logout"
                        : `Go to ${element.name}`
                    }
                  >
                    <ListItemIcon className={classes.justifyCenter}>
                      {element.icon.desktop}
                    </ListItemIcon>
                  </ListItem>
                </Tooltip>
              </Link>

             
            ))}
          </List>
          </Grid>
          </Grid>
        </Drawer>
      </Hidden>
      <NavigationDrawer
        menuItems={menuItems.map((element) => ({
          link: element.link,
          name: element.name,
          icon: element.icon.mobile,
          onClick: element.onClick,
        }))}
        bottomMenuItems={bottomMenuItems.map((element) => ({
          link: element.link,
          name: element.name,
          icon: element.icon.mobile,
          onClick: element.onClick,
        }))

        }
        anchor="left"
        open={isMobileOpen}
        selectedItem={selectedTab}
        onClose={closeMobileDrawer}
      />
    </Fragment>
  );
}

NavBar.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedTab: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  openAddBalanceDialog: PropTypes.func.isRequired,
};

export default withWidth()(withStyles(styles, { withTheme: true })(connect(null,{emtStores})(NavBar)));

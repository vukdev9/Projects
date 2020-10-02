import React, { useState } from "react";
import { Link } from "react-router-dom";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import PeopleIcon from "@material-ui/icons/Group";
import ListIcon from "@material-ui/icons/List";
import PersonIcon from "@material-ui/icons/Person";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";
import ImageIcon from "@material-ui/icons/Image";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import DialogPassword from "../DialogPassword/DialogPassword";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { logOut } from "../../service/registerService";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      marginLeft: "10%",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: { marginRight: "20px" },
  icon: {
    borderRadius: "50%",
    backgroundColor: "white",
    color: "#2196F3",
  },
  clickIcon: {
    marginRight: "10px",
  },
  dropdownIcon: {
    marginRight: "5px",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const Header = ({ applyFilter, showFeedButton, notification }: any) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<any>(null);
  const [anchorFeed, setAnchorFeed] = useState<any>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<any>(null);
  const [dialog, setDialog] = useState<boolean>(false);
  const history = useHistory();

  const isMenuOpen = Boolean(anchorEl);
  const isFeedOpen = Boolean(anchorFeed);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (
    event: React.MouseEvent<HTMLElement>
  ): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleFeedMenuOpen = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorFeed(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setAnchorFeed(null);
    handleMobileMenuClose();
  };

  const handleDialogClose = () => {
    setDialog(false);
  };

  const handleMobileMenuOpen = (event: {
    currentTarget: React.SetStateAction<null>;
  }) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const LogOutUser = () => {
    logOut();
    history.push("/");
  };

  const openPasswordDialog = () => {
    setDialog(true);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link to="/profile" className={classes.link}>
        <MenuItem>
          <PersonIcon className={classes.clickIcon} />
          Profile
        </MenuItem>
      </Link>
      <MenuItem onClick={openPasswordDialog}>
        <LockOpenIcon className={classes.clickIcon} />
        Change Password
      </MenuItem>
      <MenuItem onClick={LogOutUser}>
        <PowerSettingsNewIcon className={classes.clickIcon} />
        Sign out
      </MenuItem>
    </Menu>
  );

  const feedId = "primary-search-account-menu";
  const renderFeed = (
    <Menu
      anchorEl={anchorFeed}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={feedId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isFeedOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => applyFilter("video")}>
        <VideoLibraryIcon className={classes.dropdownIcon} />
        Video
      </MenuItem>
      <MenuItem onClick={() => applyFilter("image")}>
        <ImageIcon className={classes.dropdownIcon} />
        Image
      </MenuItem>
      <MenuItem onClick={() => applyFilter("text")}>
        <ChromeReaderModeIcon className={classes.dropdownIcon} />
        Text
      </MenuItem>
      <MenuItem onClick={() => applyFilter("")}>
        <ChromeReaderModeIcon className={classes.dropdownIcon} />
        All
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton color="inherit">
          <Badge color="secondary">
            <MailOutlineIcon />
          </Badge>
        </IconButton>
        <p>Message</p>
      </MenuItem>
      <MenuItem onClick={handleFeedMenuOpen}>
        <IconButton color="inherit">
          <Badge color="secondary">
            <ListIcon />
          </Badge>
        </IconButton>
        <p>Feed</p>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
          <Badge color="secondary">
            <PeopleIcon />
          </Badge>
        </IconButton>
        <p>Users</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <PersonIcon />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{ backgroundColor: "#2196F3" }}>
        <Toolbar>
          <Link
            to="/posts"
            style={{
              marginLeft: "10%",
              textDecoration: "none",
              color: "white",
              width: "80px",
              cursor: "pointer",
            }}
          >
            <Typography className={classes.title} variant="h6" noWrap>
              BitBook
            </Typography>
          </Link>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton className={classes.button} color="inherit">
              <Link to="/message" className={classes.link}>
                <Badge badgeContent={notification} color="secondary">
                  <MailOutlineIcon className={classes.icon} />
                </Badge>
              </Link>
            </IconButton>
            {showFeedButton && (
              <IconButton
                className={classes.button}
                color="inherit"
                onClick={handleFeedMenuOpen}
                aria-controls={feedId}
              >
                <Badge color="secondary">
                  <ListIcon className={classes.icon} />
                </Badge>
              </IconButton>
            )}
            <IconButton color="inherit" className={classes.button}>
              <Link to="/users" className={classes.link}>
                <Badge color="secondary">
                  <PeopleIcon className={classes.icon} />
                </Badge>
              </Link>
            </IconButton>
            <IconButton
              className={classes.button}
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <PersonIcon className={classes.icon} />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={() => handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {renderFeed}
      {dialog && <DialogPassword resetDialog={() => handleDialogClose()} />}
    </div>
  );
};

export default Header;

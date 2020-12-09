import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Icon } from "react-icons-kit";
import { compass } from "react-icons-kit/ikons/compass";
import { map } from "react-icons-kit/ikons/map";
import LanguageToggle from "./LanguageToggle";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {
  toggleDropDown,
  setCenter,
  setFountainData,
} from "./redux/actions/viewActions";
import { boroughs } from "./mapStyles";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
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

export default function PrimarySearchAppBar() {
  const { dropDown, language } = useSelector((state) => state.viewState);

  const history = useHistory();

  const dispatch = useDispatch();

  const handleChange = async (e) => {
    dispatch(toggleDropDown(dropDown));
    const { lat, lng } = boroughs[e.target.value];
    dispatch(setCenter({ lat, lng }));
    // set zoom

    const boroughFountains = await fetch(
      `/fountains/${boroughs[e.target.value].borough}`
    );
    const parsed = await boroughFountains.json();
    console.log(parsed);
    dispatch(setFountainData(parsed.data));
    history.push("/");
  };

  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={() => {
              dispatch(toggleDropDown());
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Eau-bot
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton color="inherit">
              <Icon icon={compass} size={30} />
            </IconButton>
            <IconButton color="inherit">
              <Icon icon={map} size={30} />
            </IconButton>
            <LanguageToggle />
          </div>
          <div className={classes.sectionMobile}>
            <IconButton color="inherit">
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <DropDownMenu view={dropDown}>
        <label for="boroughs">
          {language === "français"
            ? "Choissisez une arrondissement"
            : "Choose a borough"}
        </label>
        <select name="boroughs" onChange={handleChange} autoFocus={true}>
          {Object.values(boroughs).map((item) => {
            return <option value={item.id}>{item.borough}</option>;
          })}
        </select>
      </DropDownMenu>
    </div>
  );
}

const DropDownMenu = styled.div`
  position: absolute;
  top: 7.5vh;
  left: 0;
  width: 100vw;
  height: 25vh;
  background-color: rgba(150, 191, 246, 0.75);
  border-bottom: 2px white solid;
  visibility: ${(props) => (props.view ? "visible" : "hidden")};
`;

/* <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton> */

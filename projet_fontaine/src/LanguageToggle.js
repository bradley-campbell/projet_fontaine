import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { setCenter, setLanguage } from "./redux/actions/viewActions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const LanguageToggle = () => {
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state.viewState);
  const classes = useStyles();

  const toggleLanguage = () => {
    const updatedLanguage = language === "français" ? "english" : "français";
    dispatch(setLanguage(updatedLanguage));
  };

  return (
    <div className={classes.root}>
      <ButtonGroup
        size="small"
        variant="contained"
        color="primary"
        aria-label="contained primary button group"
      >
        <Button
          className="languageToggle"
          onClick={toggleLanguage}
          disabled={language === "français"}
        >
          FR
        </Button>
        <Button
          className="languageToggle"
          onClick={toggleLanguage}
          disabled={language === "english"}
        >
          EN
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default LanguageToggle;

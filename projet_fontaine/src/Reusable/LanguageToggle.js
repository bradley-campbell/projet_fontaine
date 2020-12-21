import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../redux/actions/viewActions";

const useStyles = makeStyles((theme) => ({ // Styles used by Material UI element
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
    dispatch(setLanguage(updatedLanguage)); // Sets language in Redux store so that all components will display copy in the correct language
  };

  return (
    <div className={classes.root}>
      <ButtonGroup
        size="small"
        variant="contained"
        color="primary"
        aria-label="contained primary button group" // Aria-label necessary for accessibility/screen readers
      >
        <Button
          className="languageToggle"
          onClick={toggleLanguage}
          disabled={language === "français"} // Button disabled for active language, only one button may be enabled at a time
          aria-label="Set language to french"
        >
          FR
        </Button>
        <Button
          className="languageToggle"
          onClick={toggleLanguage}
          disabled={language === "english"}
          aria-label="Set language to english"
        >
          EN
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default LanguageToggle;

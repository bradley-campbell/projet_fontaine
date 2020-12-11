import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import styled from "styled-components";
import { boroughs } from "./mapStyles";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCenter,
  setFountainData,
  setZoom,
  toggleDropDown,
} from "./redux/actions/viewActions";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: window.innerWidth > 768 ? 400 : "80vw",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const BoroughSelect = () => {
  const classes = useStyles();
  const { language, dropDown } = useSelector((state) => state.viewState);
  const dispatch = useDispatch();

  const handleChange = async (e) => {
    if (e.target.value === "All") {
      const allResults = await fetch(`/all`);
      const parsed = await allResults.json();
      dispatch(setFountainData(parsed.data));
      // window.innerWidth > 768 && dispatch(toggleDropDown(dropDown));
      return;
    }

    const { lat, lng } = boroughs[e.target.value];
    dispatch(setCenter({ lat, lng }));

    const boroughFountains = await fetch(
      `/fountains/${boroughs[e.target.value].borough}`
    );
    const parsed = await boroughFountains.json();
    dispatch(setFountainData(parsed.data));
    // window.innerWidth > 768 && dispatch(toggleDropDown(dropDown));
    dispatch(setZoom(13));
  };

  return (
    <>
      <FormWrapper className="desktop">
        <FormControl className={classes.formControl} onChange={handleChange}>
          <InputLabel shrink id="placeholder share your feedback">
            {language === "français"
              ? "Choissisez une arrondissement"
              : "Choose a borough"}
          </InputLabel>
          <Select
            labelId="select feedback"
            id="select feedback"
            onChange={handleChange}
            displayEmpty
            className={classes.selectEmpty}
          >
            <MenuItem value="All">
              <em>
                {language === "français" ? "Tous les resultats" : "All Results"}
              </em>
            </MenuItem>
            {Object.values(boroughs).map((item) => {
              return (
                <MenuItem key={item.id} value={item.id}>
                  {item.borough}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </FormWrapper>
    </>
  );
};

export default BoroughSelect;

const FormWrapper = styled.div`
  background-color: blue;
  padding: 5px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
`;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { boroughs } from "./mapStyles";
import { setCenter, setFountainData } from "./redux/actions/viewActions";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Footer = () => {
  const classes = useStyles();
  const { language } = useSelector((state) => state.viewState);
  const dispatch = useDispatch();

  const handleChange = async (e) => {
    // dispatch(toggleDropDown(dropDown));
    const { lat, lng } = boroughs[e.target.value];
    dispatch(setCenter({ lat, lng }));

    const boroughFountains = await fetch(
      `/fountains/${boroughs[e.target.value].borough}`
    );
    const parsed = await boroughFountains.json();
    console.log(parsed);
    dispatch(setFountainData(parsed.data));
  };

  return (
    <Wrapper>
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
          <MenuItem value="">
            <em>TODO</em>
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

      {/* <select name="boroughs" onChange={handleChange} autoFocus={true}>
        <option></option>
        {Object.values(boroughs).map((item) => {
          return <option value={item.id}>{item.borough}</option>;
        })}
      </select> */}
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 15vh;
  padding: 15px;
  border: 2px solid black;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

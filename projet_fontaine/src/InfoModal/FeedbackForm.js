import React, { useState } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useSelector } from "react-redux";
import { condition, boroughs } from "../mapStyles";
import { distance } from "../utils";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const FeedbackForm = () => {
  const classes = useStyles();
  const { language, selected, currentLocation } = useSelector(
    (state) => state.viewState
  );
  const [feedback, setFeedback] = useState("");

  const handleChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let boroughInfo;

    Object.values(boroughs).forEach((item) => {
      if (item.borough === selected.arrondissement) {
        boroughInfo = boroughs[item.id];
      }
    });

    const reqObj = {
      method: "POST",
      body: JSON.stringify({
        feedback: feedback,
        fountainData: selected,
        boroughInfo: boroughInfo,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    const result = await fetch("/posttweet", reqObj);
    const parsed = await result.json();
    console.log(parsed);
  };

  let distanceFrom = null;

  if (currentLocation) {
    distanceFrom = distance(
      currentLocation.lat,
      currentLocation.lng,
      selected.lat,
      selected.lng
    ).toFixed(3);
  }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <FormControl className={classes.formControl}>
          <InputLabel shrink id="placeholder share your feedback">
            {language === "français"
              ? "Donnez votre avis"
              : "Share your feedback"}
          </InputLabel>
          <Select
            labelId="select feedback"
            id="select feedback"
            value={feedback}
            onChange={handleChange}
            displayEmpty
            className={classes.selectEmpty}
          >
            <MenuItem value="">
              <em></em>
            </MenuItem>
            {Object.values(condition).map((item) => {
              return (
                <MenuItem key={item.id} value={item.FR}>
                  {language === "français" ? item.FR : item.EN} {item.rating}
                </MenuItem>
              );
            })}
          </Select>
          <button
            type="submit"
            disabled={distanceFrom > 1 || !feedback || !currentLocation}
          >
            {distanceFrom > 1 ? "Too Far" : "Submit"}
          </button>
          {distanceFrom > 1 && <div>Too far away</div>}
        </FormControl>
      </form>
    </Wrapper>
  );
};

export default FeedbackForm;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

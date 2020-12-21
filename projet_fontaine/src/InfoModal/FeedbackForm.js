import React, { useState } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useDispatch, useSelector } from "react-redux";
import { condition, boroughs } from "../mapStyles";
import { distance } from "../utils";
import { AiFillWarning } from "react-icons/ai";
import moment from "moment";
import { handleSubmit } from "./handleSubmit";
import { setSelected } from "../redux/actions/viewActions";

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
  const [feedback, setFeedback] = useState({});
  const dispatch = useDispatch();

  const handleChange = (event) => {
    // Once user selects feedback, state is updated with feedback + current date
    setFeedback({ data: event.target.value, date: moment().format("D/MM/YY") });
  };

  let distanceFrom = null;

  if (currentLocation) {
    // If user's current location is available, distance from selected marker is assigned to distanceFrom variable
    distanceFrom = distance(
      currentLocation.lat,
      currentLocation.lng,
      selected.lat,
      selected.lng
    ).toFixed(3);
  }

  return (
    <Wrapper>
      <Form
        onSubmit={(e) => {
          handleSubmit(e, boroughs, selected, feedback); // PATCH and POST requests called in handleSubmit to add feedback to DB and to tweet feedback
          dispatch(setSelected(null)); // Selected is set to null after feedback submission and modal is closed - may change this to add a message after submission
        }}
      >
        <FormControl className={classes.formControl}>
          <InputLabel shrink id="feedbackLabel">
            {language === "français"
              ? "Donnez votre avis"
              : "Share your feedback"}
          </InputLabel>

          <Select
            labelId="select feedback"
            id="select feedback"
            value={feedback.data}
            onChange={handleChange}
            displayEmpty
            className={classes.selectEmpty}
          >
            <MenuItem value="">
              <em></em>
            </MenuItem>
            {Object.values(condition).map((item) => {
              return (
                <MenuItem key={item.id} value={item}>
                  {language === "français" ? item.FR : item.EN} {item.rating}
                </MenuItem>
              );
            })}
          </Select>
          <FormSubmit
            type="submit"
            disabled={distanceFrom > 1 || !feedback || !currentLocation} // If user is more than 1 Km away from selected marker or has not shared their location, feedback submission is disabled
          >
            {language === "français" ? "Valider" : "Submit"}
          </FormSubmit>
          {distanceFrom > 1 && ( // If user is more than 1 Km from selected marker, there is a warning message letting them know they are too far away
            <Warning>
              <span>
                <AiFillWarning />{" "}
                {language === "français"
                  ? "Vous êtes trop loin"
                  : "You are too far away"}
              </span>
            </Warning>
          )}
        </FormControl>
      </Form>
    </Wrapper>
  );
};

export default FeedbackForm;

const Wrapper = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
`;

const Warning = styled.div`
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;

  span {
    font-size: 12px;
  }
`;

const Form = styled.form``;

const FormSubmit = styled.button`
  margin-top: 5px;
  background-color: #3f51b5;
  color: white;
  outline: none;
  cursor: pointer;
  padding: 2.5px;
  border-radius: 5px;
  border: none;

  :active,
  :disabled {
    background-color: #e0e0e0;
  }
`;

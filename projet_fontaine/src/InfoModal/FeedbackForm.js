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
import { handleSubmit } from "./handlers";
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
    setFeedback({ data: event.target.value, date: moment().format("D/MM/YY") });
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
      <Form
        onSubmit={(e) => {
          handleSubmit(e, boroughs, selected, feedback);
          dispatch(setSelected(null));
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
            disabled={distanceFrom > 1 || !feedback || !currentLocation}
          >
            {language === "français" ? "Valider" : "Submit"}
          </FormSubmit>
          {distanceFrom > 1 && (
            <Warning>
              <AiFillWarning />{" "}
              {language === "français" ? "Trop Loin" : "Too Far"}
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
`;

const Form = styled.form`
  @media only screen and (max-width: 768px) {
    width: "80%";
  }
`;

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

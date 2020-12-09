import React, { useState } from "react";
import styled from "styled-components";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useSelector } from "react-redux";
import { condition } from "../mapStyles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const FeedbackForm = () => {
  const classes = useStyles();
  const { language } = useSelector((state) => state.viewState);
  const [feedback, setFeedback] = useState("");

  const handleChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(feedback);
    // FETCH post - update DB + send tweet
  };

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
              <em>TODO</em>
            </MenuItem>
            {Object.values(condition).map((item) => {
              return (
                <MenuItem key={item.id} value={item.FR}>
                  {language === "français" ? item.FR : item.EN}{" "}
                  {item.rating}
                </MenuItem>
              );
            })}
          </Select>
          <button type="submit">Submit</button>
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

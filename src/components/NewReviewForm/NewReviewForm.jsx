import React, { useReducer } from "react";
import { Button } from "../Button/Button";
import { Rating } from "../Rating/Rating";


const initialValue = {
  name: "",
  text: "",
  rating: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setName": {
      return { ...initialValue, name: action.payload };
    }
    case "setText": {
      return { ...state, text: action.payload };
    }
    case "setRating": {
      return { ...state, rating: action.payload };
    }
    default:
      return state;
  }
};

export const NewReviewForm = () => {
  const [formValue, dispatch] = useReducer(reducer, initialValue);

  const submit = () => {
    console.log(Object.values(formValue).join(" "));
  };

  return (
    <div>
      <div>
        <label>Name</label>
        <input
          value={formValue.name}
          onChange={({ target: { value } }) =>
            dispatch({ type: "setName", payload: value })
          }
        />
      </div>
      <div>
        <label>Text</label>
        <input
          value={formValue.text}
          onChange={({ target: { value } }) =>
            dispatch({ type: "setText", payload: value })
          }
        />
      </div>
      <div>
        <label>Rating</label>
        {/* <input
          type="number"
          value={formValue.rating}
          onChange={({ target: { value } }) =>
            dispatch({ type: "setRating", payload: value })
          }
        /> */}
        <Rating size={'l'} value={formValue.rating} onChange={(value) => dispatch({ type: "setRating", payload: value })
          }></Rating>
      </div>
      <Button
        onClick={submit}
        disabled={!formValue.name || !formValue.text || !formValue.rating}
      >
        Submit
      </Button>
    </div>
  );
};

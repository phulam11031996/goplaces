import * as React from "react";
import { AirbnbRating } from "@rneui/base";

const CustomRating = (props) => {
  return (
    <AirbnbRating
      count={props.count}
      defaultRating={props.defaultRating}
      isDisabled={props.isDisabled}
      onFinishRating={(val) => {
        props.getPreference(props.label, val);
      }}
      size={props.size}
      reviewSize
    />
  );
};
export default CustomRating;

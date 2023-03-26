import * as React from "react";
import { AirbnbRating } from "@rneui/base";

const CustomRating = (props) => {
  return (
    <AirbnbRating
      count={5}
      defaultRating={1}
      onFinishRating={(val) => console.log(val)}
      size={20}
      reviewSize
    />
  );
};
export default CustomRating;

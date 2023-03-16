import React from "react";

import { List, Text } from "components";

const DesktopOneDaysoftheweek = (props) => {
  return (
    <>
      <div className={props.className}>
        <List
          className="sm:flex-col flex-row gap-[10px] grid grid-cols-3 sm:w-[100%] w-[42%]"
          orientation="horizontal"
        >
          <div className="flex items-center justify-start sm:ml-[0] px-[7px] w-[100%]">
            <Text
              className="font-inter font-semibold text-black_900 text-center tracking-[0.16px] uppercase w-[auto]"
              as="h6"
              variant="h6"
            >
              {props?.weekday}
            </Text>
          </div>
          <div className="flex items-center justify-start sm:ml-[0] px-[5px] w-[100%]">
            <Text
              className="font-inter font-semibold text-black_900 text-center tracking-[0.16px] uppercase w-[auto]"
              as="h6"
              variant="h6"
            >
              {props?.weekday}
            </Text>
          </div>
          <div className="flex items-start justify-start sm:ml-[0] px-[3px] w-[100%]">
            <Text
              className="font-inter font-semibold text-black_900 text-center tracking-[0.16px] uppercase w-[auto]"
              as="h6"
              variant="h6"
            >
              {props?.weekday}
            </Text>
          </div>
        </List>
        <div className="flex items-center justify-start sm:ml-[0] ml-[7px] sm:w-[100%] w-[auto]">
          <Text
            className="font-inter font-semibold text-black_900 text-center tracking-[0.16px] uppercase w-[auto]"
            as="h6"
            variant="h6"
          >
            {props?.weekday}
          </Text>
        </div>
        <List
          className="sm:flex-col flex-row gap-[10px] grid grid-cols-3 sm:ml-[0] ml-[7px] sm:w-[100%] w-[42%]"
          orientation="horizontal"
        >
          <div className="flex items-center justify-start w-[100%]">
            <Text
              className="font-inter font-semibold text-black_900 text-center tracking-[0.16px] uppercase w-[auto]"
              as="h6"
              variant="h6"
            >
              {props?.weekday}
            </Text>
          </div>
          <div className="flex items-center justify-start px-[10px] w-[100%]">
            <Text
              className="font-inter font-semibold text-black_900 text-center tracking-[0.16px] uppercase w-[auto]"
              as="h6"
              variant="h6"
            >
              {props?.weekday}
            </Text>
          </div>
          <div className="flex items-center justify-start w-[100%]">
            <Text
              className="font-inter font-semibold text-black_900 text-center tracking-[0.16px] uppercase w-[auto]"
              as="h6"
              variant="h6"
            >
              {props?.weekday}
            </Text>
          </div>
        </List>
      </div>
    </>
  );
};

DesktopOneDaysoftheweek.defaultProps = {
  weekday: "Sunday",
  weekday: "Monday",
  weekday: "Tuesday",
  weekday: "Wednesday",
  weekday: "Thursday",
  weekday: "Friday",
  weekday: "Saturday",
};

export default DesktopOneDaysoftheweek;

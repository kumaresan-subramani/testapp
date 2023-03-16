import React from "react";

import { Text } from "components";

const DesktopOneMonthname = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-inter font-medium text-black_900 text-center tracking-[5.40px] uppercase w-[auto]"
          as="h5"
          variant="h5"
        >
          {props?.march}
        </Text>
      </div>
    </>
  );
};

DesktopOneMonthname.defaultProps = { march: "March" };

export default DesktopOneMonthname;

import React from "react";

const variantClasses = {
  h1: "font-medium sm:text-[48px] md:text-[48px] text-[64px]",
  h2: "font-medium sm:text-[26px] md:text-[28px] text-[30px]",
  h3: "sm:text-[20px] md:text-[22px] text-[24px]",
  h4: "sm:text-[18px] md:text-[20px] text-[22px]",
  h5: "text-[18px]",
  h6: "text-[16px]",
  body1: "font-medium text-[14.42px]",
  body2: "text-[14px]",
  body3: "font-normal text-[12px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

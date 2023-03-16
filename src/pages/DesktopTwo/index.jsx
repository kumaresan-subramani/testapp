import React from "react";

import Sidebar from "components/Sidebar";
import { Text, Button, Img, Line } from "components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import DesktopOneMonthname from "components/DesktopOneMonthname";
import DesktopOneMonth31days from "components/DesktopOneMonth31days";
import DesktopOneDaysoftheweek from "components/DesktopOneDaysoftheweek";

const DesktopTwoPage = () => {
  return (
    <>
      <div className="bg-gray_50 flex font-inter items-center justify-end mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start w-[100%]">
          <div className="h-[1086px] md:px-[20px] relative md:w-[100%] w-[7%]">
            <Sidebar className="absolute bg-green_400 flex flex-col md:hidden inset-y-[0] justify-start left-[0] my-[auto] w-[63%]" />
            <div className="absolute bg-gray_50 flex items-start justify-end p-[8px] right-[0] rounded-[29px] top-[12%] w-[95%]">
              <div className="bg-deep_orange_300 h-[38px] md:ml-[0] ml-[8px] mt-[4px] rounded-[50%] w-[38px]"></div>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[7px] md:mt-[0] mt-[47px] md:px-[20px] md:w-[100%] w-[57%]">
            <div className="flex sm:flex-col flex-row md:gap-[40px] items-end justify-between w-[100%]">
              <Text
                className="sm:mt-[0] mt-[8px] text-black_900 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Overview
              </Text>
              <Button
                className="bg-gray_200_d8 cursor-pointer flex items-center justify-center min-w-[340px] pl-[20px] pr-[17px] py-[10px] rounded-[6px] w-[auto]"
                rightIcon={
                  <div className="h-[16px] ml-[13px] w-[16px] bg-gray_400 my-[5px]">
                    <Img
                      src="images/img_arrowdown.svg"
                      className=""
                      alt="arrow_down"
                    />
                  </div>
                }
              >
                <div className="font-normal leading-[normal] md:text-[20px] not-italic sm:text-[18px] text-[22px] text-black_900 text-left">
                  Academic Year 2020-2021
                </div>
              </Button>
            </div>
            <div className="bg-white_A700 flex items-center justify-end mt-[53px] p-[19px] rounded-[12px] shadow-bs w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between mt-[8px] md:w-[100%] w-[98%]">
                <div className="flex flex-col gap-[9px] items-center justify-start md:w-[100%] w-[12%]">
                  <Img
                    src="images/img_varlk12x.png"
                    className="h-[118px] md:h-[auto] object-cover w-[118px]"
                    alt="varlk12x"
                  />
                  <Text
                    className="font-light text-black_900 text-left w-[auto]"
                    variant="body2"
                  >
                    Student Profile
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start md:w-[100%] w-[77%]">
                  <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                    <Text
                      className="font-light text-gray_700 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Student Name
                    </Text>
                    <Text
                      className="font-light text-gray_700 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Class & Section
                    </Text>
                    <Text
                      className="font-light text-gray_700 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Class Roll No.
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start mt-[4px] md:w-[100%] w-[90%]">
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Hariharan
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] ml-[226px] not-italic text-black_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      2 A
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] ml-[301px] not-italic text-black_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      33
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-between mt-[35px] md:w-[100%] w-[99%]">
                    <Text
                      className="font-light text-gray_700 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Date of Birth
                    </Text>
                    <Text
                      className="font-light text-gray_700 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Admission No.
                    </Text>
                    <Text
                      className="font-light text-gray_700 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Blood Group
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start mt-[3px] md:w-[100%] w-[90%]">
                    <Text
                      className="font-normal md:mt-[0] mt-[2px] not-italic text-black_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      15 May 2010
                    </Text>
                    <Text
                      className="font-normal mb-[2px] md:ml-[0] ml-[196px] not-italic text-black_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      10955
                    </Text>
                    <Text
                      className="font-normal mb-[2px] md:ml-[0] ml-[271px] not-italic text-black_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      A+
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[33px] md:w-[100%] w-[62%]">
                    <Text
                      className="font-light text-gray_700 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Parent Name
                    </Text>
                    <Text
                      className="font-light text-gray_700 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Parent Mobile No.
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[4px] md:w-[100%] w-[60%]">
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Hari
                    </Text>
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      3636393639
                    </Text>
                  </div>
                  <Text
                    className="font-light mt-[36px] text-gray_700 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Address
                  </Text>
                  <Text
                    className="font-normal mt-[6px] not-italic text-black_900 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    21/1 XYZ Street, Chennai
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start mt-[58px] w-[100%]">
              <div className="bg-gray_400 h-[25px] md:mt-[0] my-[2px] rounded-[12px] w-[25px]"></div>
              <Text
                className="font-semibold md:ml-[0] ml-[19px] text-black_900 text-left w-[auto]"
                as="h3"
                variant="h3"
              >
                Attendance
              </Text>
              <Text
                className="font-light md:ml-[0] ml-[735px] text-gray_500 text-left w-[auto]"
                as="h3"
                variant="h3"
              >
                {"View Details >"}
              </Text>
            </div>
            <div className="flex md:flex-col flex-row gap-[33px] items-center justify-between mt-[13px] w-[100%]">
              <div className="bg-white_A700 flex md:flex-1 items-start justify-end p-[28px] sm:px-[20px] rounded-[12px] shadow-bs md:w-[100%] w-[75%]">
                <div className="flex flex-col gap-[13px] justify-start md:ml-[0] ml-[50px] mt-[28px] md:w-[100%] w-[78%]">
                  <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start w-[100%]">
                    <Text
                      className="sm:mt-[0] mt-[61px] not-italic rotate-[90deg] text-gray_700 text-left w-[auto]"
                      variant="body3"
                    >
                      DAYS
                    </Text>
                    <Text
                      className="font-normal sm:ml-[0] ml-[2px] not-italic text-black_900 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      30
                    </Text>
                    <div className="md:h-[140px] h-[156px] sm:ml-[0] ml-[29px] relative sm:w-[100%] w-[90%]">
                      <div className="absolute h-[140px] inset-x-[0] mx-[auto] top-[0] sm:w-[100%] w-[98%]">
                        <Img
                          src="images/img_vector6.svg"
                          className="h-[51px] mx-[auto] w-[auto]"
                          alt="vectorSix"
                        />
                        <div
                          className="absolute bg-cover bg-no-repeat flex h-[100%] inset-[0] items-start justify-center m-[auto] p-[6px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_group37.png')",
                          }}
                        >
                          <div className="flex sm:flex-col flex-row sm:gap-[20px] items-end justify-start md:ml-[0] ml-[27px] mr-[auto] md:w-[100%] w-[80%]">
                            <Line className="bg-gray_900_75 h-[121px] sm:h-[1px] sm:mt-[0] mt-[6px] sm:w-[100%] w-[1px]" />
                            <Line className="bg-gray_900_75 h-[121px] sm:h-[1px] sm:ml-[0] ml-[73px] sm:mt-[0] mt-[6px] sm:w-[100%] w-[1px]" />
                            <Line className="bg-gray_900_75 h-[114px] sm:h-[1px] sm:ml-[0] ml-[80px] sm:mt-[0] mt-[13px] sm:w-[100%] w-[1px]" />
                            <Line className="bg-gray_900_75 sm:h-[1px] h-[95px] sm:ml-[0] ml-[80px] sm:mt-[0] mt-[32px] sm:w-[100%] w-[1px]" />
                            <Line className="bg-gray_900_75 h-[127px] sm:h-[1px] sm:ml-[0] ml-[77px] sm:w-[100%] w-[1px]" />
                            <Line className="bg-gray_900_75 sm:h-[1px] h-[90px] sm:ml-[0] ml-[77px] sm:mt-[0] mt-[37px] sm:w-[100%] w-[1px]" />
                          </div>
                        </div>
                      </div>
                      <Text
                        className="absolute bottom-[0] font-normal left-[18%] not-italic text-black_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Feb
                      </Text>
                      <Text
                        className="absolute bottom-[0] font-normal left-[4%] not-italic text-black_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Jan
                      </Text>
                      <Text
                        className="absolute bottom-[0] font-normal left-[33%] not-italic text-black_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Mar
                      </Text>
                      <Text
                        className="absolute bottom-[0] font-normal inset-x-[0] mx-[auto] not-italic text-black_900 text-left w-[max-content]"
                        as="h6"
                        variant="h6"
                      >
                        Apr
                      </Text>
                      <Text
                        className="absolute bottom-[0] font-normal not-italic right-[30%] text-black_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Jun
                      </Text>
                      <Text
                        className="absolute bottom-[0] font-normal not-italic right-[16%] text-black_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Jul
                      </Text>
                      <Text
                        className="absolute bottom-[0] font-normal not-italic right-[0] text-black_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Aug
                      </Text>
                      <Line className="absolute bg-gray_900_75 h-[114px] inset-y-[0] my-[auto] right-[3%] w-[1px]" />
                    </div>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[293px] not-italic text-gray_700 text-left w-[auto]"
                    variant="body3"
                  >
                    MONTH
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start md:w-[100%] w-[23%]">
                <div className="bg-white_A700 h-[120px] md:h-[74px] p-[21px] sm:px-[20px] relative rounded-[12px] shadow-bs w-[100%]">
                  <CircularProgressbar
                    className="!w-[74px] absolute h-[74px] inset-y-[0] my-[auto] overflow-visible right-[10%]"
                    value={35}
                    strokeWidth={15}
                    styles={{
                      trail: { strokeWidth: 15, stroke: "#99ffa3" },
                      path: {
                        strokeLinecap: "square",
                        height: "100%",
                        transformOrigin: "center",
                        transform: "rotate(72deg)",
                        stroke: "#dedede",
                      },
                    }}
                  ></CircularProgressbar>
                  <Text
                    className="absolute bottom-[38%] font-medium font-roboto right-[19%] text-gray_800 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    75%
                  </Text>
                  <Text
                    className="absolute font-inter font-normal left-[12%] not-italic text-gray_701 text-left top-[18%]"
                    as="h5"
                    variant="h5"
                  ></Text>
                  <Text
                    className="absolute bottom-[18%] font-inter font-normal left-[12%] not-italic text-black_900 text-left w-[auto]"
                    variant="body2"
                  >
                    75/100 Classes
                  </Text>
                </div>
                <div className="bg-white_A700 flex items-start justify-end p-[21px] sm:px-[20px] rounded-[12px] shadow-bs w-[100%]">
                  <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[8px] mr-[auto] md:w-[100%] w-[85%]">
                    <div className="flex flex-col font-inter gap-[20px] items-start justify-start w-[auto]">
                      <Text
                        className="font-medium text-gray_701 text-left"
                        as="h5"
                        variant="h5"
                      ></Text>
                      <Text
                        className="font-normal not-italic text-black_900 text-left w-[auto]"
                        variant="body2"
                      >
                        Absents
                      </Text>
                    </div>
                    <Text
                      className="font-roboto text-gray_401 text-left w-[auto]"
                      as="h1"
                      variant="h1"
                    >
                      4
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col justify-start md:ml-[0] ml-[65px] md:px-[20px] md:w-[100%] w-[33%]">
            <div className="bg-green_400 flex items-center justify-start p-[34px] sm:px-[20px] w-[100%]">
              <div className="flex flex-col gap-[53px] items-end justify-start mb-[22px] md:w-[100%] w-[90%]">
                <div className="flex flex-row gap-[22px] items-center justify-end ml-[auto] md:w-[100%] w-[24%]">
                  <div
                    className="bg-cover bg-no-repeat flex h-[42px] items-end justify-start w-[32%]"
                    style={{ backgroundImage: "url('images/img_group38.svg')" }}
                  >
                    <div className="bg-deep_orange_301 border-[1px] border-blue_50 border-solid h-[13px] mb-[22px] mt-[3px] rounded-[6px] w-[13px]"></div>
                  </div>
                  <Img
                    src="images/img_varlk12x.png"
                    className="h-[60px] md:h-[auto] object-cover w-[60px]"
                    alt="varlk12x_One"
                  />
                </div>
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <div className="bg-gradient  p-[1px] rounded-[12px] w-[100%] ">
                    <div className="bg-white_A700_cc border-solid flex items-center justify-start rounded-[12px] shadow-bs2">
                      <div className="flex flex-col items-center justify-end mt-[29px] w-[100%]">
                        <Text
                          className="text-black_900 text-center w-[auto]"
                          variant="body1"
                        >
                          2021
                        </Text>
                        <DesktopOneMonthname
                          className="flex flex-col items-center justify-start mt-[4px] md:w-[100%] w-[auto]"
                          march="March"
                        />
                        <div className="h-[301px] md:h-[316px] mt-[18px] relative w-[100%]">
                          <div className="absolute flex h-[max-content] inset-[0] items-center justify-center m-[auto] w-[100%]">
                            <DesktopOneMonth31days className="flex flex-col items-center justify-start p-[32px] sm:px-[20px] rounded-[20px] w-[100%]" />
                          </div>
                          <DesktopOneDaysoftheweek className="absolute flex flex-row inset-x-[0] items-center justify-start mx-[auto] top-[0] sm:w-[100%] w-[90%]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="font-semibold mt-[58px] text-black_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Timetable
                  </Text>
                  <Text
                    className="font-light md:ml-[0] ml-[4px] mt-[5px] text-gray_700 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Monday, 30 March 2021
                  </Text>
                  <div className="bg-red_50 flex items-start justify-end mt-[20px] p-[23px] sm:px-[20px] rounded-[7px] w-[100%]">
                    <div className="flex flex-row gap-[19px] items-center justify-start md:ml-[0] ml-[2px] mr-[auto] md:w-[100%] w-[46%]">
                      <div className="bg-deep_orange_301 h-[54px] rounded-[50%] w-[54px]"></div>
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-deep_orange_301 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Mathematics
                        </Text>
                        <Text
                          className="font-light text-deep_orange_301 text-left w-[auto]"
                          variant="body2"
                        >
                          8:00AM - 9:00AM
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple_50 flex flex-row gap-[19px] items-center justify-start mt-[34px] p-[23px] sm:px-[20px] rounded-[7px] w-[100%]">
                    <div className="bg-gray_501 h-[54px] ml-[2px] rounded-[50%] w-[54px]"></div>
                    <div className="md:h-[27px] h-[41px] relative w-[27%]">
                      <Text
                        className="absolute font-medium left-[0] text-gray_501 text-left top-[0] w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        English
                      </Text>
                      <Text
                        className="absolute bottom-[0] font-light inset-x-[0] mx-[auto] text-gray_501 text-left w-[max-content]"
                        variant="body2"
                      >
                        9:00AM - 10:00AM
                      </Text>
                    </div>
                  </div>
                  <div className="bg-teal_50 flex flex-row gap-[19px] items-center justify-start mt-[34px] p-[23px] sm:px-[20px] rounded-[7px] w-[100%]">
                    <div className="bg-bluegray_400 h-[54px] ml-[2px] rounded-[50%] w-[54px]"></div>
                    <div className="md:h-[27px] h-[41px] relative w-[28%]">
                      <Text
                        className="absolute font-medium left-[0] text-bluegray_400 text-left top-[0] w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Biology
                      </Text>
                      <Text
                        className="absolute bottom-[0] font-light inset-x-[0] mx-[auto] text-bluegray_400 text-left w-[max-content]"
                        variant="body2"
                      >
                        10:00AM - 11:00AM
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-deep_orange_301 h-[54px] md:ml-[0] ml-[87px] mr-[491px] mt-[2px] rounded-[50%] w-[54px]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopTwoPage;

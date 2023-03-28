import React from "react";
import { useState, use } from "react";
import icon1 from "../asset/Icon (1).png";
import icon2 from "../asset/Icon (3).png";
import icon3 from "../asset/Icon (4).png";
import icon4 from "../asset/Icon (5).png";
import icon5 from "../asset/Icon (6).png";
import icon6 from "../asset/Icon (7).png";
import Content from "../asset/Content.png";
import setting from "../asset/setting.png";
import Avatar from "../asset/Avatar.png";

const tabs = [
  {
    title: "General Info",

    icon: (
      <div className="">
        {" "}
        <img src={icon1} />{" "}
      </div>
    ),
    AvtiveIcone: (
      <div>
        {" "}
        <img src={icon2} />{" "}
      </div>
    ),
  },

  {
    title: "General Info",

    icon: (
      <div>
        {" "}
        <img src={icon5} />{" "}
      </div>
    ),
    AvtiveIcone: (
      <div>
        {" "}
        <img src={icon6} />{" "}
      </div>
    ),
  },

  {
    title: "General Info",

    icon: (
      <div>
        {" "}
        <img src={icon3} />{" "}
      </div>
    ),
    AvtiveIcone: (
      <div>
        {" "}
        <img src={icon4} />{" "}
      </div>
    ),
  },
];

const SideBar = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => {
    setActiveTab(index);
  };

  const [selectTab, setselectTab] = useState("");

  return (
    <div className="">
      <div className="flex flex-col items-center bg-[#0B0B0B] h-[100vh] w-[100px] justify-between">
        <div>
          <div className="flex justify-center w-[100%] mt-4">
            <img src={Content} />
          </div>

          {tabs.map((tab, index) => (
            <div
              className="flex justify-center w-[100%]"
              key={index}
              onClick={() => {
                handleClick(index);
              }}
            >
              <div
                className={
                  index === activeTab
                    ? "flex p-[15px] w-[70px] h-[70px] mt-4 items-center rounded-[7px] bg-[#18181B] pointer"
                    : "flex p-[15px] w-[70px] h-[70px] mt-4 items-center rounded-[7px] hover:bg-[#18181B] pointer"
                }
              >
                {index === activeTab ? (
                  <>
                    {" "}
                    <div className="flex justify-center w-[100%]">
                      {tab.AvtiveIcone}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-center w-[100%]">
                      {tab.icon}
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="py-[15px]">
          <img className="mx-auto mb-[15px]" src={setting} />
          <img src={Avatar} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;

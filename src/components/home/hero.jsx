import { useTranslation } from "react-i18next";
import Button from "../ui/button";
import { PhoneInput } from "react-international-phone";
import toast from "react-hot-toast";
import { useState } from "react";
import "react-international-phone/style.css";
import axios from "axios";

function Hero() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "/api/requests/",
        { name, phone_number: phone, description: "" },
        { headers: { "Content-Type": "application/json" } }
      );
      toast.success(t("successMessage"))
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="flex px-5 min-[550px]:px-10 py-[10px] items-center hero min-[1000px]:h-[100vh]">
      <div className="max-w-[1200px] pt-[150px] mx-auto flex min-[1000px]:flex-row flex-col justify-between items-center gap-6 min-[600px]:gap-8 min-[1000px]:gap-[128px]">
        <div>
          <h1 className="text-white mb-3 min-[550px]:mb-6 text-[38px] min-[550px]:text-[56px] font-[600] leading-[120%]">
            {t("heroTitle")}
          </h1>
          <p className="text-[#FFFFFFCC] text-[18px] font-[500] leading-[150%]">
            {t("heroText")}
          </p>
        </div>
        <form
          onSubmit={onSubmit}
          className="bg-[#fff] rounded-[12px] p-6 min-[1000px]:max-w-[384px] w-full"
        >
          <h2 className="text-primary mb-2 font-[500] text-[22px] leading-[130%]">
            {t("formTitle")}
          </h2>
          <p className="text-secondary text-[18px] font-[500] leading-[150%] mb-6">
            {t("formText")}
          </p>
          <label htmlFor="name">
            <span className="text-secondary ml-[14px] font-[400] leading-[150%] text-[14px]">
              {t("name")}
            </span>
            <input
              type="text"
              placeholder={t("placeholderName")}
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              className="text-[18px] font-[500] leading-[150%] outline-none p-[14px] rounded-[8px] bg-[#F2F4F8] w-full mt-[6px] mb-6"
            />
          </label>
          <label htmlFor="phone">
            <span className="text-secondary ml-[14px] font-[400] leading-[150%] text-[14px]">
              {t("phone")}
            </span>
            <PhoneInput
              required
              defaultCountry="uz"
              value={phone}
              onChange={(e) => setPhone(e)}
              name="phone"
              className="text-[18px] font-[500] leading-[150%] outline-none p-[14px] rounded-[8px] bg-[#F2F4F8] w-full mt-[6px] mb-6"
            />
          </label>
          <Button type="submit" className={"w-full"} icon={false}>
            {t("send")}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Hero;

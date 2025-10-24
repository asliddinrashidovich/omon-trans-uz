import { useTranslation } from "react-i18next";
import Button from "../ui/button";
import { useState } from "react";
import axios from "axios";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import toast from "react-hot-toast";

function ContactSection() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "/api/requests/",
        { name, phone_number: phone, description },
        { headers: { "Content-Type": "application/json" } }
      );
      toast.success(t("successMessage"));
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <section
      id="contact"
      className="py-10 min-[550px]:py-20 px-5 min-[550px]:px-10 bg-white"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 min-[950px]:grid-cols-2 gap-6">
        <div className="flex w-full rounded-[12px] max-[650px]:h-[360px] max-[950px]:h-[500px] overflow-hidden">
          <img
            src="/images/img.png"
            className="object-cover max-[950px]:object-bottom-left w-full"
            alt="truck"
          />
        </div>
        <div className="flex flex-col p-6">
          <div className="flex items-center gap-2 mb-4">
            <img src="/images/Polygon.svg" alt="polygon" />
            <h6 className="header6 text-primary">{t("contact")}</h6>
          </div>
          <h2 className="header2 text-primary mb-6">{t("contactHeader")}</h2>
          <p className="paragraph-lg text-secondary mb-6">
            {t("haveQuestion")}
          </p>

          <form onSubmit={onSubmit} className=" w-full">
            <label htmlFor="name">
              <span className="text-secondary font-[400] leading-[150%] text-[16px]">
                {t("name")}
              </span>
              <input
                type="text"
                placeholder={t("placeholderName")}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-[18px] font-[500] leading-[150%] outline-none p-[14px] rounded-[8px] bg-[#F2F4F8] w-full mt-[6px] mb-6"
              />
            </label>
            <label htmlFor="phone">
              <span className="text-secondary font-[400] leading-[150%] text-[16px]">
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
            <label htmlFor="message">
              <span className="text-secondary font-[400] leading-[150%] text-[16px]">
                {t("comment")}
              </span>
              <textarea
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder={t("commentPlaceholder")}
                rows={6}
                className="text-[18px] font-[500] leading-[150%] outline-none p-[14px] rounded-[8px] bg-[#F2F4F8] w-full mt-[6px] mb-6"
              ></textarea>
            </label>
            <Button className={"max-[950px]:w-full"}>{t("send")}</Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

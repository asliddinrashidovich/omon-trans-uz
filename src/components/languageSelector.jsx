import { Select } from "antd";
import { useTranslation } from "react-i18next";

function LanguageSelector() {
    const { i18n } = useTranslation();
  return (
    <>
      <Select defaultValue={"uz"} onChange={(val) => i18n.changeLanguage(val)}>
        <Select.Option value="uz">UZB</Select.Option>
        <Select.Option value="ru">RUS</Select.Option>
        <Select.Option value="en">ENG</Select.Option>
      </Select>
    </>
  );
}

export default LanguageSelector;
import { useTranslation } from "react-i18next";
import { blog } from "../../data/data";
import { useNavigate } from "react-router-dom";

function Blog() {
    const {t} = useTranslation()
    const navigate = useNavigate()
  return (
    <div className="py-10 min-[600px]:py-20 px-5 min-[600px]:px-10 bg-white">
      <div className="max-w-[1335px] mx-auto pt-[90px]">
        <h2 className="header2 mb-10 text-primary text-center">{t("blog")}</h2>
        <div className="grid grid-cols-1 min-[550px]:grid-cols-2 min-[1000px]:grid-cols-3 gap-6">
            {blog.map(item => (
                <div key={item.id}>
                    <div className="rounded-[12px] mb-6">
                        <img src={item.img} className="w-full object-cover" alt="blog" />
                    </div>
                    <h4 onClick={() => navigate(`/blog/${item.id}`)} className="cursor-pointer header4 mb-4 text-primary">{t("transportNews")}</h4>
                    <div className="flex gap-2 items-center">
                        <img src="/images/blog/calendar.svg" alt="calendar" />
                        <p className="text-primary paragraph-lg">2023-2025</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;

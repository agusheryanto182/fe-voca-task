import { useLanguage } from "../../../contexts/LanguageContext";
import { Outlet } from "react-router-dom";
import { Language } from "../../atoms";

function MainLayout() {
  const { language, setLanguage } = useLanguage();
  return (
    <div>
      <Language language={language} setLanguage={setLanguage} />
      <Outlet />
    </div>
  );
}

export default MainLayout;

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import 'dayjs/locale/vi';
import 'dayjs/locale/ko';
import 'dayjs/locale/en';

dayjs.extend(utc);
dayjs.extend(timezone);

const Locales = ({ children }: { children: React.ReactNode }) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    dayjs.locale(i18n.language);
  }, [i18n.language]);

  return <>{children}</>;
};

export default Locales;

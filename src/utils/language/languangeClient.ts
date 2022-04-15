import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { SupportedLanguageEnum } from "utils/enums";
import { StringResources } from "./languageResource";

i18n.use(initReactI18next).init({
    resources: {
        [SupportedLanguageEnum[SupportedLanguageEnum.English]]: {
            translations: {
            },
        },
        [SupportedLanguageEnum[SupportedLanguageEnum.Croatian]]: {
            translations: {
            },
        },
    },
    fallbackLng: "English",
    debug: true,

    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
        escapeValue: false,
    },
});

export default i18n;

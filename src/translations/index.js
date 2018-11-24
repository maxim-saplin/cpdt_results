import en from './en';
import ru from './ru';
import fr from './fr';

const enLocale = "en";
const ruLocale = "ru";
const frLocale = "fr";
const langParam = "lang";

//Default texts
const translations = en;

//Must be executed before accesing the translations. Updates default texts with locale specific translations. If there's no translation, default text will be used
translations.init = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const param = urlParams.get(langParam);

    let lang = enLocale;

    if (param) {
        lang = param.toLocaleLowerCase();
    }
    else{
        lang = navigator.language.toLowerCase();
    }

    let locale;

    if (lang.includes(ruLocale)) {
        locale = ru;
    }
    else if (lang.includes(frLocale)) {
        locale = fr;
    }

    if (locale)
        Object.keys(translations).forEach((key) => {
            if (locale[key])
                translations[key] = locale[key];
        });
};

export default translations;
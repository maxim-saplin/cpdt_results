import en from './en';
import ru from './ru';
import fr from './fr';

const langParam = "lang";

//Default texts
const translations = en;

//Must be executed before accesing the translations. Updates default texts with locale specific translations. If there's no translation, default text will be used
translations.init = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const param = urlParams.get(langParam);

    let lang = this.enLocale;
    this.locale = lang;

    if (param) {
        lang = param.toLocaleLowerCase();
    }
    else{
        lang = navigator.language.toLowerCase();
    }

    let localeObj;

    if (lang.includes(this.ruLocale)) {
        localeObj = ru;
        this.locale = this.ruLocale;
    }
    else if (lang.includes(this.frLocale)) {
        localeObj = fr;
        this.locale = this.frLocale;
    }

    if (localeObj)
        Object.keys(translations).forEach((key) => {
            if (localeObj[key])
                translations[key] = localeObj[key];
        });
};

translations.enLocale = "en";
translations.ruLocale = "ru";
translations.frLocale = "fr";

export default translations;
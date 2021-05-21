import en from './en';
import ru from './ru';
import fr from './fr';
import zht from './zht';
import zh from './zh';

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
    else if (lang.includes(this.zhtLocale)) {
        localeObj = zht;
        this.locale = this.zhtLocale;
    }
    else if (lang.includes(this.zhLocale)) {
        localeObj = zh;
        this.locale = this.zhLocale;
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
translations.zhLocale = "zh";
translations.zhtLocale = "zht";

export default translations;
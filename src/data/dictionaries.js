import l18n from '../translations';

let platforms, tests;
const shortcutRegex = /[^\[]+(?=\])/;

function addShortcut(obj) {
  let match = obj.name.match(shortcutRegex);
  if (match && match.length === 1)
    obj.shortcut = match[0].toLowerCase();
}

function getEntities(items) {
  return items.map(i => {
      let obj = {
        key: i,
        name: l18n[i] ? l18n[i] : i,
        shortcut: null
      };
      addShortcut(obj);
      return obj;
    });
}

const dictionaries = 
{
  getTests : function(){
    if (!tests) tests = getEntities(this.data.tests);
    return tests;
  },  

  getPlatforms : function(){
      if (!platforms){
        platforms = getEntities(this.data.platforms);

        let keys = platforms.map(p => p.key);

        if (keys.length !== 3) console.log("Invalid number of platforms in DB, 3 supported, found "+keys.length);
        if (!keys.includes(this.Windows)) console.log("Windows platfrom not found in DB");
        if (!keys.includes(this.Android)) console.log("Android platfrom not found in DB");
        if (!keys.includes(this.macOS)) console.log("macOS platfrom not found in DB");
      }
      return platforms;
  }
}

dictionaries.seqWrite = "seqWrite";
dictionaries.seqRead = "seqRead";
dictionaries.randWrite = "randWrite";
dictionaries.randRead = "randRead";
dictionaries.memCopy = "memCopy";

dictionaries.Windows = "Windows";
dictionaries.Android = "Android";
dictionaries.macOS = "macOS";

export default dictionaries;
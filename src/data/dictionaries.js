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
      if (!platforms) platforms = getEntities(this.data.platforms);

      return platforms;
  }
}

export default dictionaries;
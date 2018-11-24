import dictionaries from './dictionaries';
import results from './results';

const db_version_url = "https://raw.githubusercontent.com/maxim-saplin/cpdt_results/master/Results_version.json";
const db_url = "https://raw.githubusercontent.com/maxim-saplin/cpdt_results/master/Results.json";
const db_version_sotrage_key = "cpdt_db_version";
const db_sotrage_key = "cpdt_db";

const db = {
    dictionaries : dictionaries,
    results : results,
    
    init: function (){
        let fetchVersion = () => {
            return new Promise (resolve => {
                fetch(db_version_url)
                .then(response => {
                    return response.json();
                })
                .then(result => {
                    storage.setItem(db_version_sotrage_key, result.v);
                    this.version = result.v;
                    resolve(result.v);
                });
            });
        };

        let fetchDb = () => {
            return new Promise (resolve => {
                fetch(db_url)
                .then(response => response.json())
                .then(result => {
                    storage.setItem(db_sotrage_key, JSON.stringify(result));
                    dictionaries.data = result;
                    results.data = result;
                    resolve(result);
                })
            });
        };
        
        let promise = null;

        let storage = window.localStorage;
        let data = storage.getItem(db_sotrage_key);
        if (data) {
          try { data = JSON.parse(data);} catch{};
          if (!data.results) data = null; // shallow check for corrupt data
        }
        let localDbVersion = storage.getItem(db_version_sotrage_key);

        if (data){
            promise = new Promise( resolve => {
                fetchVersion()
                .then(result => {
                    if (result !== localDbVersion){
                        fetchDb().then(result => resolve(result));                    
                    }
                    // local data is up to date
                    else{ 
                        dictionaries.data = data;
                        results.data = data;
                        resolve(data)
                    };
                });
            });
        }
        else{
            fetchVersion();
            promise = fetchDb();
        }

        return promise;
    },

    initFake: function() {
      dictionaries.data = {"results":[{"id":"1","device":"Xiaomi Mi8 SE","platfrom":"Android","deviceDetail":"Snapdragon 710, 64GB","deviceComment":"","deviceYear":"2018","dateTested":"23.10.2018","seqWrite":"110","seqRead":"299","randWrite":"18,9","randRead":"9,5","memCopy":"4,65"},{"id":"2","device":"Samsung Galaxy S9","platfrom":"Android","deviceDetail":"Exynos 9810, 64Gb","deviceComment":"","deviceYear":"2018","dateTested":"04.10.2018","seqWrite":"118","seqRead":"654","randWrite":"1,72","randRead":"14,43","memCopy":"12,7"},{"id":"3","device":"Essential Phone PH-1","platfrom":"Android","deviceDetail":"Snapdragon 835, 128GB","deviceComment":"","deviceYear":"2017","dateTested":"30.09.2018","seqWrite":"125","seqRead":"440","randWrite":"4,3","randRead":"17,4","memCopy":"6,6"},{"id":"4","device":"15\" MacBook Pro","platfrom":"macOS","deviceDetail":"macOS, APFS","deviceComment":"","deviceYear":"2018","dateTested":"03.10.2018","seqWrite":"1331,2","seqRead":"2088,96","randWrite":"75","randRead":"38","memCopy":"10,3"},{"id":"5","device":"15\" MacBook Pro","platfrom":"macOS","deviceDetail":"macOS, NTFS partition","deviceComment":"","deviceYear":"2018","dateTested":"03.10.2018","seqWrite":"730","seqRead":"694","randWrite":"27","randRead":"8","memCopy":"10,3"},{"id":"6","device":"15\" MacBook Pro","platfrom":"Windows","deviceDetail":"Windows 10 Bootcamp, NTFS","deviceComment":"","deviceYear":"2018","dateTested":"03.10.2018","seqWrite":"343","seqRead":"1617,92","randWrite":"0,5625","randRead":"11,01","memCopy":"8,5"},{"id":"7","device":"15\" MacBook Pro","platfrom":"Windows","deviceDetail":"Windows 10, VMWare Fusion, NTFS","deviceComment":"","deviceYear":"2018","dateTested":"03.10.2018","seqWrite":"850","seqRead":"2457,6","randWrite":"12","randRead":"29","memCopy":"5,8"}],"platforms":["Android", "macOS", "Windows"],"tests":["seqWrite", "seqRead", "randWrite", "randRead", "memCopy"]};
      results.data = dictionaries.data;
    }
};

export default db;
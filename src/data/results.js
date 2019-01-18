import l18n from '../translations';

const results = 
{
  addYourDeviceResult: function(yd){
    if (!yd.seqWrite && !yd.seqRead && !yd.randWrite && !yd.randRead && !yd.memCopy){
      console.log("Invaid 'Your device' data");
      return;
    }

    if (!yd.device) yd.device = l18n.yourDevice;

    yd.id = this.yourDeviceId;
    yd.deviceDetail = "";

    if (this.data.results[this.data.results.length-1].id === yd.id) this.data.results.pop();
    this.data.results.push(yd);
  },

  getResults: function(platfroms, test, device, excludeIds){
    let filters = [];

    filters.push(r => !r.hidden);
    
    if (platfroms && Array.isArray(platfroms)){
      filters.push(r => platfroms.includes(r.platform));
    }

    if (device){
      device = device.trim().toLowerCase();
      if (device) {
        if (device.length < 4)
          filters.push(r => r.device.toLowerCase().includes(device));
        else
          filters.push(r => r.device.toLowerCase().includes(device) || r.deviceDetail.toLowerCase().includes(device));
      }
    }

    if (excludeIds && excludeIds.length > 0){
      filters.push(r => !excludeIds.includes(r.id));
    }

    let result = this.data.results.filter(r => 
      {
        let condition = true;
        for (let i = 0; i < filters.length; i++){
          condition &= filters[i](r);
          if (!condition) return false;
        }

        return true;
      });

    if (test){
      result.sort(
        (a,b) => 
          b[test] - a[test]
        );
    }

    if (result.length > 0) this.lastResultId = result[0].id; else this.lastResultId = null;

    return result;
  },

  getResultById: function(id){
    if (id < 0 || id > this.data.results.length) return null;
    if (id === 0 && this.data.results[this.data.results.length-1].id === 0) return this.data.results[this.data.results.length-1];

    return this.data.results[id-1];
  },

  idExists: function(id){
    return this.getResultById(id) != null;
  },

  setPercents: function(results, test) {
    let maxVal = 0;
    for (let i = 0; i < results.length; i++){
      if (results[i][test] > maxVal) maxVal = results[i][test];
    }
    for (let i = 0; i < results.length; i++){
      results[i].percent = results[i][test]/maxVal;
    }
  },

  getLastResultId: function(){
    if (this.lastResultId) return this.lastResultId;
    return null;
  }
}

results.lastResultId = null;
results.yourDeviceId = 0;

export default results;
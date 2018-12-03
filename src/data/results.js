const results = 
{
  getResults: function(platfroms, test, device, excludeIds){
    let result = this.data.results;
    
    if (platfroms && Array.isArray(platfroms)){
      result = result.filter(r => platfroms.includes(r.platform));
    }

    if (device){
      device = device.trim().toLowerCase();
      if (device) result = result.filter(r => r.device.toLowerCase().includes(device));
    }

    if (excludeIds && excludeIds.length > 0){
      result = result.filter(r => !excludeIds.includes(r.id));
    }

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

    return this.data.results[id-1];
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

export default results;
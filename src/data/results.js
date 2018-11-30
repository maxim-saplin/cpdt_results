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
      if (result.length > 0){
        let maxVal = result[0][test];
        for (var i = 0; i < result.length; i++){
          result[i].percent = result[i][test]/maxVal;
        }
      }
    }

    if (result.length > 0) this.lastResultId = result[0].id; else this.lastResultId = null;

    return result;
  },

  getResultById: function(id){
    if (id < 0 || id > this.data.results.length) return null;

    return this.data.results[id-1];
  },

  getLastResultId: function(){
    if (this.lastResultId) return this.lastResultId;
    return null;
  }
}

results.lastResultId = null;

export default results;
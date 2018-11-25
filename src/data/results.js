const results = 
{
  getResults: function(platfroms, test, device){
    let result = this.data.results;
    
    if (platfroms && Array.isArray(platfroms)){
      result = result.filter(r => platfroms.includes(r.platform));
    }

    if (device){
      result = result.filter(r => r.device.toLowerCase().includes(device.toLowerCase()));
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

    return result;
  }
}

export default results;
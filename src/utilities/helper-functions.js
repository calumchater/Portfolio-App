

function calculateVariation(previous,current){
  return (((current-previous)/previous)*100)
}


function buildBarChartData(clickData,startDate,endDate){
  // downloads need to be added
  var dates = this.getDates(startDate,endDate);
  var data = [];
  for(var i=0; i<dates.length;i++){
    data[i] = {};
    data[i].name = dates[i];
    data[i].timeseries = 0;
    data[i].image_view = 0;
    for(var k=0;k<clickData.length;k++){
      if(clickData[k].date === data[i].name){
        if(clickData[k].product === 'timeseries'){
          data[i].timeseries = clickData[k].clicks;
        }
        if(clickData[k].product === 'image_view'){
          data[i].image_view = clickData[k].clicks;
        }
      }
    }
    if(i===0){
      data[i].total = data[i].image_view + data[i].timeseries;
    } else {
      data[i].total = data[i-1].total + data[i].image_view + data[i].timeseries;
    }
  }
  return data;
}


function buildPieChartData(clickData){
  // downloads need to be added. Also needs to be made generic if I want to add more piecharts, similar to the buildBarChartData function
  var pieProductValues = {timeseries: 0, image_view: 0};
  for(var i=0;i<clickData.length;i++){
    pieProductValues[clickData[i].product] += clickData[i].clicks;
  }
  var pieProductData = [
    {name: 'timeseries', value: pieProductValues.timeseries},
    {name: 'image_view', value: pieProductValues.image_view}];
  return pieProductData;
}

function buildISODateWithoutTime(date){
  date = new Date(date);
  return date.getFullYear() + '-' + ('0' + (date.getMonth()+1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
}

function addDays(nDays,currentDate) {
  var date = new Date(currentDate);
  date.setDate(date.getDate() + nDays);
  return date;
}

function getDates(startDate, stopDate) {
  var dateArray = [];
  var currentDate = startDate;
  while (currentDate <= stopDate) {
    dateArray.push(this.buildISODateWithoutTime(new Date(currentDate)));
    currentDate = this.addDays(1,currentDate);
  }
  return dateArray;
}

function buildStartMonth(date){
  return date.setDate(1);
}


const Helpers = {
  buildBarChartData,
  buildPieChartData,
  buildISODateWithoutTime,
  addDays,
  getDates,
  buildStartMonth,
  calculateVariation
}

export default Helpers;

import request from '../../libs/request';

import { DATA_URL } from '../../constants';

function getStocksForTimePeriod(date,company_name) {
  var route = '/';
  var route1='stocks/';
  var route2='/companies/';
  return request({
    route: `${route}`,
    url: `${route1}${date}${route2}${company_name}`,
    method: 'GET'
  }, DATA_URL);
}


const stocksApi = {
  getStocksForTimePeriod
}

export default stocksApi;

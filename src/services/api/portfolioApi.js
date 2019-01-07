import request from '../../libs/request';

import { DATA_URL } from '../../constants';

function getTotalStockValuation(username) {
  var route = '/portfolio/users/';
  
  return request({
    route: `${route}`,
    url: `${route}${username}`,
    method: 'GET'
  }, DATA_URL);
}


const portfolioApi = {
  getTotalStockValuation
}

export default portfolioApi;

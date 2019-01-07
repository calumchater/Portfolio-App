import request from '../../libs/request';

import { DATA_URL } from '../../constants';

function updateStockAmount(username,company_id,stock_amount) {
  let route = '/';
  let route1='favourites/users';
  let route2 = 'companies';

  return request({
    route: `${route}`,
    url: `${route1}${username}${route2}${company_id}${stock_amount}`,
    method: 'UPDATE'
  }, DATA_URL);
}


function getFavouritesByUsername(username) {
    let route='favourites/users';
  
    return request({
      route: `${route}`,
      url: `${route}${username}`,
      method: 'UPDATE'
    }, DATA_URL);
  }
  
/*
function postFavourites(username,company_id,stock_amount) {
    let route = '/';
    let route1='favourites/users';
    let route2 = 'companies';
  
    return request({
      route: `${route}`,
      url: `${route1}${username}${route2}${company_id}${stock_amount},`,
      method: 'UPDATE'
    }, DATA_URL);
  }
*/


const favouritesApi = {
  updateStockAmount,
  getFavouritesByUsername

}

export default favouritesApi;

import request from '../../libs/request';

import { DATA_URL } from '../../constants';

function getAllUsers() {
  let route = '/users';

  return request({
    route: `${route}`,
    url: `${route},`,
    method: 'GET'
  }, DATA_URL);
}


const usersApi = {
  getAllUsers
}

export default usersApi;

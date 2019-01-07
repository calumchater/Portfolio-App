import request from '../../libs/request';

import { DATA_URL } from '../../constants';


  function getAllCompanies() {
  let route = '/companies/';

  return request({
    route: `${route}`,
    url: `${route}`,
    method: 'GET'
  }, DATA_URL);
}

function getCompanyById(company_id) {
  let route = '/companies/';

  return request({
    route: `${route}`,
    url: `${route}${company_id}`,
    method: 'GET'
  }, DATA_URL);
}



const companiesApi = {
  getCompanyById,
  getAllCompanies
}

export default companiesApi;

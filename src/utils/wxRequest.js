import wepy from 'wepy';
import util from './util';
import md5 from './md5';

const TIMESTAMP = util.getCurrentTime();
const API_SECRET_KEY = 'www.mall.cycle.com';
const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase());
const wxRequest = async (params = {}, url) => {
  let data = params.query || {};
  data.sign = SIGN;
  data.time = TIMESTAMP;
  let res = await wepy.request({
    url: url,
    method: params.method || 'GET',
    data: data,
    header: { 'Content-Type': 'application/json' }
  });
  return res;
};
module.exports = {
  wxRequest
};

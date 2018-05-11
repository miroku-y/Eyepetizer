import { wxRequest } from '../utils/wxRequest';

//获取全部分类
const allCatetory = paramse =>
  wxRequest(
    paramse,
    'https://baobab.kaiyanapp.com/api/v4/tabs/selected?date=1522026000000&num=2&page=2'
  );

//获取tab切换的内容
const getContent = paramse =>
  wxRequest(
    paramse,
    'http://baobab.kaiyanapp.com/api/v5/index/tab/category/' +
      paramse.query.selectedId
  );

//获取详情
const getDetail = paramse =>
  wxRequest(paramse, 'http://baobab.kaiyanapp.com/api/v2/video/' + paramse.id);

module.exports = {
  allCatetory,
  getContent,
  getDetail
};

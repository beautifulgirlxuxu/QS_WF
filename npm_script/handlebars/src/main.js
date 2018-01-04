import $ from 'jquery';
// webpack一切皆可打包
import template from '../template/user.hbs';

const user = {
    name: '旅梦',
    age: 18,
    photo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515076276619&di=37f8fbabb94958c1fa663f8b6d19f9fc&imgtype=0&src=http%3A%2F%2Fimg2.3lian.com%2F2014%2Ff4%2F144%2Fd%2F100.jpg'
}
// console.log('ready');

$(function() {
    let item = $(template(user));
    item.appendTo($('#root'));
})

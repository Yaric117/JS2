'use strict'

const goods = [{
        title: 'Skiing',
        price: 900
    },
    {
        title: 'Helmet',
        price: 350
    },
    {
        title: 'Mask',
        price: 200
    },
    {
        title: 'Ski boots',
        price: 850
    },
];


const renderGoodsItem = (title = 'Product title', price = '0') => `<div class="goods-item"><img class='goods-item_img' src='no_image.jpeg' alt='img'><h3> ${title} </h3><p> ${price}$ </p></div>`;;
const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price)).join('');
    document.querySelector('.goods-list').innerHTML = goodsList;
}
renderGoodsList(goods);
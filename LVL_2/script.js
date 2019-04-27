'use strict'

// lesson 1

/* const goods = [{
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


const renderGoodsItem = (title = 'Product title', price = '0') => {
    return `<div class="goods-item">
<img class='goods-item_img' src="http://placehold.it/250x250" alt='img'>
<h3> ${title} </h3>
<p> ${price}$ </p></div>`;
}
const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price)).join('');
    document.querySelector('.goods-list').innerHTML = goodsList;
}
renderGoodsList(goods); */


//lesson 2

class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="goods-item">
        <img class='goods-item_img' src="http://placehold.it/200x200" alt='img'>
        <h3> ${this.title} </h3>
        <p> ${this.price}$ </p></div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }

    fetchGoods() {
        this.goods = [{
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
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }

    sum() {  //метод подсчета общей стоимости товаров
        let sum = 0;
        this.goods.forEach(item => {
            sum += item.price;
        });
        console.log(sum)

    }
};

//корзина 

class BasketItem { 
};

class BasketList {

};
//для корзины по сути все теже методы что и для товаров + плюс метод добавления товара в корзину, методы 
//подсчета кол-ва товаров и общей стоимости корзины



const list = new GoodsList();
list.fetchGoods();
list.render();
list.sum();

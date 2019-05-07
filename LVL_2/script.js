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

let products = [{
        id: 11,
        title: 'Skiing',
        price: 900
    },
    {
        id: 21,
        title: 'Helmet',
        price: 350
    },
    {
        id: 33,
        title: 'Mask',
        price: 200
    },
    {
        id: 45,
        title: 'Ski boots',
        price: 850
    },
];

class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="goods-item">
        <img class='goods-item_img' src="http://placehold.it/200x200" alt='img'>
        <h3> ${this.title} </h3>
        <p> ${this.price}$ </p>
        <button class='button'></button></div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }

    fetchGoods() {
        for (let i = 0; i < products.length; i++) {
            this.goods.push(products[i])
        }
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;

    }

    sum() {
        let sum = 0;
        this.goods.forEach(item => {
            sum += item.price;
        });
        console.log(sum)
    }
};

const list = new GoodsList();
list.fetchGoods();
list.render();



//basket

class BasketItem {
    constructor(title, sumprice, count) {
        this.title = title;
        this.sumprice = sumprice * count;
        this.count = count;
    }

    render() {
        return `<div>
        <h4> ${this.title} </h4 class='basket-elem'>
        <p class='basket_item'> ${this.sumprice}$:
        <button class='add'>+</button>
        <span class='basket_count'>(${this.count})</span>
        <button class='remove'>x</button></p>
        </div>`
    }
}

class BasketList {

    constructor() {
        this.goodlist = [];
        console.log(this.goodlist)
        this.click()
    }

    putProduct(prods, count, cb) {
        let search = this.goodlist.findIndex(elem => elem.id === prods.id)
        if (search === -1) {
            this.goodlist.push(prods)
            this.goodlist[this.goodlist.length - 1].count = count

        } else {
            this.goodlist[search].count += count
        }
        cb()
    }

    click() {
        for (let i = 0; i < products.length; i++) {
            let elem = document.querySelectorAll('.button')
            elem[i].addEventListener('click', () => {
                this.putProduct(products[i], 1, () => {
                    this.render()
                    this.totalNumber()
                    this.del(() => {
                        this.render()
                        this.totalNumber()
                    })
                    this.add(() => {
                        this.render()
                        this.totalNumber()
                    })
                })
            });
        }


        document.querySelector(".cart-button").addEventListener('click', () => {
            let elem = document.querySelector(".basket");
            let elem2 = document.querySelector(".close");
            elem.style.display = 'flex'
            elem2.style.display = 'flex'
        });

        document.querySelector(".close").addEventListener('click', () => {
            let elem = document.querySelector(".basket");
            let elem2 = document.querySelector(".close");
            elem.style.display = 'none'
            elem2.style.display = 'none'
        });


    }

    totalNumber() {
        let totalNumber = 0;
        for (let i = 0; i < this.goodlist.length; i++) {
            totalNumber += this.goodlist[i].count
        }
        document.querySelector('.counter').innerHTML = `(${totalNumber})`
    }

    del(cb) {
        let elem = document.querySelectorAll('.remove')
        for (let i = 0; i < elem.length; i++) {
            if (this.goodlist[i].count === 1) {
                elem[i].addEventListener('click', () => {
                    this.goodlist.splice(i, 1)
                    cb() //почему срабатывает только один раз????
                })

            } else {
                elem[i].addEventListener('click', () => {
                    this.goodlist[i].count -= 1
                    cb() //почему срабатывает только один раз????
                })
            }
        }
    }

    add(cb) {
        let elem = document.querySelectorAll('.add')
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener('click', () => {
                this.goodlist[i].count += 1
                cb() //почему срабатывает только один раз????
            })
        }
    }





    render() {
        let renderList = ''
        let sum = 0;
        this.goodlist.forEach(good => {
            sum += good.price * good.count
            const basketItem = new BasketItem(good.title, good.price, good.count)
            renderList += basketItem.render()
        })
        if (this.goodlist.length !== 0) {
            document.querySelector('.basket').innerHTML = `${renderList} <p class='basket_item'>Total:${sum}$</p>`;
        } else {
            document.querySelector('.basket').innerHTML = 'Корзина пуста';
        }
    }
};
const basket = new BasketList();
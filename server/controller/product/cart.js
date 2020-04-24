
module.exports = function Cart(oldCart) {
  this.items = oldCart.items || {};
  this.totalQty = oldCart.totalQty || 0;
  this.totalPrice = oldCart.totalPrice || 0;

  this.add = function (item, id) {
    let storedItem = this.items[id];

    if (!storedItem) {
      storedItem = this.items[id] = {
        item, qty: 0, price: 0, totpp: 0,
      };
    }
    storedItem.qty++;

    storedItem.price = storedItem.item[0].price;
    storedItem.totpp = storedItem.item[0].price * storedItem.qty;
    this.totalQty++;

    this.totalPrice += storedItem.price;
  };


  this.reduceByOne = function (id) {
    this.items[id].qty--;

    this.items[id].totpp -= this.items[id].price;

    this.totalQty--;
    this.totalPrice -= this.items[id].price;
    if (this.items[id].qty <= 0) {
      delete this.items[id];
    }
  };

  this.removeItem = function (id) {
    this.totalQty -= this.items[id].qty;
    this.totalPrice -= this.items[id].totpp;
    delete this.items[id];
  };
  this.generateArray = function () {
    const arr = [];
    for (const id in this.items) {
      arr.push(this.items[id]);
    }
    return arr;
  };
};

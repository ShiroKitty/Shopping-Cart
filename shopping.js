var start = new Vue({
    el: '#cart',
    data: {
        cartItems: 
        [
            {name: 'RimWorld', numOrdered: 0, price: 29.99, total: 0, imgSrc: 'http://cdn.akamai.steamstatic.com/steam/apps/294100/header.jpg?t=1484073238'},
            {name: 'Civilization VI', numOrdered: 0, price: 59.99, total: 0, imgSrc: 'http://cdn.akamai.steamstatic.com/steam/apps/289070/header.jpg?t=1510266672'},
            {name: 'Undertale', numOrdered: 0, price: 9.99, total: 0, imgSrc: 'http://cdn.akamai.steamstatic.com/steam/apps/391540/header.jpg?t=1503525486'},
            {name: 'Wasteland 2', numOrdered: 0, price: 39.99, total: 0, imgSrc: 'http://cdn.akamai.steamstatic.com/steam/apps/240760/header.jpg?t=1504032524'},
            {name: 'Star Wars: Knights of the Old Republic 2', numOrdered: 0, total: 0, price: 9.99, imgSrc: 'http://cdn.akamai.steamstatic.com/steam/apps/208580/header.jpg?t=1489550586'},
            {name: 'Stardew Valley', numOrdered: 0, price: 14.99, total: 0, imgSrc: 'http://cdn.akamai.steamstatic.com/steam/apps/413150/header.jpg?t=1493674185'}
        ]
    },
    methods: {
        addToCart(item){
            item.numOrdered++;
            item.total = item.numOrdered * item.price;
        },
        removeFromCart(item){
            item.numOrdered--;
            if(item.numOrdered >= 0){
                item.total = item.numOrdered * item.price;
            }
            if(item.numOrdered < 0){
                item.numOrdered = 0;
            }
        }
    }
});

window.addEventListener("load", function onLoad(){

});
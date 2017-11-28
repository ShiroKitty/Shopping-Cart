/**********************
 * Cart functionality *
 **********************/
var start = new Vue({
    el: '#cart',
    data: {
        totalCost: 0.00,
        cartItems: 
        [/*----------------------Beginning---------------------*/
            {
                name: 'RimWorld', 
                numOrdered: 0, 
                price: 29.99, 
                total: 0.00, 
                stock: 15,
                dStock: 15,
                imgSrc: 'images/rimworld.jpg'
            },
            {
                name: 'Civilization VI',
                numOrdered: 0,
                price: 59.99,
                total: 0.00,
                stock: 12,
                dStock: 12,
                imgSrc: 'images/civilization.jpg'
            },
            {
                name: 'Undertale', 
                numOrdered: 0, 
                price: 9.99, 
                total: 0.00, 
                stock: 30,
                dStock: 30,
                imgSrc: 'images/undertale.jpg'
            },
            {
                name: 'Wasteland 2', 
                numOrdered: 0, 
                price: 39.99, 
                total: 0.00, 
                stock: 12, 
                dStock: 12,
                imgSrc: 'images/wasteland.jpg'
            },
            {
                name: 'Star Wars: Knights of the Old Republic 2',
                numOrdered: 0, 
                total: 0.00, 
                price: 9.99,
                stock: 4,
                dStock: 4,
                imgSrc: 'images/starwars.jpg'
            },
            {
                name: 'Stardew Valley', 
                numOrdered: 0, 
                total: 0.00,
                price: 14.99,
                stock: 20,
                dStock: 20,
                imgSrc: 'images/stardew.jpg'
            }
        ]/*-------------------End of Object Array--------------------*/
    }, 
    methods: {
        addToCart(item){
            if(item.stock > 0){
                item.numOrdered++;
                item.total = item.numOrdered * item.price;
                item.total = item.total.toFixed(2);
                item.stock--;
                this.totalCost = parseFloat((this.totalCost + item.price).toFixed(2));
            }
            else if((item.numOrdered == 30)){
                alert("Really? You want more than 30 copies of Undertale? (-_-)");
            }
            else{
                alert("Looks like you won't be getting any more of these! (^_^)");
            }
        },
        removeFromCart(item){
            if((item.numOrdered > 0)){
                item.numOrdered--;
                item.total = item.numOrdered * item.price;
                item.total = item.total.toFixed(2);
                item.stock++; 
                this.totalCost = parseFloat((this.totalCost - item.price).toFixed(2));
            }
        },
        resetCart(){
            this.totalCost = 0;
            for (i = 0; i < this.cartItems.length; i++){
                this.cartItems[i].total = 0;
                this.cartItems[i].numOrdered = 0;
                this.cartItems[i].stock = this.cartItems[i].dStock;
            }
        }, 
        getCurrency(value){/* Formats price to appear as currency */
            var currency = '$' + ((value / 100) * 100).toFixed(2);
            //console.log(typeof(value));
            //console.log(value);
            return currency;
        }
    }
});

/*********************************
 * Vuejs code for theme swapping *
 *********************************/
var changeTheme = new Vue({
    el: '#title',
    methods: {
        steam(){
            var theme = "themes/cSteam.css";
            document.getElementById("cTheme").href = theme;
            document.cookie = 'themes/cSteam.css;'
        },
        steel(){
            var theme = "themes/cSteel.css";
            document.getElementById("cTheme").href = theme;
            document.cookie = 'themes/cSteel.css;';
        }
    }
});


//this loads the theme stored inside a cookie
window.addEventListener("load", function loadCookies(){
    var theme = document.cookie;
    if(theme.length > 0){
        document.getElementById("cTheme").href = theme;
    }
});
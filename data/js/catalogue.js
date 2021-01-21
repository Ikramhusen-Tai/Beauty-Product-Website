function showCatalogueItems(catalogue) {
    var allTitles = JSON.parse(localStorage.getItem("title")).title;
    var allPrices = JSON.parse(localStorage.getItem("price")).price;
    var allImages = JSON.parse(localStorage.getItem("images"));  
    var products = document.getElementById("product-view"); 

    var hairProducts = `<a class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
    <img name="hair-image" onclick="openProduct('hc0',0)" class=" product-view" src="`+ allImages.hc0 + `" width="auto"/>
    <div name="hair-title" class="product-info">`+ allTitles[0] + allPrices[0]+ `</div> 
    <button onclick="addToCart(0)" class="cart-button">Add To Cart</button>
    <button onclick="buyNow(0)" class="cart-button">Buy Now</button>
    </a>
    <a class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
    <img name="hair-image" onclick="openProduct('hc1',1)" class=" product-view" src="`+ allImages.hc1 + `" width="auto"/>
    <div name="hair-title" class="product-info">`+ allTitles[1] + allPrices[1] + `</div>  
    <button onclick="addToCart(1)" class="cart-button">Add To Cart</button>
    <button onclick="buyNow(1)" class="cart-button">Buy Now</button>
    </a>
    <a class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
    <img name="hair-image" onclick="openProduct('hc2',2)" class=" product-view" src="`+ allImages.hc2 + `" width="auto"/>
    <div name="hair-title" class="product-info">`+ allTitles[2] + allPrices[2] + `</div>
    <button onclick="addToCart(2)" class="cart-button">Add To Cart</button>
    <button onclick="buyNow(2)" class="cart-button">Buy Now</button>       
    </a>
    <a class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
    <img name="hair-image" onclick="openProduct('hc3',3)" class=" product-view" src="`+ allImages.hc3 + `" width="auto"/>
    <div name="hair-title" class="product-info">`+ allTitles[3] + allPrices[3] + `</div>
    <button onclick="addToCart(3)" class="cart-button">Add To Cart</button>
    <button onclick="buyNow(3)" class="cart-button">Buy Now</button> 
    </a>
    <a class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
    <img name="hair-image" onclick="openProduct('hc4',4)" class=" product-view" src="`+ allImages.hc4 + `" width="auto"/>
    <div name="hair-title" class="product-info">`+ allTitles[4] + allPrices[4] + `</div>
    <button onclick="addToCart(4)" class="cart-button">Add To Cart</button>
    <button onclick="buyNow(4)" class="cart-button">Buy Now</button>
    </a>
    <a class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
    <img name="hair-image" onclick="openProduct('hc5',5)" class=" product-view" src="`+ allImages.hc5 + `" width="auto"/>
    <div name="hair-title" class="product-info">`+ allTitles[5] + allPrices[5] + `</div>
    <button onclick="addToCart(5)" class="cart-button">Add To Cart</button>
    <button onclick="buyNow(5)" class="cart-button">Buy Now</button> 
    </a>
    <a class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
    <img name="hair-image" onclick="openProduct('hc6',6)" class=" product-view" src="`+ allImages.hc6 + `" width="auto"/>
    <div name="hair-title" class="product-info">`+ allTitles[6] + allPrices[6] + `</div>
    <button onclick="addToCart(6)" class="cart-button">Add To Cart</button>
    <button onclick="buyNow(6)" class="cart-button">Buy Now</button> 
    </a>
    <a class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
    <img name="hair-image" onclick="openProduct('hc7',7)" class=" product-view" src="`+ allImages.hc7 + `" width="auto"/>
    <div name="hair-title" class="product-info">`+ allTitles[7] + allPrices[7] + `</div>
    <button onclick="addToCart(7)" class="cart-button">Add To Cart</button>
    <button onclick="buyNow(7)" class="cart-button">Buy Now</button> 
    </a>
    <a class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
    <img name="hair-image" onclick="openProduct('hc8',8)" class=" product-view" src="`+ allImages.hc8 + `" width="auto"/>
    <div name="hair-title" class="product-info">`+ allTitles[8] + allPrices[8] + `</div>
    <button onclick="addToCart(8)" class="cart-button">Add To Cart</button>
    <button onclick="buyNow(8)" class="cart-button">Buy Now</button> 
    </a>
    <a class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
    <img name="hair-image" onclick="openProduct('hc9',9)" class=" product-view" src="`+ allImages.hc9 + `" width="auto"/>
    <div name="hair-title" class="product-info">`+ allTitles[9] + allPrices[9] + `</div>
    <button onclick="addToCart(9)" class="cart-button">Add To Cart</button>
    <button onclick="buyNow(9)" class="cart-button">Buy Now</button>
    </a>
    <a class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
    <img name="hair-image" onclick="openProduct('hc10',10)" class=" product-view" src="`+ allImages.hc10 + `" width="auto"/>
    <div name="hair-title" class="product-info">`+ allTitles[10] + allPrices[10] + `</div>
    <button onclick="addToCart(10)" class="cart-button">Add To Cart</button>
    <button onclick="buyNow(10)" class="cart-button">Buy Now</button>
    </a>
    <a class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
    <img name="hair-image" onclick="openProduct('hc11',11)" class=" product-view" src="`+ allImages.hc11 + `" width="auto"/>
    <div name="hair-title" class="product-info">`+ allTitles[11] + allPrices[11] + `</div>
    <button onclick="addToCart(11)" class="cart-button">Add To Cart</button>
    <button onclick="buyNow(11)" class="cart-button">Buy Now</button> 
    </a>`;

    var makeupProducts = `<a name="makeup-products" class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
    <img onclick="openProduct('m0',12)" class=" product-view" src="`+ allImages.m0 + `" width="auto"/>
    <div class="product-info">`+ allTitles[12] + allPrices[12] + `</div>
    <button onclick="addToCart(12)" class="cart-button">Add To Cart</button>
    <button onclick="buyNow(12)" class="cart-button">Buy Now</button> 
    </a>
    <a name="makeup-products" class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
    <img onclick="openProduct('m1',13)" class=" product-view" src="`+ allImages.m1 + `" width="auto"/>
    <div class="product-info">`+ allTitles[13] + allPrices[13] + `</div>
    <button onclick="addToCart(13)" class="cart-button">Add To Cart</button>
    <button onclick="buyNow(13)" class="cart-button">Buy Now</button> 
    </a>
    <a name="makeup-products" class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
    <img onclick="openProduct('m2',14)" class=" product-view" src="`+ allImages.m2 + `" width="auto"/>
    <div class="product-info">`+ allTitles[14] + allPrices[14] + `</div>
    <button onclick="addToCart(14)" class="cart-button">Add To Cart</button>
    <button onclick="buyNow(14)" class="cart-button">Buy Now</button> 
    </a>
    <a name="makeup-products" class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
    <img onclick="openProduct('m3',15)" class=" product-view" src="`+ allImages.m3 + `" width="auto"/>
    <div class="product-info">`+ allTitles[15] + allPrices[15] + `</div>
    <button onclick="addToCart(15)" class="cart-button">Add To Cart</button>
    <button onclick="buyNow(15)" class="cart-button">Buy Now</button> 
    </a>
    <a name="makeup-products" class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
    <img onclick="openProduct('m4',16)" class=" product-view" src="`+ allImages.m4 + `" width="auto"/>
    <div class="product-info">`+ allTitles[16] + allPrices[16] + `</div>
    <button onclick="addToCart(16)" class="cart-button">Add To Cart</button>
    <button onclick="buyNow(16)" class="cart-button">Buy Now</button> 
    </a>
    <a name="makeup-products" class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
    <img onclick="openProduct('m5',17)" class=" product-view" src="`+ allImages.m5 + `" width="auto"/>
    <div class="product-info">`+ allTitles[17] + allPrices[17] + `</div>
    <button onclick="addToCart(17)" class="cart-button">Add To Cart</button>
    <button onclick="buyNow(17)" class="cart-button">Buy Now</button> 
    </a>
    <a name="makeup-products" class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
    <img onclick="openProduct('m6',18)" class=" product-view" src="`+ allImages.m6 + `" width="auto"/>
    <div class="product-info">`+ allTitles[18] + allPrices[18] + `</div>
    <button onclick="addToCart(18)" class="cart-button">Add To Cart</button>
    <button onclick="buyNow(18)" class="cart-button">Buy Now</button> 
    </a>
    <a name="makeup-products" class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
    <img onclick="openProduct('m7',19)" class=" product-view" src="`+ allImages.m7 + `" width="auto"/>
    <div class="product-info">`+ allTitles[19] + allPrices[19] + `</div>
    <button onclick="addToCart(19)" class="cart-button">Add To Cart</button>
    <button onclick="buyNow(19)" class="cart-button">Buy Now</button> 
    </a>
    <a name="makeup-products" class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
    <img onclick="openProduct('m8',20)" class=" product-view" src="`+ allImages.m8 + `" width="auto"/>
    <div class="product-info">`+ allTitles[20] + allPrices[20] + `</div>
    <button onclick="addToCart(20)" class="cart-button">Add To Cart</button>
    <button onclick="buyNow(20)" class="cart-button">Buy Now</button> 
    </a>
    <a name="makeup-products" class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
    <img onclick="openProduct('m9',21)" class=" product-view" src="`+ allImages.m9 + `" width="auto"/>
    <div class="product-info">`+ allTitles[21] + allPrices[21] + `</div>
    <button onclick="addToCart(21)" class="cart-button">Add To Cart</button>
    <button onclick="buyNow(21)" class="cart-button">Buy Now</button> 
    </a>
    <a name="makeup-products" class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
    <img onclick="openProduct('m10',22)" class=" product-view" src="`+ allImages.m10 + `" width="auto"/>
    <div class="product-info">`+ allTitles[22] + allPrices[22] + `</div>
    <button onclick="addToCart(22)" class="cart-button">Add To Cart</button>
    <button onclick="buyNow(22)" class="cart-button">Buy Now</button> 
    </a>
    <a name="makeup-products" class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
    <img onclick="openProduct('m11',23)" class=" product-view" src="`+ allImages.m11 + `" width="auto"/>
    <div class="product-info">`+ allTitles[23] + allPrices[23] + `</div>
    <button onclick="addToCart(23)" class="cart-button">Add To Cart</button>
    <button onclick="buyNow(23)" class="cart-button">Buy Now</button> 
    </a>`;

    var skinProducts = `<a class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
    <img onclick="openProduct('sc0',24)" class=" product-view" src="`+ allImages.sc0 + `" width="auto"/>
    <div class="product-info">`+ allTitles[24] + allPrices[24] + `</div>
    <button onclick="addToCart(24)" class="cart-button">Add To Cart</button>
    <button onclick="buyNow(24)" class="cart-button">Buy Now</button> 
    </a>
    <a class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
    <img onclick="openProduct('sc1',25)" class=" product-view" src="`+ allImages.sc1 + `" width="auto"/>
    <div class="product-info">`+ allTitles[25] + allPrices[25] + `</div>
    <button onclick="addToCart(25)" class="cart-button">Add To Cart</button>
    <button onclick="buyNow(25)" class="cart-button">Buy Now</button> 
    </a>
    <a class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
    <img onclick="openProduct('sc2',26)" class=" product-view" src="`+ allImages.sc2 + `" width="auto"/>
    <div class="product-info">`+ allTitles[26] + allPrices[26] + `</div>
    <button onclick="addToCart(26)" class="cart-button">Add To Cart</button>
    <button onclick="buyNow(26)" class="cart-button">Buy Now</button> 
    </a>
    <a class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
    <img onclick="openProduct('sc3',27)" class=" product-view" src="`+ allImages.sc3 + `" width="auto"/>
    <div class="product-info">`+ allTitles[27] + allPrices[27] + `</div>
    <button onclick="addToCart(27)" class="cart-button">Add To Cart</button>
    <button onclick="buyNow(27)" class="cart-button">Buy Now</button> 
    </a>
    <a class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
    <img onclick="openProduct('sc4',28)" class=" product-view" src="`+ allImages.sc4 + `" width="auto"/>
    <div class="product-info">`+ allTitles[28] + allPrices[28] + `</div>
    <button onclick="addToCart(28)" class="cart-button">Add To Cart</button>
    <button onclick="buyNow(28)" class="cart-button">Buy Now</button> 
    </a>
    <a class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
    <img onclick="openProduct('sc5',29)" class=" product-view" src="`+ allImages.sc5 + `" width="auto"/>
    <div class="product-info">`+ allTitles[29] + allPrices[29] + `</div>
    <button onclick="addToCart(29)" class="cart-button">Add To Cart</button>
    <button onclick="buyNow(29)" class="cart-button">Buy Now</button> 
    </a>
    <a class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
    <img onclick="openProduct('sc6',30)" class=" product-view" src="`+ allImages.sc6 + `" width="auto"/>
    <div class="product-info">`+ allTitles[30] + allPrices[30] + `</div>
    <button onclick="addToCart(30)" class="cart-button">Add To Cart</button>
    <button onclick="buyNow(30)" class="cart-button">Buy Now</button> 
    </a>
    <a class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
    <img onclick="openProduct('sc7',31)" class=" product-view" src="`+ allImages.sc7 + `" width="auto"/>
    <div class="product-info">`+ allTitles[31] + allPrices[31] + `</div>
    <button onclick="addToCart(31)" class="cart-button">Add To Cart</button>
    <button onclick="buyNow(31)" class="cart-button">Buy Now</button> 
    </a>`;

    
    if(catalogue == "haircare") {
        products.innerHTML = hairProducts;
    }
    if(catalogue == "makeup") {
        products.innerHTML = makeupProducts;
    }
    if(catalogue == "skincare") {
        products.innerHTML = skinProducts;
    }

    var cart_buttons = document.getElementsByClassName("cart-button");
    if (!sessionStorage.getItem("authToken")) {
        for (i = 0; i < cart_btns.length; i++) {
            cart_btns[i].hidden = true;
        }
    }
}

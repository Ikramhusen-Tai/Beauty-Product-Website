var allTitles = JSON.parse(localStorage.getItem("title")).title;
var allPrices = JSON.parse(localStorage.getItem("price")).price;
var allImages = JSON.parse(localStorage.getItem("images"));
var makeupProducts = `<a name="makeup-products" class="col-md-4 col-sm-4 col-xs-6 col-xxs-6 product-link text-center">
<img onclick="openProduct('m0',12)" class=" product-view" src="`+allImages.m0+`" width="auto"/>
<div class="product-info">`+allTitles[12]+allPrices[12]+`</div>
</a>
<a name="makeup-products" class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
<img onclick="openProduct('m1',13)" class=" product-view" src="`+allImages.m1+`" width="auto"/>
<div class="product-info">`+allTitles[13]+allPrices[13]+`</div>
</a>
<a name="makeup-products" class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
<img onclick="openProduct('m2',14)" class=" product-view" src="`+allImages.m2+`" width="auto"/>
<div class="product-info">`+allTitles[14]+allPrices[14]+`</div>
</a>
<a name="makeup-products" class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
<img onclick="openProduct('m3',15)" class=" product-view" src="`+allImages.m3+`" width="auto"/>
<div class="product-info">`+allTitles[15]+allPrices[15]+`</div>
</a>
<a name="makeup-products" class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
<img onclick="openProduct('m4',16)" class=" product-view" src="`+allImages.m4+`" width="auto"/>
<div class="product-info">`+allTitles[16]+allPrices[16]+`</div>
</a>
<a name="makeup-products" class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
<img onclick="openProduct('m5',17)" class=" product-view" src="`+allImages.m5+`" width="auto"/>
<div class="product-info">`+allTitles[17]+allPrices[17]+`</div>
</a>
<a name="makeup-products" class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
<img onclick="openProduct('m6',18)" class=" product-view" src="`+allImages.m6+`" width="auto"/>
<div class="product-info">`+allTitles[18]+allPrices[18]+`</div>
</a>
<a name="makeup-products" class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
<img onclick="openProduct('m7',19)" class=" product-view" src="`+allImages.m7+`" width="auto"/>
<div class="product-info">`+allTitles[19]+allPrices[19]+`</div>
</a>
<a name="makeup-products" class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
<img onclick="openProduct('m8',20)" class=" product-view" src="`+allImages.m8+`" width="auto"/>
<div class="product-info">`+allTitles[20]+allPrices[20]+`</div>
</a>
<a name="makeup-products" class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
<img onclick="openProduct('m9',21)" class=" product-view" src="`+allImages.m9+`" width="auto"/>
<div class="product-info">`+allTitles[21]+allPrices[21]+`</div>
</a>
<a name="makeup-products" class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
<img onclick="openProduct('m10',22)" class=" product-view" src="`+allImages.m10+`" width="auto"/>
<div class="product-info">`+allTitles[22]+allPrices[22]+`</div>
</a>
<a name="makeup-products" class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
<img onclick="openProduct('m11',23)" class=" product-view" src="`+allImages.m11+`" width="auto"/>
<div class="product-info">`+allTitles[23]+allPrices[23]+`</div>
</a>`;

var skinProducts = `<a class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
<img onclick="openProduct('sc0',24)" class=" product-view" src="`+allImages.sc0+`" width="auto"/>
<div class="product-info">`+allTitles[24]+allPrices[24]+`</div>
</a>
<a class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
<img onclick="openProduct('sc1',25)" class=" product-view" src="`+allImages.sc1+`" width="auto"/>
<div class="product-info">`+allTitles[25]+allPrices[25]+`</div>
</a>
<a class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
<img onclick="openProduct('sc2',26)" class=" product-view" src="`+allImages.sc2+`" width="auto"/>
<div class="product-info">`+allTitles[26]+allPrices[26]+`</div>
</a>
<a class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
<img onclick="openProduct('sc3',27)" class=" product-view" src="`+allImages.sc3+`" width="auto"/>
<div class="product-info">`+allTitles[27]+allPrices[27]+`</div>
</a>
<a class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
<img onclick="openProduct('sc4',28)" class=" product-view" src="`+allImages.sc4+`" width="auto"/>
<div class="product-info">`+allTitles[28]+allPrices[28]+`</div>
</a>
<a class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
<img onclick="openProduct('sc5',29)" class=" product-view" src="`+allImages.sc5+`" width="auto"/>
<div class="product-info">`+allTitles[29]+allPrices[29]+`</div>
</a>
<a class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
<img onclick="openProduct('sc6',30)" class=" product-view" src="`+allImages.sc6+`" width="auto"/>
<div class="product-info">`+allTitles[30]+allPrices[30]+`</div>
</a>
<a class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
<img onclick="openProduct('sc7',31)" class=" product-view" src="`+allImages.sc7+`" width="auto"/>
<div class="product-info">`+allTitles[31]+allPrices[31]+`</div>
</a>`;

var hairProducts = `<a class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
<img name="hair-image" onclick="openProduct('hc0',0)" class=" product-view" src="`+allImages.hc0+`" width="auto"/>
<div name="hair-title" class="product-info">`+allTitles[0]+allPrices[0]+`</div> 
</a>
<a class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
<img name="hair-image" onclick="openProduct('hc1',1)" class=" product-view" src="`+allImages.hc1+`" width="auto"/>
<div name="hair-title" class="product-info">`+allTitles[1]+allPrices[1]+`</div>  
</a>
<a class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
<img name="hair-image" onclick="openProduct('hc2',2)" class=" product-view" src="`+allImages.hc2+`" width="auto"/>
<div name="hair-title" class="product-info">`+allTitles[2]+allPrices[2]+`</div>       
</a>
<a class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
<img name="hair-image" onclick="openProduct('hc3',3)" class=" product-view" src="`+allImages.hc3+`" width="auto"/>
<div name="hair-title" class="product-info">`+allTitles[3]+allPrices[3]+`</div> 
</a>
<a class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
<img name="hair-image" onclick="openProduct('hc4',4)" class=" product-view" src="`+allImages.hc4+`" width="auto"/>
<div name="hair-title" class="product-info">`+allTitles[4]+allPrices[4]+`</div>
</a>
<a class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
<img name="hair-image" onclick="openProduct('hc5',5)" class=" product-view" src="`+allImages.hc5+`" width="auto"/>
<div name="hair-title" class="product-info">`+allTitles[5]+allPrices[5]+`</div> 
</a>
<a class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
<img name="hair-image" onclick="openProduct('hc6',6)" class=" product-view" src="`+allImages.hc6+`" width="auto"/>
<div name="hair-title" class="product-info">`+allTitles[6]+allPrices[6]+`</div> 
</a>
<a class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
<img name="hair-image" onclick="openProduct('hc7',7)" class=" product-view" src="`+allImages.hc7+`" width="auto"/>
<div name="hair-title" class="product-info">`+allTitles[7]+allPrices[7]+`</div> 
</a>
<a class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
<img name="hair-image" onclick="openProduct('hc8',8)" class=" product-view" src="`+allImages.hc8+`" width="auto"/>
<div name="hair-title" class="product-info">`+allTitles[8]+allPrices[8]+`</div> 
</a>
<a class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
<img name="hair-image" onclick="openProduct('hc9',9)" class=" product-view" src="`+allImages.hc9+`" width="auto"/>
<div name="hair-title" class="product-info">`+allTitles[9]+allPrices[9]+`</div>
</a>
<a class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
<img name="hair-image" onclick="openProduct('hc10',10)" class=" product-view" src="`+allImages.hc10+`" width="auto"/>
<div name="hair-title" class="product-info">`+allTitles[10]+allPrices[10]+`</div>
</a>
<a class="col-md-4 col-sm-4 col-xs-6 col-xxs-12 product-link text-center">
<img name="hair-image" onclick="openProduct('hc11',11)" class=" product-view" src="`+allImages.hc11+`" width="auto"/>
<div name="hair-title" class="product-info">`+allTitles[11]+allPrices[11]+`</div> 
</a>`;

function setData() {
    details = {
        hc0: "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose. Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush. ",
        hc1: "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose. Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush. ",
        hc2: "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose. Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush. ",
        hc3: "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose. Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush. ",
        hc4: "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose. Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush. ",
        hc5: "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose. Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush. ",
        hc6: "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose. Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush. ",
        hc7: "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose. Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush. ",
        hc8: "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose. Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush. ",
        hc9: "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose. Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush. ",
        hc10: "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose. Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush. ",
        hc11: "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose. Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush. ",

        m0: "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose. Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush. ",
        m1: "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose. Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush. ",
        m2: "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose. Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush. ",
        m3: "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose. Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush. ",
        m4: "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose. Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush. ",
        m5: "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose. Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush. ",
        m6: "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose. Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush. ",
        m7: "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose. Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush. ",
        m8: "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose. Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush. ",
        m9: "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose. Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush. ",
        m10: "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose. Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush. ",
        m11: "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose. Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush. ",

        sc0: "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose. Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush. ",
        sc1: "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose. Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush. ",
        sc2: "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose. Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush. ",
        sc3: "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose. Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush. ",
        sc4: "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose. Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush. ",
        sc5: "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose. Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush. ",
        sc6: "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose. Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush. ",
        sc7: "A mellow and sensual perfume, a profusion of flowers revealing the sensuality of gardenia, underscored by velvety notes of apricot blossom. It opens with tangerine, blackcurrant and freesia, then flows into a heart of jasmine and Bulgarian rose. Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush.Sheer and buildable, 'Free Soul' is a pale-pink powder that's infused with light-catching particles to give you a natural glow. Natural, healthy-looking colour that immediately enlivens the complexion. A light application of even the highest-intensity hues delivers a natural-looking flush. ",
    }

    images = {
        hc0: "../assets/haircare-products/1.png",
        hc1: "../assets/haircare-products/2.png",
        hc2: "../assets/haircare-products/3.png",
        hc3: "../assets/haircare-products/4.png",
        hc4: "../assets/haircare-products/5.png",
        hc5: "../assets/haircare-products/6.png",
        hc6: "../assets/haircare-products/7.png",
        hc7: "../assets/haircare-products/8.png",
        hc8: "../assets/haircare-products/9.png",
        hc9: "../assets/haircare-products/10.png",
        hc10: "../assets/haircare-products/11.png",
        hc11: "../assets/haircare-products/12.png",

        m0: "../assets/makeup-products/1.png",
        m1: "../assets/makeup-products/2.png",
        m2: "../assets/makeup-products/3.png",
        m3: "../assets/makeup-products/4.png",
        m4: "../assets/makeup-products/5.png",
        m5: "../assets/makeup-products/6.png",
        m6: "../assets/makeup-products/7.png",
        m7: "../assets/makeup-products/8.png",
        m8: "../assets/makeup-products/9.png",
        m9: "../assets/makeup-products/10.png",
        m10: "../assets/makeup-products/11.png",
        m11: "../assets/makeup-products/12.png",

        sc0: "../assets/skincare-products/1.png",
        sc1: "../assets/skincare-products/2.png",
        sc2: "../assets/skincare-products/3.png",
        sc3: "../assets/skincare-products/4.png",
        sc4: "../assets/skincare-products/5.png",
        sc5: "../assets/skincare-products/6.png",
        sc6: "../assets/skincare-products/7.png",
        sc7: "../assets/skincare-products/8.png",
    }       
    

    var title = [
        '<h4>Ansy Complete Hair Therapy</h4>',
        '<h4>Gold Hair Shampoo</h4>',
        '<h4>Greaux Vanilla Shampoo</h4>',
        '<h4>Pure Volume shampoo</h4>',
        '<h4>Matrix Rejuvenating Hair Oil</h4>',
        '<h4>Hysses Rose Shampoo</h4>',
        '<h4>Johanson Platinum Shampoo</h4>',
        '<h4>Matrix Color Shampoo</h4>',
        '<h4>Venus Choco Shampoo</h4>',
        '<h4>Royal Rose Hair Shampoo</h4>',
        '<h4>Rouge Pink Hair Serum</h4>',
        '<h4>Hysses Rose Shampoo</h4>',
        '<h4>Body Foundation Creme</h4>',
        '<h4>Nars Eyeshadow Pallete</h4>',
        '<h4>Armani Serum</h3>',
        '<h4>Venus Yarda Foundation</h4>',
        '<h4>Venus Vanilla Body Lotion</h4>',
        '<h4>Venus Rose Lipstick</h4>',
        '<h4>Revlon Intense Matte Lipstick</h4>',
        '<h4>Revlon Lipstick Shade l2</h4>',
        '<h4>Venus Vanilla Perfume</h4>',
        '<h4>Chanel Perfume</h4>',
        '<h4>Rouge Pink Liquid Lipstick</h4>',
        '<h4>Venus 5 Shades of Lipstick</h4>',
        '<h4>Rejuvenating Mask</h4>',
        '<h4>Conditioning Mask</h4>',
        '<h4>Rejuvenating Mask</h4>',
        '<h4>Venus Yarda Handcream</h4>',
        '<h4>Venus Vanilla Body Lotion</h4>',
        '<h4>Venus Rose Body Lotion</h4>',
        '<h4>Venus Butter Body Lotion</h4>',
        '<h4>Ordinary Diamond Facial</h4>'
    ]

    var price = [
        '<b>Price: $ 5.33</b>',
        '<b>Price: $ 5.33</b>',
        '<b>Price: $ 5.33</b>',
        '<b>Price: $ 5.33</b>',
        '<b>Price: $ 5.33</b>',
        '<b>Price: $ 5.33</b>',
        '<b>Price: $ 5.33</b>',
        '<b>Price: $ 5.33</b>',
        '<b>Price: $ 5.33</b>',
        '<b>Price: $ 5.33</b>',
        '<b>Price: $ 5.33</b>',
        '<b>Price: $ 5.33</b>',
        '<b>Price: $ 5.33</b>',
        '<b>Price: $ 5.33</b>',
        '<b>Price: $ 5.33</b>',
        '<b>Price: $ 5.33</b>',
        '<b>Price: $ 5.33</b>',
        '<b>Price: $ 5.33</b>',
        '<b>Price: $ 5.33</b>',
        '<b>Price: $ 5.33</b>',
        '<b>Price: $ 5.33</b>',
        '<b>Price: $ 5.33</b>',
        '<b>Price: $ 5.33</b>',
        '<b>Price: $ 5.33</b>',
        '<b>Price: $ 5.33</b>',
        '<b>Price: $ 5.33</b>',
        '<b>Price: $ 5.33</b>',
        '<b>Price: $ 5.33</b>',
        '<b>Price: $ 5.33</b>',
        '<b>Price: $ 5.33</b>',
        '<b>Price: $ 5.33</b>',
        '<b>Price: $ 5.33</b>',
    ]

    var titles = {
        title: title
    };
    var prices = {
        price: price
    };
    
    var email = []; 
    localStorage.clear(); 
    sessionStorage.clear(); 
    location.reload();
    localStorage.setItem("images", JSON.stringify(images));
    localStorage.setItem("title", JSON.stringify(titles));
    localStorage.setItem("price", JSON.stringify(prices));
    localStorage.setItem("details", JSON.stringify(details));
    localStorage.setItem("emails", JSON.stringify(email));
}

function getUserKey() {
    var reg_email = sessionStorage.getItem("email");
    if(reg_email) {
        var temp = reg_email.split("");
        var key = "_id:";
        var sum = 0;
        for (i = 0; i < temp.length; i++) {
        string = temp[i].charCodeAt().toString();
        code = temp[i].charCodeAt();
        sum = sum + code;
        key = key + sum;
        }
        return key;
    }
}

function getKeyByEmail(reg_email) {
    if(reg_email) {
        var temp = reg_email.split("");
        var key = "_id:";
        var sum = 0;
        for (i = 0; i < temp.length; i++) {
        string = temp[i].charCodeAt().toString();
        code = temp[i].charCodeAt();
        sum = sum + code;
        key = key + sum;
        }
        return key;
    }
}

var key = getUserKey();
var user = JSON.parse(localStorage.getItem(key));




function getCustomers() {   
    if(!localStorage.getItem("isData")) {
        setData();
    } 
    localStorage.setItem("isData","true");
    var emailsArray = JSON.parse(localStorage.getItem("emails"));
    var cart = [];
    var makeup = [];
    var skincare = [];
    var haircare = [];
    for(k=0; k<emailsArray.length; k++) {
        cart.push(localStorage.getItem(emailsArray[k]));
    }
    for(m=0; m<cart.length; m++) {
        var indexes = cart[m].split("/");
        for (i = 1; i < indexes.length; i++) {
            for (j = 1; j < indexes.length; j++) {
                if (indexes[i] == indexes[j] && i != j) {
                    indexes.splice(j, 1); j--;
                }
            }
            if(indexes[i] < 12) {
                haircare.push(emailsArray[m]);
            }
            if(indexes[i]  > 11 && indexes[i] < 24) {
                makeup.push(emailsArray[m]);
            }
            if(indexes[i] > 23 && indexes[i] < 32) {
                skincare.push(emailsArray[m]);
            }
        }
    }
    for(i=0; i<haircare.length; i++) {
        for(j=0; j<haircare.length; j++) {
            if (haircare[i] == haircare[j] && i != j) {
                haircare.splice(j, 1); j--;
            }
        }
    }
    for(i=0; i<makeup.length; i++) {
        for(j=0; j<makeup.length; j++) {
            if (makeup[i] == makeup[j] && i != j) {
                makeup.splice(j, 1); j--;
            }
        }
    }
    for(i=0; i<skincare.length; i++) {
        for(j=0; j<skincare.length; j++) {
            if (skincare[i] == skincare[j] && i != j) {
                skincare.splice(j, 1); j--;
            }
        }
    }

    var products = document.getElementById("show-prod");
    var customers = document.getElementById("show-cust");
    if(user?.AP == "makeup") {
        products.innerHTML = makeupProducts;
        makeup.length ? makeup.forEach(showCustomerDetails) : customers.innerHTML = '<div class="pd-30 text-center">No customers yet!</div>';
    }
    if(user?.AP == "skincare") {
        products.innerHTML = skinProducts;
        skincare.length ? skincare.forEach(showCustomerDetails) : customers.innerHTML = '<div class="pd-30 text-center">No customers yet!</div>';
    }
    if(user?.AP == "haircare") {
        products.innerHTML = hairProducts;
        haircare.length ? haircare.forEach(showCustomerDetails) : customers.innerHTML = '<div class="pd-30 text-center">No customers yet!</div>';
    }
}

function showCustomerDetails(item, index, arr) {
    var key = getKeyByEmail(item)
    myUser = JSON.parse(localStorage.getItem(key));
    var node = document.createElement("TR");
    node.innerHTML = '<td>'+myUser.firstname+'</td><td>'+myUser.lastname+'</td><td>'+myUser.email+'</td>';
    document.getElementById("customerInfo").appendChild(node);
}

function editProduct(input,action) {
    var title = JSON.parse(localStorage.getItem("title"))?.title;
    var price = JSON.parse(localStorage.getItem("price"))?.price;
    var details = JSON.parse(localStorage.getItem("details"));
    var index = JSON.parse(sessionStorage.getItem("CP")).index;
    var type = JSON.parse(sessionStorage.getItem("CP")).type;
    var images = JSON.parse(localStorage.getItem("images"));
    var updatedPic = sessionStorage.getItem("image-"+type);

    var heading = document.getElementById("new-heading").value;
    var price = document.getElementById("new-price").value;
    var about = document.getElementById("new-details").value;    

    console.log("input==>",input)
    if(action == "all") {
        title[index] = heading ? "<h4>" + heading + "</h4>" : title[index];
        price[index] = price ? "<b>" + price + "</b>" : price[index];
        details[type] = about ? about : details[type];
        images[type] = updatedPic ? updatedPic : images[type];
    
        titles = {
            title: title
        }
        
        localStorage.setItem("title", JSON.stringify(titles));
        localStorage.setItem("details", JSON.stringify(details));
        localStorage.setItem("images", JSON.stringify(images));
        location.reload();
    } else if(action == "image") {
        if (input.files && input.files[0]) {            
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#product-image')
                    .attr('src', e.target.result);
                var temp = e.target.result;
                sessionStorage.setItem("image-"+type , temp);
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
}
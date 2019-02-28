const loadAllItems = require('./datbase.js').loadAllItems;
const loadPromotions = require('./datbase.js').loadPromotions;
function printInventory(inputs) {
    var barcodes={};
    inputs.forEach(function(input){
        if(barcodes[input]||input.indexOf('-')!=-1)
        {
            barcodes[input]++;
            barcodes[input.substr(0,input.indexOf('-'))]=input.substr(input.indexOf('-')+1,input.length);
        } else {
            barcodes[input]=1;
        }
    });
    var items=loadAllItems();

    var shopping_cart=[];
    items.forEach(function(item){
        if(barcodes[item.barcode]){
            item.count=barcodes[item.barcode];
            var promotions=loadPromotions().barcodes;
            item.free=Math.floor(item.count/3);
            shopping_cart.push(item);
        }
    });
    var list='***<没钱赚商店>购物清单***';
    var list_free='----------------------'+'\n'+'挥泪赠送商品：';
    var sum=0;
    var save=0;
    shopping_cart.forEach(function(lists){
        var subtotal=(lists.count-lists.free)*lists.price
        list=list+'\n'+'名称：'+lists.name+'，数量：'+lists.count+lists.unit+'，单价：'+
            lists.price.toFixed(2)+'(元)，小计：'+subtotal.toFixed(2)+'(元)'
        sum+=subtotal;
        if(lists.free>0){
            list_free=list_free+'\n'+'名称：'+lists.name+'，数量：'+lists.free+lists.unit;
            save+=lists.free*lists.price;
        }
    });
    list=list+'\n'+list_free+'\n'+'----------------------'+'\n'+'总计：'+sum.toFixed(2)+'(元)'+'\n'
        +'节省：'+save.toFixed(2)+'(元)'+'\n'+'**********************';
    console.log(list);
    return 'Hello World!';
};
module.exports =  printInventory;
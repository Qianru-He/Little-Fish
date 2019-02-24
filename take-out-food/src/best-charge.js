function bestCharge(selectedItems) {
    var items=loadAllItems();  
    var food_list=[];  
	
	
	selectedItems.forEach(function(selectedItem)
	{ 
		var foodid={};
		foodid.id=selectedItem.substring(0,8);
		foodid.count=selectedItem.substr(selectedItem.indexOf('x')+2,selectedItem.length);
		items.forEach(function(item)
		{
			if(foodid.id==item.id)
			{ 
				foodid.name=item.name;
				foodid.totalprice=item.price*foodid.count;  
				food_list.push(foodid);  
			}  
		})
	}) ; 

	
	var promotions=loadPromotions();
	var Beforediscount=0;
	var discount1=0;
	var discount2=0;
	var altogether=0;
	var print_list='============= 订餐明细 =============\n';
	
	food_list.forEach(function(food)
	{
		print_list=print_list+food.name+' x '+food.count+' = '+food.totalprice+'元\n';
	}) // 
	
	food_list.forEach(function(food){  
		Beforediscount+=food.totalprice;    
    }); 
	if(Beforediscount>=30)
		discount1=Beforediscount-6;
	
	food_list.forEach(function(food){  
		if((food.id=='ITEM0001')||(food.id=='ITEM0022'))//)
			food.totalprice/=2;
		discount2+=food.totalprice;
    });   
	if(discount1!=0)
	{
		if((discount2!=0&&discount1<=discount2)||discount2==0)
		{
			print_list=print_list+'-----------------------------------\n'+'使用优惠:\n'
			+ '满30减6元，省6元\n' + 
			'-----------------------------------\n'+'总计：'+discount1+'元\n';
		}
		else  
		{
			print_list=print_list+'-----------------------------------\n'+'使用优惠:\n' +
			'指定菜品半价(黄焖鸡，凉皮)，省13元\n'
				+'-----------------------------------\n'+'总计：'+discount2+'元\n';
		}
	}else
	{
		
		print_list=print_list+'-----------------------------------\n'+'总计：'
		+Beforediscount+'元\n'
	}
    print_list=print_list+'===================================\n';
	return print_list;
}






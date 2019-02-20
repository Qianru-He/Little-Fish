function billing(kilometres,time)
{
	var result;
	if(kilometres<=2)
	{
		result = 6 + time*0.25;
	}
	else if(kilometres>2&&kilometres<=8)
	{
		result = 6 + (kilometres-2)*0.8+time*0.25;
	}
	else 
	{
		result = 6 + 6*0.8 + (kilometres-8)*1.2+time*0.25;
	}
	return result;
}
module.exports = {
 billing
}

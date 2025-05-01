let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
let alergy=true;
console.log(shoppingCart);
if (shoppingCart.includes('meat') ==false)
{

shoppingCart.unshift("Meat")
}
if (shoppingCart.includes('sugar') ==false)
    {
    
    shoppingCart.push("sugar")
    }
    console.log(shoppingCart); 
    if (alergy==true)
        {
        
        shoppingCart.splice(4,1)
        }

shoppingCart[2]='green tea'
console.log(shoppingCart);
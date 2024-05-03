function getShippingCost(country) {
    const chinaCost = 100;
    const chileCost = 250;
    const australiaCost = 170;
    const jamaicaCost = 120;

    switch(country) {
        case "China":
        return `Shipping to ${country} will cost ${chinaCost} credits`;
            break;
        case "Chile":
        return `Shipping to ${country} will cost ${chileCost} credits`;
            break;
        case "Australia":
        return `Shipping to ${country} will cost ${australiaCost} credits`;
            break;
        case "Jamaica":
        return `Shipping to ${country} will cost ${jamaicaCost} credits`;
            break;
        default:
            return "Sorry, there is no delivery to your country";
    }

    
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"

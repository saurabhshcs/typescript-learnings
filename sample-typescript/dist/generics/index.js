// Generic Functions
function genericFunction(x) {
    return x;
}
const genericArrowFunction = (x) => x;
// Generic Classes
class GenericClass {
    constructor(props) {
        this.props = props;
    }
    getProps() {
        return this.props;
    }
}
const chocoCakes = [{ expiryDate: new Date() }];
const vanillaCakes = [{ expiryDate: new Date() }];
const getExpiredItems = items => {
    const currentDate = new Date().getTime();
    return items.filter(item => item.expiryDate.getDate() < currentDate);
};
const expiredChocoCakes = getExpiredItems(chocoCakes);
const expiredVanillaCakes = getExpiredItems(vanillaCakes);
class ShoppingCart {
    constructor() {
        this.items = [];
        //
        //  static x: Item;
        //  static someMethod(x: Item) {
        //    let y: Item;
        //  }
    }
    addItem(item) {
        this.items.push(item);
    }
    getItemById(id) {
        this.items.find(item => item.id === id);
    }
}

pragma solidity ^0.4.20;

contract OppStore {

    //This is the list of stores.
    //Store[] public oppStores;
    mapping(address => Store) public oppStoresMap;
    uint public storeCount = 0;
    uint public oppPurchases = 0;
    uint public totalSalesValue = 0;

    mapping(address => bool) public hasStore;
    //In the future there should be a manager who gets 1% of sales.

    struct Store {
        address owner;
        mapping(uint => Product) products;
        uint productCount;
        mapping(uint => Purchase) purchases;
        uint purchaseCount;
        string hash;
    }

    struct Purchase {
        uint date;
        uint amount;
        uint productId;
        string hash;
        address storeOwner;
        bool fufilled;
    }

    struct Product {
        uint id;
        uint price; //in wei
        uint stock;
        mapping(address => Purchase) purchased;
        uint purchaseCount;
        string hash;
    }



    function openStore(string storeHash) public payable{
        require(!hasStore[msg.sender]);
        Store memory store;

        store.owner = msg.sender;
        store.productCount = 0;
        store.purchaseCount = 0;
        store.hash = storeHash;

        //oppStores.push(store);
        oppStoresMap[msg.sender] = store;
        hasStore[msg.sender] = true;

        storeCount++;
    }

    function createProduct(uint price, uint stock, string hash) public {
        require(hasStore[msg.sender]);

        Product memory product;

        uint id = oppStoresMap[msg.sender].productCount++;

        product.id = id;
        product.price = price;
        product.stock = stock;
        product.purchaseCount = 0;
        product.hash = hash;

        oppStoresMap[msg.sender].products[id] = product;

    }

    function purchaseProduct(address storeOwner, uint productId, string purchaseHash) public payable {

        //check the amount paid is greater than price, extra is considered tip or shipping
        require(msg.value > oppStoresMap[storeOwner].products[productId].price);

        uint currentStorePurchaseCount = oppStoresMap[storeOwner].purchaseCount++;

        Purchase memory purchase;

        purchase.date = block.number;
        purchase.amount = msg.value;
        purchase.productId = productId;
        purchase.hash = purchaseHash;
        purchase.storeOwner = storeOwner;
        purchase.fufilled = false;


        oppStoresMap[storeOwner].purchases[currentStorePurchaseCount] = purchase;
        oppPurchases++;
        totalSalesValue = totalSalesValue + msg.value;

        //should decrement the stock

        //last thing send the money to the storeowner
        storeOwner.call.value(msg.value).gas(20317);
    }

    // restockProduct()

    //fufill order



}

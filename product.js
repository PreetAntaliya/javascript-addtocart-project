let products = [
    {
        id: 1,
        name: "realme",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/t/5/5/-original-imagt4qzhsrnpyhb.jpeg?q=70",
        price: 8999,
        qty: 1,
        desscription: "4 GB RAM | 64 GB ROM | Expandable Upto 2 TB",
        category: "mobile",
        status : 'In Stock',
    },
    {
        id: 2,
        name: "samsung",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/r/k/x/-original-imagtrrqkxprtd4n.jpeg?q=70",
        price: 19999,
        qty: 1,
        desscription: "Bank OfferGet 10% Cashback on Samsung Axis bank Credit CardT&C",
        category: "mobile",
        status : 'Outstock',
    },
    {
        id: 3,
        name: "realme",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/t/5/5/-original-imagt4qzhsrnpyhb.jpeg?q=70",
        price: 8999,
        qty: 1,
        desscription: "4 GB RAM | 64 GB ROM | Expandable Upto 2 TB",
        category: "mobile",
        status : 'In Stock',
    },
    {
        id: 4,
        name: "samsung",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/r/k/x/-original-imagtrrqkxprtd4n.jpeg?q=70",
        price: 19999,
        qty: 1,
        desscription: "Bank OfferGet 10% Cashback on Samsung Axis bank Credit CardT&C",
        category: "mobile",
        status : 'Outstock',
    },
    {
        id: 5,
        name: "realme",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/t/5/5/-original-imagt4qzhsrnpyhb.jpeg?q=70",
        price: 8999,
        qty: 1,
        desscription: "4 GB RAM | 64 GB ROM | Expandable Upto 2 TB",
        category: "mobile",
        status : 'In Stock',
    },
    {
        id: 6,
        name: "samsung",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/r/k/x/-original-imagtrrqkxprtd4n.jpeg?q=70",
        price: 19999,
        qty: 1,
        desscription: "Bank OfferGet 10% Cashback on Samsung Axis bank Credit CardT&C",
        category: "mobile",
        status : 'Outstock',
    }
]
const viewProduct = () => {
    let tbl = ""
    products.map((val) => {
        tbl += `
        <div class="col-lg-3 mb-5">
            <div class="card d-flex justify-content-center" style="width: 18rem;">
                <img src="${val.image}" style="height : 250px;object-fit : contain"  class="card-img-top img-fluid p-4" alt="...">
                    <div class="card-body text-center">
                        <h4>${val.name}</h4>
                        <h5>${val.price}</h5>
                        <p class="card-text">${val.desscription}</p>
                        <button class="btn btn-info  w-100">Details</button>
                        <button onclick="ADD(${val.id})" class="btn btn-primary mt-3 w-100">Add To Cart</button>
                    </div>
            </div>
        </div>
                `
    })

    document.getElementById('product').innerHTML = tbl;
    
}
viewProduct()

let addcart = [];
const ADD = (id) => {
    if(localStorage.getItem('cart')===undefined || localStorage.getItem('cart')===null){
        let cart = products.find((item)=>{
            return item.id == id;
        })
        addcart.push(cart);
        localStorage.setItem('cart',JSON.stringify(addcart));
    }else{
        let allcart = JSON.parse(localStorage.getItem('cart'));
        let a = products.find((item)=>{
            return item.id == id;
        })
        allcart.push(a);
        localStorage.setItem('cart',JSON.stringify(allcart));
    }
    alert("Cart successfully add");
}























           
const vieWCart = () => {
    let allcart = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [];

    let tbl = "";
    let finaltotal = 0;
    allcart.map((val, i) => {
        i = i + 1
        finaltotal = finaltotal += val.price * val.qty;
        tbl += `
                    <tr>
                        <td>${i}</td>
                        <td>
                            <img src="${val.image}" width="10%"/>
                        </td>
                        <td>${val.name}</td>
                        <td>${val.price}</td>
                        <td>
                            <input onChange="editCart(${val.id})" id="qty_${val.id}" class="form-control w-25" type="number" value="${val.qty}" />
                        </td>
                        <td>
                            ${val.price * val.qty}
                        </td>
                        <td>
                            <button onclick="deleteCart(${val.id})" class="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                `
    })
    document.getElementById('cart').innerHTML = tbl;
    document.getElementById('finaltotal').innerHTML = finaltotal
}
vieWCart();

const deleteCart = (id) => {
    let allcart = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [];
    let d = allcart.filter((item) => {
        return item.id !== id;
    })

    localStorage.setItem('cart', JSON.stringify(d));
    alert("Product successfully delete");
    vieWCart();
}

const editCart = (id) => {
    let allcart = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [];
    let qty = parseInt(document.getElementById(`qty_${id}`).value);
    if (qty > 0) {
        let edit = allcart.map((item) => {
            if (item.id == id) {
                item.qty = qty
            }
            return item;
        })
        localStorage.setItem('cart', JSON.stringify(edit));
        // alert("Cart successfully edit");
    } else {
            let d = allcart.filter((item) => {
                return item.id !== id;
            })
            localStorage.setItem('cart', JSON.stringify(d));
            alert("Product Removed");
    }

    vieWCart();

}
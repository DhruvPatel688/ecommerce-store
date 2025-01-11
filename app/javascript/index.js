newStart()

function newStart(){
    var cart = []
    var totalPrice = 0
    let data = []
    let names = []
    let prices = []
    let name1  = document.querySelectorAll('[data-product-name]');
    let price = document.querySelectorAll('[data-product-price]');
    name1.forEach((i)=>{
        const productName = i.dataset.productName;
        names.push(productName);
    })
    price.forEach((i)=>{
        const productPrice = i.dataset.productPrice;
        prices.push(productPrice);
    })

    for (let i = 0; i < names.length; i++){
        let unit = [];
        unit.push(names[i]);
        unit.push(prices[i]);
        data.push(unit);
    }

    document.body.addEventListener('click', (z) => {
        let option;
        const elementId = z.target.id;
        if (elementId == 'add_1'){
            addItem(0, total, cart);
        } else if(elementId == 'add_2'){
            addItem(1, total, cart);
        } else if(elementId == 'add_3'){
            addItem(2, total, cart);
        } else if(elementId == 'add_4'){
            addItem(3, total, cart);
        } else if(elementId == 'add_5'){
            addItem(4, total, cart);
        } else if(elementId == 'add_6'){
            addItem(5, total, cart);
        } else if(elementId == 'add_7'){
            addItem(6, total, cart);
        } else if(elementId == 'add_8'){
            addItem(7, total, cart);
        } else if(elementId == 'add_9'){
            addItem(8, total, cart);
        } else if (elementId == 'delete_0'){
            deletes(0);
        } else if(elementId == 'delete_1'){
            deletes(1);
        } else if(elementId == 'delete_2'){
            deletes(2);
        } else if(elementId == 'delete_3'){
            deletes(3);
        } else if(elementId == 'delete_4'){
            deletes(4);
        } else if(elementId == 'delete_5'){
            deletes(5);
        } else if(elementId == 'delete_6'){
            adeletes(6);
        } else if(elementId == 'delete_7'){
            deletes(7);
        } else if(elementId == 'delete_8'){
            deletes(8);
        } 
    })

    function addItem(index){
        console.log(index);
        totalPrice += parseFloat(data[index][1]);
        var total = document.getElementById("total"); 
        var addIt = document.getElementById("addToCart");
        addIt.innerHTML += `<tbody class = "box-item" id="item_${index}" >
        <tr>
            <td class = "font">
                <img src ="#"></img>
            </td>
           
            <td class = "font" >${data[index][1]}</td>
            <a  href = "#"><td class = "danger font" ><span class="material-symbols-outlined" id = "delete_${index}">
                delete
                </span></td></a>
            
        </tr>
        <tr>
            
        </tbody>`
        total.innerHTML = `Total: $${totalPrice}`;
       /* addToCart(items[0][0], items[0][1]);*/
    
    }

    function deletes(index){
        let area = document.getElementById(`item_${index}`);
        area.innerHTML = " ";
    }
}

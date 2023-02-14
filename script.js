fetch('https://fakestoreapi.com/products').then((data)=>{
    return data.json();
}).then((finaldata) => {
    console.log(finaldata);
    let data1 ="";
    finaldata.map((values)=>{
        data1+=`<div class="cards">
        <h1>${values.title}</h1>
        <img class="product-img" src="${values.image}" style="width:10em;"/>        
        <p class="category">${values.category}</p>
        <p class="price">${values.price}</p>
    </div> `
    });
    document.getElementById("container").innerHTML=data1;
});
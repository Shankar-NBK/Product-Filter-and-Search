let products=
{
    data:
    [
        {
            productName:"Regular White T-Shirt",
            category:"Topwear",
            price:"30",
            image:"images/white-t-shirt.jpg"
        },
        {
            productName:"Sporty Smartwatch",
            category:"Watch",
            price:"99",
            image:"images/sporty-smartwatch.jpg"
        },
        {
            productName:"Basic Knitted Top",
            category:"Topwear",
            price:"29",
            image:"images/knitted-top.jpg"
        },
        {
            productName:"Black Leather Jacket",
            category:"Jacket",
            price:"129",
            image:"images/black-leather-jacket.jpg"
        },
        {
            productName:"Stylish Pink Trouser",
            category:"Bottomwear",
            price:"89",
            image:"images/pink-trouser.jpg"
        },
        {
            productName:"Brows Men's Jacket",
            category:"Jacket",
            price:"1899",
            image:"images/brown-mens-jacket.jpg"
        },
        {
            productName:"Comfy Gray Pants",
            category:"Bottomwear",
            price:"49",
            image:"images/Comfy-gray-pants.jpg"
        },
        {
            productName:"Jeans for Women",
            category:"Bottomwear",
            price:"99",
            image:"images/Jeans-for-Women.jpg"
        },
        {
            productName:"Yellow Shirts Men",
            category:"Topwear",
            price:"49",
            image:"images/Yellow-Shirts-Men.jpg"
        },
    ],
}

for (let i of products.data)
{
    let card=document.createElement("div");
    card.classList.add("Card", i.category, "hide");
    let imgContainer=document.createElement("div");
    imgContainer.classList.add("image-container");
    let image=document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    //prodcuts
    let container=document.createElement("div");
    container.classList.add("container");
    let name=document.createElement("h5");
    name.classList.add("product-name");
    name.innerHTML=i.productName.toUpperCase();
    container.appendChild(name);
    card.appendChild(container);

    //price
    let price=document.createElement("h6");
    price.innerHTML="$" + i.price;
    container.appendChild(price);
    document.getElementById("products").appendChild(card);
}


//funtions
function filterProduct(value)
{
    let buttons=document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        if(value.toUpperCase()==button.innerText.toUpperCase())
        {
            button.classList.add("active");
        }

        else
        {
            button.classList.remove("active"); 
        }
    });

    let elements=document.querySelectorAll(".Card");
    elements.forEach((elements) =>
    {
        if(value=="all")
        {
            elements.classList.remove("hide");
        }

        else
        {
            if(elements.classList.contains(value))
            {
                elements.classList.remove("hide");
            }
            else
            {
                elements.classList.add("hide");
            }
        }
    });

}

document.querySelector(".search_Btn").addEventListener("click", () =>
{
    let search_input=document.querySelector("#Search_input").value;
    let elements=document.querySelectorAll(".product-name");
    let cards=document.querySelectorAll(".Card");

    elements.forEach((element, index) =>
    {
            if(element.innerText.includes(search_input.toUpperCase()))
            {
                cards[index].classList.remove("hide");
            }
            else
            {
                cards[index].classList.add("hide");
            }
    })
}

);

window.onload = () => {
    filterProduct("all");
}
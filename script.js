// =====================================================
// FIBER PERFUME
// =====================================================


// ================= MOBILE MENU =================

const mobileMenu = document.getElementById("mobileMenu");


function openMenu() {

    mobileMenu.classList.add("active");

}


function closeMenu() {

    mobileMenu.classList.remove("active");

}


// ================= WHATSAPP NUMBER =================

// Your WhatsApp number:
// 03087601822
//
// International format:
// 923087601822

const whatsappNumber = "923087601822";


// ================= WHATSAPP ORDER =================

function orderProduct(productName, price) {


    const message =
`Hello Fiber Perfume,

I am interested in buying this perfume.

Product: ${productName}
Price: ${price}

Please provide me with the complete details, including availability, delivery charges, and payment method.

I would like to purchase this product.

Thank you.`;


    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);


    window.open(
        whatsappURL,
        "_blank"
    );

}
document.addEventListener("DOMContentLoaded", function () {

    console.log("✅ main.js loaded");

    /*
    ==========================================
    Product Data
    ==========================================
    */

    const product = products.tshirt001;

    // Reusable GA4 Item Object
    const ecommerceItem = {
        item_id: product.id,
        item_name: product.name,
        item_brand: product.brand,
        item_category: product.category,
        item_variant: product.variant,
        price: product.price,
        quantity: product.quantity
    };

    /*
    ==========================================
    View Item
    ==========================================
    */

    const addToCartBtn = document.getElementById("addToCartBtn");

    if (addToCartBtn) {

        pushDataLayer("view_item", {

            currency: product.currency,
            value: product.price,
            items: [ecommerceItem]

        });

        console.log("✅ View Item Fired");

    }

    /*
    ==========================================
    Add To Cart
    ==========================================
    */

    if (addToCartBtn) {

        addToCartBtn.addEventListener("click", function () {

            pushDataLayer("add_to_cart", {

                currency: product.currency,
                value: product.price,
                items: [ecommerceItem]

            });

            console.log("✅ Add To Cart Fired");

            setTimeout(function () {

                window.location.href = "cart.html";

            }, 100);

        });

    }

    /*
    ==========================================
    Begin Checkout
    ==========================================
    */

    const checkoutBtn = document.getElementById("checkoutBtn");

    if (checkoutBtn) {

        checkoutBtn.addEventListener("click", function () {

            pushDataLayer("begin_checkout", {

                currency: product.currency,
                value: product.price,
                items: [ecommerceItem]

            });

            console.log("✅ Begin Checkout Fired");

            setTimeout(function () {

                window.location.href = "checkout.html";

            }, 100);

        });

    }

    /*
    ==========================================
    Purchase
    ==========================================
    */

    const checkoutForm = document.getElementById("checkoutForm");

    if (checkoutForm) {

        console.log("✅ Checkout form found");

        checkoutForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const transactionId = "ORDER-" + Date.now();

            pushDataLayer("purchase", {

                transaction_id: transactionId,
                currency: product.currency,
                value: product.price,
                items: [ecommerceItem]

            });

            console.log("✅ Purchase Fired");

            setTimeout(function () {

                window.location.href = "thankyou.html";

            }, 300);

        });

    }

});
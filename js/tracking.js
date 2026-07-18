console.log("✅ tracking.js loaded");

window.dataLayer = window.dataLayer || [];

function pushDataLayer(eventName, ecommerce = {}) {

    window.dataLayer.push({

        event: eventName,

        ecommerce: ecommerce

    });

    console.log("📦 Event:", eventName);

    console.table(window.dataLayer);

}
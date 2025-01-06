export const fetchProductData2 = async (url) => {
  try {
    const response = await fetch(url); // Fetch the HTML
    if (!response.ok) throw new Error("Failed to fetch the webpage");

    const htmlText = await response.text(); // Get HTML as text
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, "text/html"); // Parse HTML

    // Extract product data using selectors
    const products = Array.from(
      doc.querySelectorAll(".product-grid .product-item")
    ).map((product) => ({
      title:
        product
          .querySelector(".woocommerce-loop-product__title")
          ?.innerText.trim() || "No Title",
      price: product.querySelector(".price")?.innerText.trim() || "No Price",
      image:
        product.querySelector(".attachment-woocommerce_thumbnail")?.src ||
        "No Image",
      link: product.querySelector("a")?.href || "No Link",
    }));

    return products; // Return scraped product data
  } catch (error) {
    console.error("Error fetching product data:", error.message);
    return [];
  }
};
export const fetchProductData = async (url) => {
  const proxy = "https://cors-anywhere.herokuapp.com/";
  try {
    const response = await fetch(proxy + url);
    if (!response.ok) throw new Error("Failed to fetch the webpage");

    const htmlText = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, "text/html");

    const products = Array.from(
      doc.querySelectorAll(".product-grid .product-item")
    ).map((product) => ({
      title:
        product
          .querySelector(".woocommerce-loop-product__title")
          ?.innerText.trim() || "No Title",
      price: product.querySelector(".price")?.innerText.trim() || "No Price",
      image:
        product.querySelector(".attachment-woocommerce_thumbnail")?.src ||
        "No Image",
      link: product.querySelector("a")?.href || "No Link",
    }));

    return products;
  } catch (error) {
    console.error("Error fetching product data:", error.message);
    return [];
  }
};

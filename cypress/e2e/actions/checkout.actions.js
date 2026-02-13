import { ProductPage } from "../../pages/product.page.js";
import { CartPage } from "../../pages/cart.page.js";
import { CheckoutPage } from "../../pages/checkout.page.js";


export function doCheckout(dados) {
  const product = new ProductPage();
  const cart = new CartPage();
  const checkout = new CheckoutPage();

  // Produto
  product.visitProduct();
  product.selectSize("S");
  product.selectColor("Green");
  product.increaseQty(1);
  product.addToCart();
  product.goToCart();

  // Carrinho
  cart.validarCarrinho();
  cart.proceedToCheckout();

  // Checkout (só preencher, sem finalizar compra ainda)
  checkout.validarCheckout();
  checkout.preencherCheckoutCompleto(dados);
  
}

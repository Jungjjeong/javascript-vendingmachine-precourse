import { DIVIDE_CHARGE, ZERO } from '../../constants.js';

// 값이 있는지 체크
export function checkProductName(productName) {
  console.log(productName);
  let allowProductName = false;
  if (productName) {
    allowProductName = true;
  }

  return allowProductName;
}

// 가격이 0원 초과, 10으로 나누어 떨어지는지
export function checkProductPrice(productPrice) {
  console.log(productPrice);
  let allowProductPrice = false;
  if (productPrice > 0 && productPrice % DIVIDE_CHARGE == ZERO) {
    allowProductPrice = true;
  }

  return allowProductPrice;
}

export function checkProductQuantity(productQuantity) {
  console.log(productQuantity);
  let allowProductQuantity = false;
  if (productQuantity > 0) {
    allowProductQuantity = true;
  }

  return allowProductQuantity;
}
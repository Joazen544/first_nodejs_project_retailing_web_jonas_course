module.exports = (temp, source) => {
  let output = temp.replace(/{%PRODUCTNAME%}/g, source.productName);
  output = output.replace(/{%IMAGE%}/g, source.image);
  output = output.replace(/{%FROM%}/g, source.from);
  output = output.replace(/{%NUTRIENTS%}/g, source.nutrients);
  output = output.replace(/{%QUANTITY%}/g, source.quantity);
  output = output.replace(/{%PRICE%}/g, source.price);
  output = output.replace(/{%DESCRIPTION%}/g, source.description);
  output = output.replace(/{%ID%}/g, source.id);

  if (!source.organic) {
    output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic");
  } else {
    output = output.replace(/{%NOT_ORGANIC%}/g, "card__detail--organic");
  }

  return output;
};

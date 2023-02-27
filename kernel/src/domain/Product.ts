
export type ProductTitle = string;


export interface IProduct {
  id: string;
  title: ProductTitle;
  price: TRub;
  toppings: string[];
}


export const ingredients: Record<TIngredient, string> = {
  chocolate: "Chocolate",
  cocoa: "Cocoa Powder",
  cherry: "Cherry",
  marshmallow: "Marshmallow",
  peanuts: "Peanut Butter",
};

export function totalPrice(products: IProduct[]): TRub {
  return products.reduce((total, { price }) => total + price, 0);
}

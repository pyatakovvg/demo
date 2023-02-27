
export type TUserName = string;

export interface IUser {
  id: TUniqueId;
  name: TUserName;
  email: TEmail;
  allergies: TIngredient[];
  preferences: TIngredient[];
}


export function hasAllergy(user: IUser, ingredient: TIngredient): boolean {
  return user.allergies.includes(ingredient);
}

export function hasPreference(user: IUser, ingredient: TIngredient): boolean {
  return user.preferences.includes(ingredient);
}

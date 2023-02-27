
import { TUserName } from "@domain/User";

import { useAuth } from "@services/authAdapter";
import { useUserStorage } from "@services/storageAdapter";

import { IAuthenticationService, IUserStorageService } from "@application/ports";


export function useAuthenticate() {
  const storage: IUserStorageService = useUserStorage();
  const auth: IAuthenticationService = useAuth();

  async function authenticate(name: TUserName, email: TEmail): Promise<void> {
    const user = await auth.auth(name, email);

    storage.updateUser(user);
  }

  return {
    user: storage.user,
    authenticate,
  };
}

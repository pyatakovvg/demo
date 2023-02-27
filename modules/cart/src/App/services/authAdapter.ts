
import { TUserName } from "@domain/User";

import { IAuthenticationService } from "@application/ports";

import { fakeApi } from "./api";


export function useAuth(): IAuthenticationService {
  return {
    auth(name: TUserName, email: TEmail) {
      return fakeApi({
        name,
        email,
        id: "sample-user-id",
        allergies: ["cocoa", "cherry"],
        preferences: ["marshmallow", "peanuts"],
      });
    },
  };
}

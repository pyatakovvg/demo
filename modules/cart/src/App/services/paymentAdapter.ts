
import { IPaymentService } from "@application/ports";

import { fakeApi } from "./api";


export function usePayment(): IPaymentService {
  return {
    tryPay(amount: TPriceCents) {
      return fakeApi(true);
    },
  };
}

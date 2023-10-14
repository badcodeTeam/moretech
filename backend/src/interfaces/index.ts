import { AtmServiceActivity, AtmServiceCapability } from "../enum";

export interface AtmServiceSpec {
  serviceCapability: AtmServiceCapability;
  serviceActivity: AtmServiceActivity;
}

export interface LocationSpec {
  longitude: number;
  latitude: number;
}

export interface ServiceFilterSpec {
  wheelchair: boolean;
  blind: boolean;
  nfcForBankCards: boolean;
  qrRead: boolean;
  supportsUsd: boolean;
  supportsChargeRub: boolean;
  supportsEur: boolean;
  supportsRub: boolean;
}

export interface BankFilterSpec {
  load: boolean;
  filter: {
    rko: boolean;
    hasRamp: boolean;
    suoAvailability: boolean;
  };
}
import { BloodTypeEnum } from "../enums/bloodTypeEnum";
import { GenderEnum } from "../enums/genderEnum";
import { RhFactorEnum } from "../enums/rhFactorEnum";

export interface Donor {
  fullName: string;
  email: string;
  birthDate: Date;
  gender: GenderEnum;
  weight: number;
  bloodType: BloodTypeEnum;
  rhFactor: RhFactorEnum;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
}

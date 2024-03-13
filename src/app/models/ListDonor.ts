import { BloodTypeEnum } from "../enums/bloodTypeEnum";
import { GenderEnum } from "../enums/genderEnum";
import { RhFactorEnum } from "../enums/rhFactorEnum";

export interface ListDonor {
  id: number;
  fullName: string;
  gender: GenderEnum;
  weight: number;
  bloodType: BloodTypeEnum;
  rhFactor: RhFactorEnum;
  active: boolean;
}

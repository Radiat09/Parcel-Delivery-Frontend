export type TParcelStatus =
  | "REQUESTED"
  | "APPROVED"
  | "PICKED"
  | "IN_TRANSIT"
  | "DELIVERED"
  | "CANCELLED"
  | "RETURNED";

export type TPackageType = "DOCUMENT" | "PACKAGE" | "FRAGILE";

export interface IStatusLog {
  status: TParcelStatus;
  updatedBy: string;
  note?: string;
  createdAt: Date;
}

export interface IPackageDetails {
  type: TPackageType;
  weight: number; // in kg
  description?: string;
}

export interface IReceiverInfo {
  name: string;
  phone: string;
  address: string;
  email: string;
}

export interface IParcel {
  _id: string;
  trackingId: string;
  sender: string;
  receiver: IReceiverInfo;
  packageDetails: IPackageDetails;
  fee: number;
  currentStatus: TParcelStatus;
  statusLog: IStatusLog[];
  isBlocked: boolean;
  expectedDeliveryDate?: Date;
  actualDeliveryDate?: Date;
  isNew?: boolean;
}

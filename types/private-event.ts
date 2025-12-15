export type ApprovalStatus =
  | "PENDING"
  | "APPROVED"
  | "REJECTED";

export interface SelectedMenuItem {
  title: string;
  quantity: number;
}

export interface SelectedMenuCategory {
  category: string;
  items: SelectedMenuItem[];
}

export interface PrivateEventMenuRequest {
  name: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:mm
  pax: number;
  notes?: string;

  menu: SelectedMenuCategory[];
  status: ApprovalStatus;
}

export interface UserCard {
  id: number;
  customer: string;
  owner_name: string;
  masked_pan: string;
  expire: number;
  title: string;
  logo: string;
  status: string;
  type: string;
  is_main: boolean;
  is_favorite: boolean;
  can_block: boolean;
  can_unblock: boolean;
  message: string;
  currency: string;
  provider: string;
  balance?: number | null;
  can_receive_loan?: boolean | null;
  mfo?: string;
  account?: string;
  transit_account?: string;
  transit_account_y?: string;
}

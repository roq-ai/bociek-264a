import { FirmaInterface } from 'interfaces/firma';
import { GetQueryInterface } from 'interfaces';

export interface CustomerInterface {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  firma_id?: string;
  created_at?: any;
  updated_at?: any;

  firma?: FirmaInterface;
  _count?: {};
}

export interface CustomerGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  firma_id?: string;
}

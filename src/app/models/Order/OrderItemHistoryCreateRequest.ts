import { OrderItemChangeType } from './OrderItemChangeType';

export interface OrderItemHistoryCreateRequest {
  itemId: string;
  qty: number;
  changeType: OrderItemChangeType;
}
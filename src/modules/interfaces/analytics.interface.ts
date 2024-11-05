export interface IAnalytics {
    labels: string[];
    data: number[]
}

export interface IStats {
  cancelledOrders: number;
  deliveredOrders: number;
  pendingOrders: number;
  totalOrder: number;
}
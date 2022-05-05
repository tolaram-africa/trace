export interface ITask {
  id?: string;
  type?: string;
  status?: null | string;
  startTime?: string;
  deliveryEstimate?: null | string;
  source?: null | string;
  destination?: null | string;
  customer?: null | string;
}

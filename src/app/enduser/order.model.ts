
import { OrderLine } from '../enduser/orderLine.model';

export class Order {

    constructor(
        public OrderID?: number,
        public Description?: string,
        public EndUserID?: number,
        public CompanyId?: number,
        public OrderLines?: OrderLine[]) { }

}
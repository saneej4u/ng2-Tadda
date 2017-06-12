import { Order } from '../enduser/order.model';
import { Notification} from './notification.model';

export class Enduser {

  /*  public EndUserId:number;
    public FirstName: string;
    public LastName: string;
    public EmailAddress: string;
    public CompanyId: number;
    public ProfilePicUrl: string;
    public DateOfBirth: string;
    public IOSDeviceId: string;
    public AndroidDeviceId: string;
    public Orders:Order[]; */

  constructor(
    public EndUserId: number,
    public FirstName: string,
    public LastName: string,
    public EmailAddress: string,
    public ProfilePicUrl: string,
    public DateOfBirth: string,
    public IOSDeviceId: string,
    public AndroidDeviceId: string,
    public Orders: Order[],
    public Notifications?: Notification[],
    public CompanyId?: number) { }
}


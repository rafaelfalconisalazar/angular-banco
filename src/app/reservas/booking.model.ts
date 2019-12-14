import {Field} from "./field.model";
import {User} from "./user.model";

export interface Booking {
  id?: number;
  date?: string;
  user?: User;
  field?: Field;

}

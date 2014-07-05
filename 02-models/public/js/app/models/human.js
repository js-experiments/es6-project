import Model from '../core/model';

class Human  extends Model {
  constructor (fields) {
    //superclass's constructor invocation
    super(fields, "/humans");
  }
}

export default Human;
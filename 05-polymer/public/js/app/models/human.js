import Model from '../core/model';

class Human  extends Model {
  constructor (fields) {
    //superclass's constructor invocation
    super(fields, "/humans");

    //Getters and Setters
    Object.defineProperty(this, "firstName", {
      get: function (){ return this.fields["firstName"]} ,
      set: function (value) { this.fields["firstName"]=value; }
    });

    Object.defineProperty(this, "lastName", {
      get: function (){ return this.fields["lastName"]} ,
      set: function (value) { this.fields["lastName"]=value; }
    });

  }
}

export default Human;
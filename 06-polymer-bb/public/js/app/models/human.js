
class Human extends Backbone.Model {

  constructor (args) {
    super(args)

    //Getters and Setters
    Object.defineProperty(this, "firstName", {
      get: function (){ return this.get("firstName")} ,
      set: function (value) { this.set("firstName",value); }
    });

    Object.defineProperty(this, "lastName", {
      get: function (){ return this.get("lastName")} ,
      set: function (value) { this.set("lastName",value); }
    });

  }
}

export default Human;
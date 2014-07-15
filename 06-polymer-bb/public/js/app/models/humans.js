import Human from './human';

class Humans extends Backbone.Collection {

  constructor (args) {
    this.model = Human;
    this.url = "/humans";
    super(args)
  }
}

export default Humans;
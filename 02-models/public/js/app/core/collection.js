class Collection {
  constructor (model, url, models) {
    this.model = model;
    this.url = url !== undefined ? url : "";
    this.models = models !== undefined ? models : [];

    this.observers = [];
  }

  addObserver (observer) {
    this.observers.push(observer);
  }

  notifyObservers (context) {
    this.observers.forEach((observer) => {
      observer.update(context)
    })
  }


  add (model) {
    this.models.push(model);
    return this;
  }

  size () { return this.models.length; }

  fetch () {
    return $.ajax({url: this.url, type: "GET", data: this.fields, success: (models) => {
      this.models = []; /* empty list */
      models.forEach((fields) => {
        this.add(new this.model(fields));
      })
      this.notifyObservers("fetch");
    }})
  }

}

export default Collection;


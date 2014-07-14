class HumansView { // this is an observer

  constructor (humansCollection) {
    humansCollection.addObserver(this);
    this.collection = humansCollection;
    this.list = $("humansList");
  }

  render () {
    this.list.html(this.collection.models.reduce((previous, current) => {
      return previous +
        `<li><h3>
          ${current.id()} :
          ${current.get("firstName")}
          ${current.get("lastName")}
        </h3></li>`;
    }, "<ul>") + "</ul>");
  }

  update (context) {
    console.log(context);
    this.render();
  }
}

export default HumansView;
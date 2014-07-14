
class HumansList {

  view ()  { return `
    <ul>
      {{#each humans}}
      <li>{{id}} {{firstName}} {{lastName}}</li>
      {{/each}}
    </ul>
  `;}

  constructor (humansCollection) {
    humansCollection.addObserver(this);
    this.humans = humansCollection;
    this.template = Handlebars.compile(this.view());
    this.el = document.querySelector("humans-list");
  }

  render () {
    this.el.innerHTML = this.template({humans: this.humans.toJson()});
  }

  update (context) {
    this.render();
  }

}

export default HumansList;

//TODO: extend View, el is a parameter, load external template
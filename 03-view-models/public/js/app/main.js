
import Human from './models/human';
import Humans from './models/humans';
import HumansView from './views/humansView';

class Application {

  constructor () {
    $("h1").html("E6 rocks!")

    var humans = new Humans();

    var humansView = new HumansView(humans);

    humans.fetch().done(()=>{ /* get all humans from database */

      if(humans.size()==0) { /* no human in database, then populate the collection */

        var bob = new Human({firstName:'Bob', lastName:'Morane'});
        var john = new Human({firstName:'John', lastName:'Doe'});
        var jane = new Human({firstName:'Jane', lastName:'Doe'});

        /* save models */
        bob.save().done(
          () => john.save().done(
            () => jane.save().done(
              ()=> humans.fetch().done(console.log(humans)) /* fetch again */
            )
          )
        );

      } else { /* display humans */
          console.log(humans);
      }
    })
  }

}

$(() => {
  new Application();
});





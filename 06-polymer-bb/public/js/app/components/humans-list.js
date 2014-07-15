import Human from '../models/human';
import Humans from '../models/humans';

Polymer("humans-list",{
  ready: function () {

    this.humansCollection = new Humans();
    this.humansCollection.on({"fetch":this.update()});

    this.humansCollection.fetch().done(()=>{ /* get all humans from database */

      if(this.humansCollection.size()==0) { /* no human in database, then populate the collection */

        var bob = new Human({firstName:'Bob', lastName:'Morane'});
        var john = new Human({firstName:'John', lastName:'Doe'});
        var jane = new Human({firstName:'Jane', lastName:'Doe'});

        /* save models */
        bob.save().done(
          () => john.save().done(
            () => jane.save().done(
              ()=> this.humansCollection.fetch().done(console.log("humans created:", this.humansCollection)) /* fetch again */
            )
          )
        );

      } else { /* display humans */
        console.log("humans loaded:", this.humansCollection);
      }
    })

  },

  update: function() { // called when collection is "fetched"
    this.humans = this.humansCollection.models;
  }
});


import Collection from '../core/collection';
import Human from './human';

class Humans extends Collection{

  constructor (humans) {
    super(Human,"/humans",humans);

  }
}

export default Humans;
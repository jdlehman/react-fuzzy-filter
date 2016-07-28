import {Subject} from 'rxjs/Subject';
import inputFilterFactory from './InputFilter';
import filterResultsFactory from './FilterResults';

export default function fuzzyFilterFactory() {
  const store = new Subject();
  return {
    InputFilter: inputFilterFactory(store),
    FilterResults: filterResultsFactory(store)
  };
}

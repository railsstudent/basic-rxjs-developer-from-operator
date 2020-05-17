import { Observable } from 'rxjs';
import { from } from 'rxjs';

interface Fruit {
  name: string;
  icon: string;
  isFresh: boolean;
}
const fruits: Fruit[] = [
  {
    name: "apple",
    icon: "🍎",
    isFresh: true,
  },
  {
    name: "banana",
    icon: "🍌",
    isFresh: true,
  },
  {
    name: "stawberry",
    icon: "🍓",
    isFresh: true,
  },
];

function processData(source: Observable<Fruit>) {
    source.subscribe({
        next(fruit) {console.log(fruit)}
    })
}
// Add solution below, besides imports nothing needs to be changed above
// Convert the Array of fruits to an `Observable` to call the function `processData`.

const fruits$ = from(fruits);
processData(fruits$);
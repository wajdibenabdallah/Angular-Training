import { Component, OnInit } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import {
  tap,
  map,
  merge,
  concat,
  mergeMap,
  switchMap,
  debounceTime,
  delay,
  take,
} from 'rxjs/operators';

@Component({
  selector: 'app-rx-js',
  templateUrl: './rx-js.component.html',
})
export class RxJsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // this.task1(); // Observable-Observer
    // this.task2(); // of
    // this.task3(); // from
    // this.task4(); // Promise.all
    // this.task5(); // pipe-map-tap
    // this.task6(); // merge-concat-switchMap-mergeMap
    // this.task7(); // take-debouncedTime
  }

  task1(): void {
    const observable = new Observable((subscriber) => {
      subscriber.next('sofiene');
      subscriber.next('zied');
      subscriber.next('mohamed');
      subscriber.next('wajdi');
      subscriber.next('anwer');
      setTimeout(() => {
        subscriber.complete();
      }, 3000);
      // subscriber.error('error');
    });

    observable.subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('end');
      }
    );
  }

  task2(): void {
    const observable = of(
      'anwer',
      {
        name: 'wajdi',
      },
      'mohamed',
      'zied',
      'sofiene',
      () => {
        return 'test_function';
      }
    );
    const observer = {
      next: (data: string | object | Function) => {
        console.log(data);
        console.log(typeof data);
      },
      error: (error1: string) => {
        console.log(error1);
      },
      complete: function () {
        console.log('done');
      },
    };
    observable.subscribe(observer);
  }

  task3(): void {
    const observable = from([
      'anwer',
      'wajdi',
      'mohamed',
      'zied',
      'sofiene',
      5,
    ]);
    const observer = {
      next: (data: string) => {
        console.log(data);
      },
      error: (error2: string) => {
        console.log(error2);
      },
      complete: () => {
        console.log('done');
      },
    };
    // observable.subscribe(observer);
    // Promise
    const condition = false;
    const myPromise = new Promise((resolve, reject) => {
      console.log('excecute promise');
      if (condition) {
        resolve('wajdi');
      } else {
        reject('error');
      }
    });

    /*
    myPromise
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
        */

    const Observable2 = from(myPromise);
    Observable2.subscribe(
      (data) => {
        console.log(data);
      },
      (error2) => {
        console.log(error2);
      },
      () => {
        console.log('DONE');
      }
    );
  }

  task4(): void {
    const promiseA = new Promise((resolve, reject) => {
      if (false) {
        resolve('Success A');
      } else {
        reject('Fail A');
      }
    });
    const promiseB = new Promise((resolve, reject) => {
      if (false) {
        resolve('Success B');
      } else {
        reject('Fail B');
      }
    });
    const promiseC = new Promise((resolve, reject) => {
      if (true) {
        resolve('Success C');
      } else {
        reject('Fail C');
      }
    });

    Promise.all([promiseA, promiseB, promiseC])
      .then((success) => console.log(success)) // ["Success A", "Success B", "Success C"]
      .catch((error) => console.error(error)); // Fail B
  }

  task5(): void {
    const observable = from(['A', 'B', 'C', 'D', 'E', 'F']);
    observable
      .pipe(
        tap((value: string) => {
          console.log('value = ', value);
        }),
        map((value) => {
          const newValue = value + '-Test';
          return newValue;
        }),
        tap((value: string) => {
          console.log('value = ', value);
        })
      )
      .subscribe();
  }

  task6(): void {
    const observable1 = from(['A', 'B']);
    const observable2 = of(1, 2, 3, 4, 5);
    // tslint:disable-next-line: deprecation
    observable1.pipe(merge(observable2)).subscribe((data) => {
      // console.log(data);
    });
    // tslint:disable-next-line: deprecation
    observable1.pipe(concat(observable2)).subscribe((data) => {
      // console.log(data);
    });

    const asynFunction = (): Observable<string> => {
      const observableCity = of(
        'Paris',
        'Tunis',
        'Sousse',
        'Mahdia',
        'Stuttgart'
      );
      return observableCity;
    };

    observable1
      .pipe(
        delay(500),
        mergeMap((caracter) =>
          asynFunction().pipe(
            // tap((city) => console.log(city)),
            delay(500),
            map((city) => caracter + ' * ' + city)
          )
        )
      )
      .subscribe((data) => {
        // console.log(data);
      });

    console.log('-------------------------');

    observable1
      .pipe(
        switchMap((caracter) => {
          console.log('=>', caracter);
          return asynFunction().pipe(
            tap((city) => console.log(city)),
            delay(1),
            map((city) => caracter + ' - ' + city)
          );
        })
      )
      .subscribe((data) => {
        console.log(data);
      });
  }

  task7(): void {
    const observable1 = from(['A', 'B']);
    const observable2 = of(1, 2, 3, 4, 5);

    observable2
      .pipe(debounceTime(0), take(2))
      .subscribe((data) => console.log('data = ', data));
  }
}

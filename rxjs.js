let stream$ = Rx.Observable.create((observer) => {
	// observer.error('error message');
	observer.next('data');
	observer.complete();
});

stream$.subscribe(
	(data) => console.log('data', data),
	(error) => console.log('error', error),
	(data) => console.log('complete')
);
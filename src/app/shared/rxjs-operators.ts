// Observable class extensions
import { of ,  throwError as _throw ,  EMPTY as empty } from 'rxjs';

/* Note: A few operators have been renamed to avoid conflicts with Javascript keywords
do -> tap
switch -> switchAll
catch -> catchError
finally -> finalize */

// Observable operators
import { finalize ,  tap ,  map ,  catchError ,  switchMap ,  mergeMap ,  filter ,  skipWhile } from 'rxjs/operators';

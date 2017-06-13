import { asyncStatement } from './statements';
import { promisify } from './promisify';
import { bold } from 'chalk';

const flowStr = bold.green('async flow');
const asyncStatementWithPromise = promisify(asyncStatement);


asyncStatementWithPromise(() => console.log(`${flowStr} #1`))
  .then(() => asyncStatementWithPromise(() => console.log(`${flowStr} #2`)))
  .then(() => asyncStatementWithPromise(() => console.log(`${flowStr} #3`)))
  .then(() => asyncStatementWithPromise(() => console.log(`${flowStr} #4`)))
  .then(() => asyncStatementWithPromise(() => console.log(`${flowStr} #5`)));


(async () => {
  await asyncStatementWithPromise(() => console.log(`${flowStr} #1`));
  await asyncStatementWithPromise(() => console.log(`${flowStr} #2`));
  await asyncStatementWithPromise(() => console.log(`${flowStr} #3`));
  await asyncStatementWithPromise(() => console.log(`${flowStr} #4`));
  await asyncStatementWithPromise(() => console.log(`${flowStr} #5`));
})();

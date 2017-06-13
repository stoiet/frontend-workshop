import { syncStatement, asyncStatement } from './statements';
import { bold } from 'chalk';

const syncStr = bold.cyan('sync statement');
const asyncStr = bold.yellow('async statement');
const flowStr = bold.green('async flow');

syncStatement(() => console.log(`${syncStr} #1`));
syncStatement(() => console.log(`${syncStr} #2`));
syncStatement(() => console.log(`${syncStr} #3`));


asyncStatement(() => console.log(`${asyncStr} #1`));
asyncStatement(() => console.log(`${asyncStr} #2`));
asyncStatement(() => console.log(`${asyncStr} #3`));


asyncStatement(() => {
  console.log(`${flowStr} #1`);
  asyncStatement(() => {
    console.log(`${flowStr} #2`);
    asyncStatement(() => console.log(`${flowStr} #3`));
  });
});

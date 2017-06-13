import { getSubRedditComments } from './';
import { items } from './sub-reddit-items';
import { comments } from './comments';
import { head, last } from 'ramda';
import { v4 } from 'uuid';
import * as nock from 'nock';

describe('[04] #getSubRedditComments', () => {

  it('should return with comments from sub-reddits have #language tag', done => {
    const tokens = [v4(), v4()];
    nock('http://reddit.com').get('/api/sub-reddits').reply(200, items);
    nock('http://reddit.com').get('/api/1000/subscribe').reply(202, { token: head(tokens) });
    nock('http://reddit.com').get('/api/1001/subscribe').reply(202, { token: last(tokens) });
    nock('http://reddit.com').post('/api/sub-reddit/1000/comments', { token: head(tokens) }).reply(200, comments[1000]);
    nock('http://reddit.com').post('/api/sub-reddit/1001/comments', { token: last(tokens) }).reply(200, comments[1001]);

    const expectedComments = comments[1000].concat(comments[1001]);
    getSubRedditComments().then(comments => {
      expect(comments).toEqual(expectedComments);
      done();
    });
  });

});

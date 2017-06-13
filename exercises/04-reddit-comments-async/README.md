### Exercise
- first of all, get all sub reddit with GET http://reddit.com/api/sub-reddits
- subscribe to sub-reddits with #language tag (only two) with GET http://reddit.com/api/<id>/subscribe
- use token from subscription to get all comments from every subscried sub-reddit with POST http://reddit.com/api/sub-reddit/<id>/comments BODY: { token }
- return the list of comments

### Hints
- Use async functions!
- Use axios npm package to make requests [axios](https://www.npmjs.com/package/axios)

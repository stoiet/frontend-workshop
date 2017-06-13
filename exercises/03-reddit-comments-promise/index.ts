import axios from 'axios';
import { flatten, prop } from 'ramda';

const getData = prop('data');

interface Item {
  id: string;
  name: string;
  tags: string[];
}

type ItemResponse = { data: Item[] };

const getFilteredItemIds = ({ data: items }: ItemResponse) => items
  .filter(item => item.tags.includes('#language'))
  .map(item => item.id);

const subscribeByIds = (itemIds: string[]) =>
  Promise.all(itemIds.map(subscribe));

const subscribe = id => axios
  .get(`http://reddit.com/api/${id}/subscribe`)
  .then(response => ({ id: id, token: getData(response) }));

const getCommentsFromSubscriptions = subscriptions =>
  Promise.all(subscriptions.map(getComments));

const getComments = ({ id, token }) => axios
  .post(`http://reddit.com/api/sub-reddit/${id}/comments`, token)
  .then(getData);


export const getSubRedditComments = () => {
  return axios.get('http://reddit.com/api/sub-reddits')
    .then(getFilteredItemIds)
    .then(subscribeByIds)
    .then(getCommentsFromSubscriptions)
    .then(flatten);
};


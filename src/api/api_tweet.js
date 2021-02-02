import { getaxiosInstance } from './api';

export const getAllTweets = (callback) => {
  getaxiosInstance()
    .get('/tweets')
    .then((response) => {
      const data = response.data;
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};

export const getHashTags = (callback) => {
  getaxiosInstance()
    .get('/hashTags')
    .then((response) => {
      const data = response.data;
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};

export const getUsers = (callback) => {
  getaxiosInstance()
    .get('/users')
    .then((response) => {
      const data = response.data;
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};

export const newTweetRequest = (data, callback) => {
  getaxiosInstance()
    .post('/tweets', data)
    .then((res) => {
      callback(res.data, true);
    })
    .catch((error) => {
      callback(error, false);
    });
};

import axios from 'axios';

export default {
  Users: {
    login: function (email, password) {
      return axios.post('/api/users/login', { email, password });
    },

    getMe: function (authToken) {
      return axios.get('/api/users/me', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    },
    register: function (email, password) {
      return axios.post('/api/users/register', { email, password });
    }
  },

  Secrets: {
    getAll: function (authToken) {
      return axios.get('/api/secrets', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    }
  },

  Drinks: {
    createDrink: function (drink, authToken) {
      console.log(authToken);
      return axios({
        method: 'post',
        url: '/api/drinks',
        data: drink,
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    },
    getAll: function (authToken) {
      return axios.get('/api/drinks', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    },
    getMine: function (authToken) {
      // console.log(authToken)
      return axios({
        method: 'get',
        url: '/api/drinks/mine',
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    },
    delete: function (authToken, id) {
      return axios({
        method: 'delete',
        url: '/api/drinks/mine/' + id,
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    },
   
    getOne: function (authToken, id) {
      console.log(authToken)
      return axios({
        method: 'get',
        url: '/api/drinks/'+id,
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    },

    search: function (authToken, name) {
      console.log(authToken)
      return axios({
        method: 'get',
        url: '/api/drinks/search?name='+name,
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    }
  }
}

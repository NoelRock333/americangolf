import { EventEmitter } from 'events';
import request from 'superagent';

const CHANGE_EVENT = 'change';
let ajaxRequests = [];

const EventsStore = Object.assign({}, EventEmitter.prototype, {
  emitChange: function emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  unsuscribe() {
    ajaxRequests.forEach(req => {
      if (req.hasOwnProperty('abort')) {
        req.abort();
      }
    });
    ajaxRequests = [];
  },

  async fetch() {
    const response = await fetch('/products', {
      method: 'GET'
    });
    const responseData = await response.json();
    ajaxRequests.push(response);
    console.log(responseData);
    return responseData;
  },

  async getById(id) {
    const response = await fetch('/products/' + id, {
      method: 'GET'
    });
    const responseData = await response.json();
    ajaxRequests.push(response);
    return responseData;
  }
});

export default EventsStore;

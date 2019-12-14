import Vue from 'vue'
const EventBus = new Vue()

Vue.prototype.$eventBus = EventBus;

export default EventBus;
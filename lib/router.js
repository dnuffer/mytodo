Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { 
    return Meteor.subscribe('tasks'); 
  }
});

Router.route('/', {name: 'tasksList'});
Router.route('/tasks/:_id', {
  name: 'taskPage',
  data: function() { return Tasks.findOne(this.params._id); }
});
Router.onBeforeAction('dataNotFound', {only: 'taskPage'});

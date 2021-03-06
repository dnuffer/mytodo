Tasks = new Mongo.Collection('tasks');

Tasks.allow({
  insert: function(userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  }
});

Meteor.methods({
  addTask: function(taskAttributes) {
    check(Meteor.userId(), String);
    check(taskAttributes, {
      text: String,
      checked: Boolean,
      dueDate: Date
    });
    var user = Meteor.user();
    var task = _.extend(taskAttributes, {
      userId: user._id, 
      author: user.username, 
      submitted: new Date()
    });
    var taskId = Tasks.insert(task);
    return {
      _id: taskId
    };
  },

  deleteTask: function (taskId) {
    Tasks.remove(taskId);
  },

  setChecked: function (taskId, setChecked) {
    Tasks.update(taskId, { $set: { checked: setChecked} });
  }
});

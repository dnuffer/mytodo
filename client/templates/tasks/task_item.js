Template.taskItem.rendered = function() {
    $('.datetimepicker').datetimepicker();
}

Template.taskItem.events({
  "click .toggle-checked": function () {
    // Set the checked property to the opposite of its current value
    Meteor.call("setChecked", this._id, ! this.checked);
  },
  "click .delete": function () {
    Meteor.call("deleteTask", this._id);
  }
});

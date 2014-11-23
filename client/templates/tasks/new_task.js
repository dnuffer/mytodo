Template.newTask.events({
  "submit .new-task": function (e) {
    // This function is called when the new task form is submitted
    e.preventDefault();

    var task = {
      text: $(e.target).find('[name=text]').val(),
      checked: false
    };

    Meteor.call("addTask", task, function(error, result) {
      // display the error to the user and abort
      if (error)
        return alert(error.reason);
    });

    // Clear form
    event.target.text.value = "";

    // Prevent default form submit
    return false;
  }
});

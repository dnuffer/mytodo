if (Tasks.find().count() === 0) {
  Tasks.insert({
    text: 'Do something',
    checked: false
  });
}

Meteor.publish('announcements', function(){
  return Announcements.find({});
});
Meteor.publish("albums", function () {
	return Albums.find();
});
Meteor.publish("pictures", function () {
	return Pictures.find();
});
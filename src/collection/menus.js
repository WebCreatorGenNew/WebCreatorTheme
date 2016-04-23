Menus = new Meteor.Collection("menus");
console.log(Menus.find().count());
if (Menus.find().count() === 0) {
  	Menus.insert({ _id: "1", title: "Home" });
  	Menus.insert({ _id: "2", title: "About" });
  	Menus.insert({ _id: "3", title: "Our Menu"});
  	Menus.insert({ _id: "4", title: "Contact"});
  }
Router.route('/', function () {
    // render the Home template with a custom data context
    this.render('Home', {data: {title: 'My Title'}});
});

// when you navigate to "/one" automatically render the template named "One".
Router.route('/one');

Template.Home.events({
    'click button': function () {
        Router.go('one', {_id: 1}, {query: 'q=s', hash: 'hashFrag'});
    }
});

Template.One.events({
    'click button': function () {
        console.log('Iron.controller(): ', Iron.controller());
        console.log('Router.controller().params: ', Router.current().params);
        console.log('Router.controller(): ', Router.current());
        console.log('Now expand Router.controller() above and go to params');
    }
});

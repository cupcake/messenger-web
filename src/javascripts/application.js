//= require ./messenger
//= require_self

Boiler.on('change:authenticated', function (authenticated) {
	if (authenticated) {
		TentContacts.daemonURL = Messenger.config.CONTACTS_URL;
		TentContacts.entity = Messenger.current_entity;
		TentContacts.serverMetaPost = Messenger.config.meta;
		TentContacts.credentials = Messenger.config.credentials;
		TentContacts.run();
	} else {
		TentContacts.stop(null);
	}
});

Boiler.signoutHandler = function () {
	TentContacts.stop(Boiler.performSignoutRedirect);
};

Boiler.once('config:ready', Messenger.run, Messenger, { args: false });
Boiler.fetchConfig();

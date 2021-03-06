/** @jsx React.DOM */

Messenger.Views.TruncatedMessage = React.createClass({
	displayName: 'Messenger.Views.TruncatedMessage',

	truncatedMessageText: function () {
		function truncate(str, len, elipses) {
			if (str.length <= len) {
				return str;
			}
			len = len - elipses.length;
			return str.substr(0, len) + elipses;
		}

		return truncate(this.props.message.get('content.text') || '', 50, '...');
	},

	render: function () {
		return (
			<p>
				{this.truncatedMessageText()}
			</p>
		);
	}
});

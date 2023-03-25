import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/joshcode25/pnp-yoga.git', // Update to point to your repository
		user: {
			name: 'Josh Gannon', // update to use your name
			email: 'joshcode25@gmail.com', // Update to use your email
		},
		dotfiles: true,
	},
	() => {
		console.log('Deploy Complete!');
	}
);

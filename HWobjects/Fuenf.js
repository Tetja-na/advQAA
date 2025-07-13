const users = [
	{
		name: 'Kati',
		email: 'katie@katie.gmail.com',
		age: 38,
	},
	{
		name: 'Kostia',
		email: 'kostia@kostia.gmail.com',
		age: 18,
	},
];
for (const user of users) {
	const { name, email, age } = user;

	console.log(`Name: ${name}, Email: ${email}, Jahre alt: ${age}`);
}

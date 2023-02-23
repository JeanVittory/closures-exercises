// Ejercicio 1
// Estás diseñando un sistema de facturación. Debes representar la lista de facturas,
// donde cada factura está compuesta de un número, el nombre del cliente, la fecha,
// y unos ítems. Cada ítem tiene un id de producto, un precio por unidad y una cantidad.

// ¿Cómo representarías esta lista utilizando arreglos y objetos?

const bills = [
	{
		id: 1,
		nameCustomer: 'Sebastian Alvarez',
		date: new Date().toLocaleDateString(),
		items: [
			{
				id: 1,
				unityPrice: 2000,
				quantity: 3,
			},
		],
	},
];

console.log(bills);

// Ejercicio 2
// Escribir una función crearContador que retorne una nueva función que incremente un número y lo retorne cada vez que es invocada:

const crearContador = () => {
	let num = 1;
	return function contar() {
		console.log(num++);
	};
};

const contar = crearContador();
contar(); // 1
contar(); // 2
contar(); // 3
contar(); // 4
// Recuerda de hacer uso de closures para evitar el uso de variables globales.

// Ejercicio 3
// Escribir una función createGame que retorne una nueva función que reciba un número y permita
// adivinar un número secreto del 1 al 100. Si el número es mayor al número secreto la función
// retorna la cadena “Muy alto!”, si el número es menor retorna la cadena “Muy bajo!”.
// Si el número es el correcto retorna “Lo adivinaste, felicitaciones!”

const createGame = () => {
	let secret = 5;
	return function guess(num) {
		if (num < secret) return console.log('Muy bajo!');
		if (num > secret) return console.log('Muy alto!');
		return console.log('lo adivinaste, felicitaciones!');
	};
};

const guess = createGame(); // numero secreto: 5
guess(8); // "Muy alto!"
guess(4); // "Muy bajo!"
guess(5); // "Lo adivinaste, felicitaciones!"

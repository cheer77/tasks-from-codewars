// const products = [
// 	{
// 		id: 1,
// 		title: "Lenovo Yoga",
// 		price: 3000,
// 	},
// 	{
// 		id: 2,
// 		title: "Acer Aspire",
// 		price: 1800,
// 	},
// 	{
// 		id: 3,
// 		title: "Dell Vostro",
// 		price: 3400,
// 	},
// ];

// let order = [];

// function addToBasket(productId) {
// 	// TODO: добавить проверку наличия товара в заказе (при наличии выдать alert, что товар уже в корзине)
// 	const product = products.find((item) => item.id === productId);

// 	// TODO: если товар еще не в корзине, добавить его из массива products
// 	if (order.some((item) => item.id === productId)) {
// 		alert("Товар уже в вашей корзине!");
// 	} else {
// 		order = [...order, product];
// 	}

// 	// Эти строчки не трогаем, они отвечают за переотрисовку страницы
// 	renderCart();
// 	rerenderTotalPrice();
// }

// function removeFromBasket(productId) {
// 	// TODO: описать логику удаления товара из корзины
// 	order = order.filter((item) => item.id !== productId);

// 	// Эти строчки не трогаем, они отвечают за переотрисовку страницы
// 	renderCart();
// 	rerenderTotalPrice();
// }

// function rerenderTotalPrice() {
// 	// TODO: опишите функционал подсчета общей стоимости заказа
// 	// const totalPrice = order.reduce((acc, item) => acc + item.price, 0);
// 	const totalPrice = order.reduce((acc, item) => {
// 		return acc + item.price;
// 	}, 0);
// 	console.log(totalPrice);

// 	// Не меняйте эту строчку
// 	document.getElementById("total").innerText = totalPrice;
// }

// // Этот метод остается без изменений
// function renderCart() {
// 	const cart = document.getElementById("basket-items");

// 	cart.innerHTML = "";
// 	order.forEach((item) => {
// 		const el = document.createElement("li");
// 		el.innerText = item.title;
// 		el.onclick = () => removeFromBasket(item.id);
// 		cart.appendChild(el);
// 	});
// }

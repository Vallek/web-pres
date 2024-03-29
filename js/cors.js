const button = document.querySelector('.get-data');
const area = document.querySelector('.area');

button.addEventListener('click', fetchF);

// Для работы Fetch API мы используем асинхронную функцию
async function fetchF() {
	// Успешный запрос вернет объект Response, а неуспешный ошибку. await необходим для ожидание ответа от сервера
	const response = await fetch('https://api.github.com/users/Vallek/followers');
	// Если ответ успешен, то 
	if (response.ok) {
		// берем json данные из объекта
		const json = await response.json();
		// Для каждого юзера выводим логин и id, создаем пустой параграф и помещаем туда данные
		json.forEach(el => {
			const login = el.login;
			const id = el.id;
			const textP = document.createElement('p');
			textP.textContent += ' ' + login + ' ' + id;
			area.appendChild(textP);
		});
	// А если получаем ошибку, то вставляем в див ее текст 
	} else {
		area.textContent = "HTTP-Error: " + response.status;
	}
}
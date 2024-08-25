const addButton = document.getElementById("addButton");
const inputArea = document.getElementById("task");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", function () {
	const taskText = inputArea.value.trim();

	if (inputArea.value === "") {
		alert("Nazwa zadania nie moze byc pusta");
		return;
	}

	const newLi = document.createElement("li");
	const liSpan = document.createElement("span");
	liSpan.textContent = taskText;

	const editButton = document.createElement("button");
	editButton.textContent = "Edytuj";
	const deleteButton = document.createElement("button");
	deleteButton.textContent = "Usun";

	newLi.appendChild(liSpan);
	newLi.appendChild(editButton);
	newLi.appendChild(deleteButton);

	taskList.appendChild(newLi);

	deleteButton.addEventListener("click", function () {
		taskList.removeChild(newLi);
	});

	editButton.addEventListener("click", function () {
		const newButton = document.createElement("button");
		const newInputArea = document.createElement("input");

		newInputArea.type = "text";
		newInputArea.value = liSpan.textContent;

		newLi.removeChild(editButton);
		newLi.removeChild(liSpan);
		newButton.textContent = "Zatwierdz zmiany";
		newLi.insertBefore(newButton, deleteButton);
		newLi.prepend(newInputArea);

		newButton.addEventListener("click", function () {
			const editedText = newInputArea.value.trim();

			if (newInputArea.value === "") {
				alert("Musisz cos wprowadzic");
				return;
			}

			liSpan.textContent = editedText;
			newLi.insertBefore(liSpan, newInputArea);
			newLi.insertBefore(editButton, deleteButton);
			newLi.removeChild(newButton);
			newLi.removeChild(newInputArea);
		});
	});
	inputArea.value = "";
});

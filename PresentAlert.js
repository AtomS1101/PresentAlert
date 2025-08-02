async function PresentAlert(Style) {
	const Art = new Alert();
	Art.title = Style.title;
	Art.message = Style.message;
	let TextField = 0;
	let Sorted = Object.keys(Style).sort((a, b) => {
		const NumA = parseInt(a.slice(3), 10);
		const NumB = parseInt(b.slice(3), 10);
		return NumA - NumB;
	});
	Style = Object.fromEntries(Sorted.map(key => [key, Style[key]]));
	for (let [item, value] of Object.entries(Style)) {
		switch (item.slice(0, 3)) { //extract identifier
			case "act": Art.addAction(value); break;
			case "can": Art.addCancelAction(value); break;
			case "des": Art.addDestructiveAction(value); break;
			case "txt":
				switch (value[2]) {
					case "secure": Art.addSecureTextField(value[0], value[1]); break;
					case "number": Art.addTextField(value[0], value[1]).setNumberPadKeyboard(); break;
					case "default": Art.addTextField(value[0], value[1]); break;
				}
				TextField++; break;
		}
	}
	const ActionIndex = Style.type == "alert"
		? await Art.presentAlert()
		: await Art.presentSheet();
	let TextList = [];
	for (let i=0; i<TextField; i++) TextList.push(Art.textFieldValue(i));
	return {index: ActionIndex, text: TextList};
}

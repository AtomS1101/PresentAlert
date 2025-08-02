# PresentAlert()
### version : 1.0

```js
PresentAlert(style);
```

___
## style format

|  properties  | sign  |  value |
|  --- | --- | --- |
|  alert type  |  `type` |  String |
|  title  |  `title` | String |
|  message  |  `message` | String |
|  action  |  `act#` | String |
|  cancel  |  `can#` | String |
|  destructive  | `des#` | String |
|  text field  | `txt#` | Array |

### alert type: `type`

|  type  | sign |
|  --- | --- |
|  alert  | ` alert` |
|  sheet | `sheet` |

### text field: `txt#`

```
txt#: [placeholder: String, defaultAnswer: String, keyboardType: String]
```
#### `keyboardType`
|  type  | sign |
|  --- | --- |
|  default  | `default` |
|  secure field | `secure` |
|  number pad  | `number` |

___
## returned value
` Promise <object> `

```js
return {
	index: number,
	text: [text 1, text 2, …]
}
```

___
## Example
```js
const Answer = await PresentAlert({
	type: "alert",
	title: "Title",
	message: "This is a test Alert",
	act2: "Action2",
	act1: "Action1",
	can3: "Cancel",
	des4: "Delete",
	txt5: ["Enter...", "default answer", "default"]
});
```
The keys of the dictionary are sorted according to the numbers appearing from the fourth character onward, appended after content identifier. This helps simplify your code if you want to add or change content order after already adding something.
In this example, act1 button is placed to the top of act2 based on the key number, even though act2 defined before act1 defined.

___
## source code
[Click here to download](https://github.com/AtomS1101/PresentAlert/blob/main/PresentAlert.js)

# JavaScript Event Handling

## Events
Events are specific actions that occur on a webpage, usually triggered by the user (like a click or a key press).

## Event Handling
Event Handling is the process of defining specific actions to be performed when an event occurs on a web element.

## Event Bubbling
In the event bubbling model, events start from the deepest (target) element and bubble up to the outer elements in the DOM hierarchy.

Example: `body → onLoad → p, h1, table`

## Life Cycle of an Event
1. User performs an action that raises an event.
2. The event object is updated to reflect the event state.
3. The event is fired (triggered).
4. The event bubbles through the DOM hierarchy (if bubbling is supported).
5. The event handler is invoked to perform the specified action.

## Common Event Types

### Keyboard Events
- `onkeypress`
- `onkeydown`
- `onkeyup`
- `onselect`
- `onscroll`

### Mouse / Touch Events
- `onclick`
- `ondblclick`
- `onmouseover`
- `onmouseout`
- `onmousedown`
- `onmouseup`
- `onmousemove`
- `ondrag`
- `ondragstart`
- `ondrop`
- `onscroll`

### Window Events
- `onfocus`
- `onblur`
- `onselectstart`
- `onload`
- `onerror`

### Other Input Types
Event inputs can also be triggered by voice, image recognition, or sensors depending on the device and technology used.

## Example: Defining and Using an Event Handler

### Step 1: Define a Function to Handle the Event
```javascript
function handleEvent() {
  alert('Event triggered!');
}
```

### Step 2: Attach the Function to an Event
```javascript
document.getElementById('myButton').addEventListener('click', handleEvent);
```

### HTML Structure for Reference
```html
<button id="myButton">Click Me</button>
```

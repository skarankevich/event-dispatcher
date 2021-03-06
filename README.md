# Event Dispatcher

## Install

```bash
$ bower install event-dispatcher
```

## Init

```javascript
var dispatcher = new EventDispatcher();
```

## API

### subscribe

> dispatcher.subscribe(event, callback);

```javascript
dispatcher.subscribe('person:name_updated', function (name, surname) {
    console.log('Now you can call me ' + name + ' ' + surname);
});
```

### trigger

> dispatcher.trigger(event, [arg1, arg2, ...]);

```javascript
dispatcher.trigger('person:name_updated', 'Walter', 'White');
```

### unsubscribe

> dispatcher.unsubscribe(event);

```javascript
dispatcher.unsubscribe('person:name_updated');
```

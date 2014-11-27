```javascript
var dispatcher = new EventDispatcher();

dispatcher.subscribe('person:name_updated', function (name) {
    console.log('Now you can call me ' + name);
});

dispatcher.trigger('person:name_updated', 'Walter White');
```


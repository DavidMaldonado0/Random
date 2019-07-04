var task = {
    title: 'My Title',
    description: 'My Description'
};

Object.defineProperty(task, 'toString', {
    value: function () {
        return this.title + ' ' + this.description;
    },
    writable: false,
    enumerable: false,
    configurable: true
});


console.log(Object.keys(task));
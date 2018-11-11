## `rgenie`

A somewhat opinionated React / Redux component generator. Experimental for now, but certainly useful for small
or lightweight projects

### Installation

`npm install -g rgenie`

### Usage

```
# rgenie <option> [react] <option> [my-component] <option>
# rgenie -t react -n my-component --f
```

For now `rgenie` plops your file in a `components` directory relative to where you run the command in your project

For example:

```
$ ~/my-project-root
$ mkdir example
$ cd example
$ ~/my-project-root/example
$ rgenie rgenie -t react -n my-component --f

✔ Success. Your 'react' component 'foo-component' was created
  Execution time (hr): 0s 2.341825ms
  
...

├── example
│   └── components
│       └── foo-component.js
```

### Options

* -t, --type
* -n, --name
* -f, --functional
* -c, --class

### Roadmap

- [x] Class level component
- [ ] Add Redux generator, currently only react
- [ ] Option for custom directory
- [ ] Option path-to custom directory
- [ ] Utils for async read and write + refactoring

### Test

`node test/tests.js`


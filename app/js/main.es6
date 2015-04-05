import m from 'mithril';

export var controller = class {
	constructor() {
		this.header = 'Hello, Mithril!';
	}
};

export var view = (c) => {
	return m('h1', c.header);
}

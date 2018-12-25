'use strict';
const {URL} = require('url');
const ow = require('ow');

module.exports = (options = {}) => {
	const defaults = {
		base: 'master'
	};
	options = Object.assign(defaults, options);
	const {title, compareTo, repo, body, assignee, base, template} = options;

	ow(compareTo, ow.string.label('options.compareTo'));
	ow(title, ow.string.label('options.title'));
	ow(repo, ow.string.label('options.repo'));

	if (body) {
		ow(body, ow.string.label('options.body'));
	}
	if (assignee) {
		ow(assignee, ow.string.label('options.assignee'));
	}
	if (base) {
		ow(base, ow.string.label('options.base'));
	}
	if (template) {
		ow(template, ow.string.label('options.template'));
	}

	const url = new URL(`https://github.com/${repo}/compare/${base}...${compareTo}`);
	url.searchParams.set('quick_pull', 1);

	const types = [
		'body',
		'title',
		'labels',
		'template',
		'assignee'
	];

	for (const type of types) {
		const value = options[type];
		if (value === undefined) {
			continue;
		}

		url.searchParams.set(type, value);
	}

	return url.toString();
};

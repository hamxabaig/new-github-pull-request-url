import {URL} from 'url';
import test from 'ava';
import createUrl from '.';

test('throws when required options are invalid', t => {
	t.throws(() => {
		createUrl();
	}, Error);
	t.throws(() => {
		createUrl({compareTo: 23});
	}, Error);
	t.throws(() => {
		createUrl({repo: 23});
	}, Error);
});

test('should create repo url with only required params', t => {
	const repo = 'abc/foo-repo';
	const compareTo = 'rocket-branch';
	t.is(createUrl({
		repo,
		compareTo
	}), `https://github.com/${repo}/compare/master...${compareTo}?quick_pull=1`);
});

test('should create repo url with all possible params', t => {
	const repo = 'abc/foo-repo';
	const base = 'stable';
	const compareTo = 'rocket-branch';
	const title = 'awesome-title';
	const assignee = 'hamxabaig';
	const body = 'off-to-mars';
	const url = createUrl({repo, base, compareTo, title, assignee, body});
	const {searchParams} = new URL(url);
	t.true(url.startsWith(`https://github.com/${repo}/compare/${base}...${compareTo}`));
	t.is(searchParams.get('body'), body);
	t.is(searchParams.get('assignee'), assignee);
	t.is(searchParams.get('title'), title);
	t.is(searchParams.get('quick_pull'), '1');
});

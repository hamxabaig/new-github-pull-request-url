# new-github-pull-request-url [![Build Status](https://travis-ci.com/hamxabaig/new-github-pull-request-url.svg?branch=master)](https://travis-ci.com/hamxabaig/new-github-pull-request-url)

> Create a URL for new pull requests in repo with prefilled title, body, assignee etc


## Install

```
$ npm install new-github-pull-request-url
```


## Usage

```js
const newGithubPullRequestUrl = require('new-github-pull-request-url');

const url = newGithubPullRequestUrl({
  compareTo: 'rocket-branch',
  repo: 'abc/foo-repo', 
  title: 'this-is-awesome'
});
//=> https://github.com/abc/foo-repo/compare/master...rocket-branch?quick_pull=1&title=this-is-awesome
```


## API

### newGithubPullRequestUrl(options)

#### options

Type: `Object`

##### repo

Type: `string`<br>
Required: `true`

Repo handle of github e.g `foo/bar-repo`

##### compareTo

Type: `string`<br>
Required: `true`

The branch to compare with base branch. (This is your feature branch)

##### title

Type: `string`<br>
Required: `true`

The pull request title.

##### base

Type: `string`<br>
Default: `master`

The branch to which your feature branch will be merged.

##### body

Type: `string`<br>

The body of pull request.

##### assignee

Type: `string`<br>

The user to assign this pull request to.

##### template

Type: `string`<br>

The template to use for the body of pull request. If you have only 1 template, you don't need to provide this.

## Reference

[About-automation-for-issues-and-pull-requests-with-query-parameters](https://help.github.com/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)


## Related
- [new-github-issue-url](https://github.com/sindresorhus/new-github-issue-url) - Generate a URL for opening a new GitHub issue with prefilled title, body, and other fields
- [new-github-release-url](https://github.com/sindresorhus/new-github-release-url) - Generate a URL for opening a new GitHub release with prefilled tag, body, and other fields


## License

MIT © Made with :heart: & :coffee: [Hamza Baig](http://hamxabaig.github.io)


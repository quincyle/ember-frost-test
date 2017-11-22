# 3.0.0 (2017-11-22)
* **Updated** to version 7 of `ember-test-utils`
* **Updated** to version ^1.4.2 of `ember-hook`
* **Updated** to version 4 of `ember-cli-frost-blueprints`
* **Removed** unneeded `chai` devDependency
* **Added** `bower` as a devDependency since it is no longer provide by Ember CLI
* **Updated** to ignore line length linting of `CHANGELOG.md`

# 2.1.2 (2017-06-27)
* **Updated** the build scripts to publish under `ember-default`
Listing changes that were not picked up from previous PR: https://github.com/ciena-frost/ember-frost-test/pull/33
* **Updated** to Ember CLI 2.12.3 and Ember 2.12.x
* **Updated** ember-try config matrix with Ember LTS 2.8
* **Updated** travis.yml build matrix to run Ember LTS 2.8 and default (Ember LTS 2.12) 

# 2.1.1 (2017-05-30)
 * **Moved** `ember-cli-frost-blueprints` from `dependencies` in `package.json` to being installed as a blueprint. It turns out that [`ember-cli` cheats w.r.t. `ember-cli-legacy-blueprints`](https://github.com/ember-cli/ember-cli/blob/v2.8.0/lib/models/project.js#L347) and so we can't follow that pattern (of just making it an `npm` dep). 


# 2.1.0 (2017-05-30)
* **Removed** blueprints for generating tests, they are now provided by `ember-cli-frost-blueprints`
* **Added** `ember-cli-frost-blueprints` to the `dependencies` so that the same blueprints are still available to consumers of this addon. 


# 2.0.0 (2017-05-22)
* **Updated** versions of ember-sinon, ember-hook, ember-test-utils and ember-mocha
* **Updated** test blueprints with new path to ember-test-util helpers

# 1.0.3 (2017-05-10)
* **Updated** the secure auth tokens in `.travis.yml`


# 1.0.2
* **Updated** to use latest pr-bumper which supports being able to set a PR to `none` when publishing a new version is not desired.

# 1.0.1

* **Fixed** bug in the new blueprint test generators (all but `component-test` were broken
* **Added** automated tests for generating all files and making sure they pass lint


# 1.0.0
### Breaking
* **Swapped**  from `bower` versions of `sinon-chai` and `chai-jquery` to `npm` versions. Running the install
blueprint for this addon will remove the bower deps, and add npm deps, as well as clean up `ember-cli-build.js`
to undo what it previously added there. If you manually loaded `sinon-chai` and/or `chai-jquery` yourself in
`ember-cli-build.js` you'll need to manually undo that.

### Non-breaking
* **Updated** `eslint-config-frost-standard` and fixed new lint warnings


# 0.2.1

* **Removed** the `blueprint` hack to install a fork of `testem` and clear out the one under
`node_modules/ember-cli/node_modules/testem` since [the fix has been released](https://github.com/testem/testem/releases/tag/v1.14.1)


# 0.2.0

* **Updated** the `README.md` with examples using the latest `ember-mocha` and `ember-test-utils` stuff
* **Added** a section in the `README.md` about how to structure `describe`, `beforeEach` and `it` blocks within tests.
* **Added** `adapter-test` blueprint for generating adapter tests
* **Added** `controller-test` blueprint for generating controller tests
* **Updated** `component-test` blueprint to use new helpers from `ember-test-utils`
* **Added** `mixin-test` blueprint for generating mixin tests
* **Added** `model-test` blueprint for generating model tests
* **Added** `route-test` blueprint for generating route tests
* **Updated** `ember-frost-test` blueprint to install a bugfix branch of `testem` and make sure it's used by
`ember-cli` to workaround [this bug](https://github.com/testem/testem/issues/1043) until the fix is merged/released.
* **Fixed** a bug in `component-test` where generating a test for an addon was using `addon-name/tests/helpers`
instead of `dummy/tests/helpers` to pull in `ember-test-utils` helpers.

# 0.1.0
* **Added** component-test blueprint generator


# 0.0.3
* **Updated** cleaned up CHANGELOG.md


# 0.0.2
* **Added** badges to README

# 0.0.1
* **Added** initial setup of `ember-frost-test` repo


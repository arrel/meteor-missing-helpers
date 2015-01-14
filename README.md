Missing UI template helpers for Meteor
=========================

[![Build Status](https://travis-ci.org/msamoylov/meteor-missing-helpers.svg?branch=master)](https://travis-ci.org/msamoylov/meteor-missing-helpers)

This project was inspired by awesome template tags and filters shipped with Django.

Template helpers:

1. ```{{stripTags <yourStringWithHTML>}}```. This global template helper removes HTML tags from your string. It's
possible to provide a second parameter with the list of allowed tags. For instance, ```{{stripTags <yourStringWithHTML> "<strong><p>"}}```

Low-level utilities:

1. ```MissingUtility.cleanTags(yourStringWithHTML)``` removes all HTML tags from a given string. The second parameter
accepts a string with allowed tags. For instance,  ```MissingUtility.yourStringWithHTML(inputStr, '<strong><p>')```.


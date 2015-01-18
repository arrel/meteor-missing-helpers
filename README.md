Missing UI template helpers for Meteor
=========================

[![Build Status](https://travis-ci.org/msamoylov/meteor-missing-helpers.svg?branch=master)](https://travis-ci.org/msamoylov/meteor-missing-helpers)

This project was inspired by awesome template tags and filters shipped with Django.

Installation:

```meteor add msamoylov:missing-helpers```

## Template helpers:

1. ```{{stripTags yourStringWithHTML}}```. This global template helper removes HTML tags from your string. It's
possible to provide a second parameter with the list of allowed tags. For instance, ```{{stripTags yourStringWithHTML "<strong><p>"}}```
2. ```{{hasVerifiedEmail userObject}}```. Can be useful for prompting users to verify their email addresses. If the
parameter is omitted, the helper uses ```{{currentUser}}`` variable.
3. ```{{currentYear}}``` returns a string with the current year. Can be useful for generating a footer with your
copyright.
4. ```{{formatDateTime createdAt formatString}}``` returns a formatted date according to [moment.js formatting rules](http://momentjs.com/docs/#/displaying/). For
instance, ```{{formatDateTime createdAt "MMM D"}}``` produces "Jan 13", and ```{{formatDateTime createdAt}}``` does
"2015-01-13T23:44:50+02:00"
5. ```{{timeSince createdAt}}``` returns relative time since a given date. A wrapper for [moment().fromNow()](http://momentjs.com/docs/#/displaying/fromnow/)
6. ```{{truncateChars yourString length}}``` truncates a string after a certain number of characters.
7. ```{{{nl2br yourText}}}``` converts all newlines in a piece of plain text to HTML line breaks (<br>). If
you provide a second parameter as ```true```, it will remove the existing newlines from text.


## Low-level utilities:

1. ```MissingUtility.cleanTags(yourStringWithHTML)``` removes all HTML tags from a given string. The second parameter
accepts a string with allowed tags. For instance,  ```MissingUtility.cleanTags(yourStringWithHTML, '<strong><p>')```.
2. ```MissingUtility.hasVerifiedEmail(userObject)``` determines if a user has verified his email address.
3. ```MissingUtility.truncateChars(yourString, length)``` truncates a string after a certain number of characters.
4. ```MissingUtility.nl2br(yourText)``` converts all newlines in a piece of plain text to HTML line breaks (```<br>```). If
you provide a second parameter as ```true```, it will remove the existing newlines from text.

/*global QUnit*/

sap.ui.define([
	"cws_create_story/controller/createstories.controller"
], function (Controller) {
	"use strict";

	QUnit.module("createstories Controller");

	QUnit.test("I should test the createstories controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});

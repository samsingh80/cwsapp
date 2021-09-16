/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"cws_create_story/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});

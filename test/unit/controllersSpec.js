'use strict';

/* jasmine specs for controllers go here */
describe('mainController controllers', function(){
	describe('mainController', function(){
		var scope, ctrl;

		beforeEach(module('noteApp'));
		beforeEach(inject(function($controller){
			scope = {};
			ctrl = $controller('mainController', {$scope: scope});

		}));

		it('should show if a new note is being created', function(){
			expect(scope.showBtn).toBeTruthy();
			expect(scope.showForm).toBeFalsy();
		});

	});

});
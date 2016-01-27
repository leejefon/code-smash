/**
 * CodeProblem Service
 *
 * @author  :: Jeff Lee
 * @created :: 2016/01/25
 */

define(['main/services', 'mocha', 'angularFire'], function (MainServices, mocha) {

	return MainServices

		.factory('CodeProblem', ['$q', '$firebaseObject', function ($q, $firebaseObject) {

			var ref = new Firebase("https://code-smash.firebaseio.com");

			var currentProblem = {
				name: '',
				func: '',
				text: '',
				userSolution: ''
			};

			mocha.setup('bdd');

            return {
				loadProblem: function (name) {
					return $q(function (resolve, reject) {
						require(['problems/' + name + '/prob'], function (problem) {
							currentProblem.name = name;
							currentProblem.text = problem.text;
							currentProblem.func = problem.func;
							resolve(currentProblem);
						});
					});
				},
				updateUserSolution: function (solution) {
					currentProblem.userSolution = solution;
				},
				runTest: function () {
					return $q(function (resolve, reject) {
						require(['problems/' + currentProblem.name + '/test'], function () {
							eval('window.' + currentProblem.func + ' = ' + currentProblem.userSolution);
							var stats = mocha.run().stats;
							resolve(stats);
						});
					});
				},
				listProblems: [
					'q1', 'q2', 'q3', 'q4', 'q5'
				]
            };
		}]);
});

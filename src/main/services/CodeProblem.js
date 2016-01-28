/**
 * CodeProblem Service
 *
 * @author  :: Jeff Lee
 * @created :: 2016/01/25
 */

define(['main/services', 'mocha'], function (MainServices, mocha) {

	return MainServices

		.factory('CodeProblem', ['$q', function ($q) {

			var availableProblems = ['q1', 'q2', 'q3', 'q4', 'q5'];

			var currentProblem = {
				name: '',
				func: '',
				text: '',
				userSolution: ''
			};

			mocha.setup('bdd');

            return {
				getRandomProblems: function (number, level) {
					number = number || 5;
					level = level || 'easy';

					if (number > availableProblems.length) {
						number = availableProblems.length;
					}

					// NOTE: Shuffle array: https://css-tricks.com/snippets/javascript/shuffle-array/
					return availableProblems.sort(function () { return 0.5 - Math.random(); }).slice(0, number);
				},
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
				}
            };
		}]);
});

/**
 * CodeProblem Service
 *
 * @author  :: Jeff Lee
 * @created :: 2016/01/25
 */

define(['main/services', 'mocha'], function (MainServices, mocha) {

	return MainServices

		.factory('CodeProblem', ['$q', '$rootScope', function ($q, $rootScope) {

			var availableProblems = [
				'q1-Multiply',
				'q2-TriangleArea',
				'q3-DaysTilXmas',
				'q4-FileExt',
				'q5-LongestString',
				'q6-ArraySum',
				'q7-Temperature'
			];

			var currentProblem = {
				name: '',
				func: '',
				text: '',
				userSolution: ''
			};

			var problemQueue = _getRandomProblems();

			mocha.setup('bdd');

            return {
				getProblemsQueue: function () {
					return $rootScope.gameData ? $rootScope.gameData.problems : problemQueue;
				},
				loadProblem: function (name) {
					if (!name) {
						var index = problemQueue.indexOf(currentProblem.name);
						name = problemQueue[index + 1];
					}

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

			function _getRandomProblems (number, level) {
				number = number || 5;
				level = level || 'easy';

				if (number > availableProblems.length) {
					number = availableProblems.length;
				}

				// NOTE: Shuffle array: https://css-tricks.com/snippets/javascript/shuffle-array/
				return availableProblems.sort(function () { return 0.5 - Math.random(); }).slice(0, number);
			}
		}]);
});

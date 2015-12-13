/// <reference path="./typings/gulp/gulp"/>
import gulp = require("gulp");
import colors = require("colors");
import typescript = require("gulp-typescript");

gulp.task("dev", () => {
  gulp.watch(["./challenges/**/*.ts"], (file: gulp.WatchEvent) => {
    console.log("compiling challenge");
    var tsResult = gulp.src(file.path).pipe(typescript({ module: 'commonjs' }));

    var challengePath = file.path.substring(0, file.path.lastIndexOf('\\'));

    tsResult.js.pipe(gulp.dest(challengePath));
  });

  gulp.watch(["./challenges/**/*.js"], (file: gulp.WatchEvent) => {

    var challengePath = file.path.substring(0, file.path.lastIndexOf('\\'));

    var inputsPath =  challengePath + '/inputs';
    var solutionPath = challengePath + '/solution';

    delete require.cache[require.resolve(inputsPath)]
    var inputs = require(inputsPath).Inputs;

    delete require.cache[require.resolve(solutionPath)]
    var Solution = require(solutionPath).Solution;

    var solution = new Solution();

    var testSuccess = true;

    console.log("running challenge tests");

    for (var i = 0; i < inputs.examples.length; i++) {
      var answer = solution.solve(inputs.examples[i].input);

      if (answer === inputs.examples[i].expected) {
        console.log("Passed test", i + 1);
      }
      else {
        console.log("Test failed! Expected: ", inputs.examples[i].expected, "but got", answer);
        testSuccess = false;
      }
    }

    if (testSuccess) {

      console.log("running challenge");
      var answer = solution.solve(inputs.challenge);

      console.log("I think the answer is", answer);
    }
    else {
      console.log("Tests failed, check the solution");
    }
  });
});

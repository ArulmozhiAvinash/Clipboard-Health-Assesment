# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

When we look at the deterministicPartitionKey it has these below conditions

1. Update the input's participant key to to cnadidiate and if it's not og type string convert it to be as a string
   2)Is the particpant key is not there hash the input th at we receive
   3)If the has value is greater than MAX_PARTITION_KEY_LENGTH return the new has data,

Before the code recaftor we had so many if else cases.
Now this has been reffactored to have one if else and couple of terary opeartor to determine the desired result.

We have added two utility method checkForValidString & createHashForData for resueability

The test case has also been updated

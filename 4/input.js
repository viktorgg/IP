regExps = {
"exercise_1": /[A-Z]+[a-z]+/,
"exercise_2": /088[^0-]{7}/,
"exercise_3": /[^0-1]+/,
"exercise_4": /^[^0-9][a-zA-Z0-9\._]{2,13}$/,
"exercise_5": /[1|9][^1][^1][^1]?$/,
"exercise_6": /class=['|"][a-zA-Z\s]*['|"]/
};
cssSelectors = {
"exercise_1": "css > item > java",
"exercise_2": "different > java",
"exercise_3": "css > item > java > tag",
"exercise_4": "css > item:nth-of-type(3)",
"exercise_5": "css > item > tag > java:nth-last-of-type(2)",
"exercise_6": "css > item > item > item > item > item",
"exercise_7": "different:nth-of-type(2) > java:nth-of-type(2)",
"exercise_8": "css > #someId"
};

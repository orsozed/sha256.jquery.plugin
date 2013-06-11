test("string encode test", function () {
    ok($.sha256("message digest") == "f7846f55cf23e14eebeab5b4e1550cad5b509e3348fbc4efa3a1413d393cb650", 'encode successful');
});

test("string encode test", function () {
    ok($.sha256("test") == "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08", 'encode successful');
});

test("string encode test", function () {
    ok($.sha256("9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08") == "7b3d979ca8330a94fa7e9e1b466d8b99e0bcdea1ec90596c0dcc8d7ef6b4300c", 'encode successful');
});

test("array encode test", function () {
    ok($.sha256([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) == "eb0cc3185cf86b536ea04a614d0598a393c820258a886bd420e6af3a132ddc1a", 'encode successful');
});

test("same array encode test", function () {
    ok($.sha256([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) == $.sha256([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), 'encode successful');
});

test("modified array encode test", function () {
    ok($.sha256([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) != $.sha256([1, 2, 3, 4, 5, 6, 7, 8, 9]), 'encode successful');
});

test("object encode test", function () {
    ok($.sha256({ random: "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08" }) == "669eab9078eab9db5eb6a29cf0839f936cbaa54b68d17c5dc077cd97a247595e", 'encode successful');
});

test("same object encode test", function () {
    ok($.sha256({ random: "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08" }) == $.sha256({ random: "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08" }), 'encode successful');
});

test("modified object encode test", function () {
    ok($.sha256({ random: "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08" }) != $.sha256({ random: "8f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08" }), 'encode successful');
});
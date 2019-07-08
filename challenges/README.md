## Day 1:

In this kata, you will write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.

For example, the array `arr = [0, 1, 2, 5, 1, 0]` has a peak at position 3 with a value of 5 (since `arr[3]` equals 5).

The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. If there is no peak in the given array, then the output should be {pos: [], peaks: []}.

Example: `pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3])` should return `{pos: [3, 7], peaks: [6, 3]}` (or equivalent in other languages)

All input arrays will be valid integer arrays (although it could still be empty), so you won't need to validate the input.

The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't know what is after and before and therefore, we don't know if it is a peak or not).

Also, beware of plateaus !!! `[1, 2, 2, 2, 1]` has a peak while `[1, 2, 2, 2, 3]` does not. In case of a plateau-peak, please only return the position and value of the beginning of the plateau. For example: `pickPeaks([1, 2, 2, 2, 1])` returns `{pos: [1], peaks: [2]}` (or equivalent in other languages)

Have fun!

---

## Day 2:

You are given a node that is the beginning of a linked list. This list always contains a tail and a loop.

Your objective is to determine the length of the loop.

---

## Day 3:

Sudoku Checker – Write a function that checks to see if a sudoku board has or has not been correctly filled out.

---

## Day 4:

We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example
`add("123", "321"); -> "444"`
`add("11", "99"); -> "110"`
Notes: 
The input numbers are big.
The input is a string of only digits
The numbers are positives

---

## Day 5
- Write a method that compares nesting structures between arrays. 
- Return `true` if both arrays have the same nesting structure, and `false` if they do not

---

## Day 6
Write regex that will validate a password to make sure it meets the following criteria:

- At least six characters long
- contains a lowercase letter
- contains an uppercase letter
- contains a number

Valid passwords will only be alphanumeric characters.

---

## Day 7
Write a function that will simplify map directions. Given an array containing values `NORTH`,`SOUTH`,`EAST`, & `WEST`, return an array where all opposite *adjacent* values are removed. Be sure that once adjacent values are removed, the array is then checked once again for *newly adjacent values*.

```
Example:
    dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
    output: ["WEST"]
    dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])
    output: ["NORTH", "WEST", "SOUTH", "EAST"]
    dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])
    output([])
```

---
## Day 8:

```
In mathematics, the factorial of integer n is written as n!. It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120

Your mission is simple: write a function that takes an integer n and returns the value of n!.

You are guaranteed an integer argument. For any values outside the non-negative range, return null, nil or None (return an empty string "" in C and C++). For non-negative numbers a full length number is expected for example, return 25! = "15511210043330985984000000" as a string.
```

---
## Day 9:
Consider a sequence u where u is defined as follows:

The number u(0) = 1 is the first one in u.
For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
There are no other numbers in u.
Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...

Task:
Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the ordered (with <) sequence u (so, there are no duplicates).

Example:
dbl_linear(10) should return 22

Note:
Focus attention on efficiency

---
## Day 10:

Consider an integer sequence U(m) defined as:

m is a given non-empty set of positive integers.
U(m)[0] = 1, the first number is always 1.
For each x in U(m), and each y in m, x * y + 1 must also be in U(m).
No other numbers are in U(m).
U(m) is sorted, with no duplicates.
Sequence Examples
U(2, 3) = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]
1 produces 3 and 4, since 1 * 2 + 1 = 3, and 1 * 3 + 1 = 4.

3 produces 7 and 10, since 3 * 2 + 1 = 7, and 3 * 3 + 1 = 10.

U(5, 7, 8) = [1, 6, 8, 9, 31, 41, 43, 46, 49, 57, 64, 65, 73, 156, 206, ...]
1 produces 6, 8, and 9.

6 produces 31, 43, and 49.

Task:
Implement n_linear or nLinear: given a set of postive integers m, and an index n, find U(m)[n], the nth value in the U(m) sequence.

Tips
Tests use large n values. Slow algorithms may time-out.
Tests use large values in the m set. Algorithms which multiply further than neccessary may overflow.
Linear run time and memory usage is possible.
How can you build the sequence iteratively, without growing extra data structures?

---
## Day 11:

Write a function that will solve a 9x9 Sudoku puzzle. The function will take one argument consisting of the 2D puzzle array, with the value 0 representing an unknown square.

The Sudokus tested against your function will be "easy" (i.e. determinable; there will be no need to assume and test possibilities on unknowns) and can be solved with a brute-force approach.

---
## Day 12:

Alright, detective, one of our colleagues successfully observed our target person, Robby the robber. We followed him to a secret warehouse, where we assume to find all the stolen stuff. The door to this warehouse is secured by an electronic combination lock. Unfortunately our spy isn't sure about the PIN he saw, when Robby entered it.

The keypad has the following layout:

┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘
He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually be another adjacent digit (horizontally or vertically, but not diagonally). E.g. instead of the 1 it could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.

He also mentioned, he knows this kind of locks. You can enter an unlimited amount of wrong PINs, they never finally lock the system or sound the alarm. That's why we can try out all possible (*) variations.

* possible in sense of: the observed PIN itself and all variations considering the adjacent digits

Can you help us to find all those variations? It would be nice to have a function, that returns an array (or a list in Java and C#) of all variations for an observed PIN with a length of 1 to 8 digits. We could name the function getPINs (get_pins in python, GetPINs in C#). But please note that all PINs, the observed one and also the results, must be strings, because of potentially leading '0's. We already prepared some test cases for you.

Detective, we count on you!

For C# user: Do not use Mono.Mono is too slower when run your code.
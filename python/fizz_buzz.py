def fizz_buzz(n):
  i = 0;
  while i < n:
    i += 1;
    if i % 5 == 0 and i % 3 == 0:
      print('FizzBuzz');
    elif i % 5 == 0:
      print('Buzz');
    elif i % 3 == 0:
      print('Fizz');
    else:
      print(i);

fizz_buzz(40);
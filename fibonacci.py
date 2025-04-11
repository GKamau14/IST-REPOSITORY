#This is a program to illustrate the use of the fibonacci sequence
def fibonacci(n):
  """Recursive function to return the Fibonacci number at the nth position."""
  if n == 0:
      return 0
  elif n == 1:
      return 1
  else:
      return fibonacci(n-1) + fibonacci(n-2)

def main():
  """Main function to welcome the user and generate Fibonacci sequence."""
  print("Welcome to the Fibonacci Sequence Program!")

  # Get user input
  while True:
      try:
          n = int(input("How many Fibonacci terms would you like to generate? "))
          if n <= 0:
              print("Please enter a positive integer.")
          else:
              break
      except ValueError:
          print("Invalid input! Please enter a positive integer.")

  print(f"\nThe Fibonacci sequence up to the {n}-th term is:")

  # Generate and print Fibonacci sequence up to the n-th term
  for i in range(n):
      print(fibonacci(i), end=" ")

if __name__ == "__main__":
  main()

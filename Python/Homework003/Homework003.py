# Homework
# Functions
# 1. Find the smallest number
# Write a function smallest that accepts a List of numbers as an argument.

# It should return the smallest number in the List.

list = [25, 43, 72, 19, 12, 93]

def smallest(numbers):
    smallest = numbers[0] if numbers else None
    for i in numbers:
        if i < smallest:
                smallest = i
    print("The smallest number is: ", smallest)

smallest(list)

# 2. Find the largest number
# Write a function largest that accepts a List of numbers as an argument.

# It should return the largest number in the List.

list = [25, 43, 72, 19, 12, 93]

def largest(numbers):
    largest = numbers[0] if numbers else None
    for i in numbers:
        if i > largest:
                largest = i
    print("The largest number is: ", largest)

largest(list)

# 3. Find the shortest String
# Write a function shortest that accepts a List of Strings as an argument.

# It should return the shortest String in the List.

words = ['Tennessee', 'Texas', 'Kentucky', 'Alabama', 'Ohio']

def shortest(strings):
    state = strings[0]
    for i in strings:
        if len(i) < len(state):
            state = i
            
    return state

shortstringReturned = shortest(words)

print('This is the shortest string:', shortstringReturned)

# 4. Find the longest String
# Write a function longest that accepts a List of Strings as an argument.

# It should return the longest String in the list.

words =['Tennessee', 'Texas', 'Kentucky', 'Alabama', 'Ohio']

def longest(strings):
    state = strings[0]
    for i in strings:
        if len(i) > len(state):
            state = i
            
    return state

longstringReturned = longest(words)

print('This is the longest string:', longstringReturned)
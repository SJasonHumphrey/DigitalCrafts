# 1. Letter Summary
# Write a letter_histogram program that asks the user for input, and prints a dictionary containing the tally of how many times 
# each letter in the alphabet was used in the word. For example:

letterDict = {}
word = input('Please enter a word: ')
def letterHistogram(word):
    for letter in word:
        if letter not in letterDict:
            letterDict[letter] = 1
        else:
            letterDict[letter] += 1
    return letterDict
word = word.upper()
result = letterHistogram(word)
print(result)
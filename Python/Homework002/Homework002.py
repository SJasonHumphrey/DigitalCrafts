# 1. Multiply Vectors
# Given two lists of numbers of the same length, create a new list by multiplying the pairs of numbers in corresponding positions in the two lists. Example:

# [2, 4, 5] x [2, 3, 6] = [4, 12, 30]

list1 = [2, 4, 5]

list2 = [2, 3, 6]

list3 = []
for i in range(len(list1)):
    list3.append(list1[i] * list2[i])
print (list3)

# 2. Matrix Addition
# Given two two-dimensional lists of numbers of the size 2x2 two dimensional list is represented as an list of lists:

# [ [2, -2],
#    [5, 3] ]


matrix1 = [[1, 3],[2, 4]]

matrix2 = [[5, 2], [1, 0]]

matrix3 = []
for i in range(2):
    matrix4 = []
    for j in range(2):
        matrix4.append(matrix1[i][j] + matrix2[i][j])
    matrix3.append(matrix4)
print(matrix3)

# 3. Matrix Addition II
# Use your solution in Matrix Addition, and extend it to work for a pair of matrices of any size, 
# as long as they have the same size.
matrix1 = [[1, 3, 7, 2, 7],[2, 4, 5, 8,9]]

matrix2 = [[5, 2, 6, 8, 12], [1, 0, 2, 4, 6]]

matrix3 = []
for i in range(2):
    matrix4 = []
    for j in range(5):
        matrix4.append(matrix1[i][j] + matrix2[i][j])
    matrix3.append(matrix4)
print(matrix3)

# 4. De-dup
# Given a list of numbers or strings, create a new list 
# containing the same elements as the first list, except with any duplicate values removed. Print the list.

dupList = [1, 3, 2, 7, 9, 6, 0, 7, 7, 3, 2, 5, 5]

newList = []

for i in dupList:
    if i not in newList:
        newList.append(i)
print(newList) 

# 5. Leetspeak
# Given a paragraph of text as a String, print the paragraph in leetspeak.
# To translate a String to leetspeak, you need to replace make the following character replacements 
# (treat all input characters as uppercase):

paragraph = 'This is my paragrapgh for the leet assignment in the homework. Today is Thursday April the eight twenty twenty one' 


leetSpeak = ''

for letter in paragraph.upper():
    result = letter
    if result == 'A':
        result = '4'
    if result == 'E':
        result = '3'
    if result == 'G':
        result = '6'
    if result == 'I':
        result = '1'
    if result== 'O':
        result = '0'
    if result == 'S':
        result = '5'
    if result == 'T':
        result = '7'
    leetSpeak = leetSpeak + result

print(leetSpeak)

# 6. Long-long Vowels
# Given a word as a string, print the result of extending any long vowels to the length of 5.

longVowel = 'greet'

longVowel = longVowel.replace('ee', 'eeeee')
longVowel = longVowel.replace('oo', 'ooooo')

print(longVowel)

# 7. Caesar Cipher
# Given a string, print the Caesar Cipher (or ROT13) of that string. What is Caesar Cipher? Learn about it here.

# Use your solution to decipher the following text: "lbh zhfg hayrnea jung lbh unir yrnearq"

sentence = "lbh zhfg hayrnea jung lbh unir yrnearq"

offset = 13
alphabet = 'abcdefghijklmnopqrstuvwxyz'
newsentence = ''

for letter in sentence:
    ascii_code = ord(letter)
    is_uppercase = ascii_code >= 65 and ascii_code <= 90
    letter = letter.lower()
    if letter not in alphabet:
        newLetter = letter
    else:
        index = alphabet.find(letter)
        newindex = index + offset
        if newindex > 25:
            newindex = newindex - 26
        newLetter = alphabet[newindex]
        if is_uppercase:
            newLetter = newLetter.upper()
    newsentence += newLetter

print(newsentence)
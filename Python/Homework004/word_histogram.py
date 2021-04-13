# 2. Word Summary
# Write a word_histogram program that asks the user for a sentence as its input, and prints a dictionary containing 
# the tally of how many times each word in the alphabet was used in the text.

wordDict = {}
sentence = input('Please enter a sentence: ')
def wordHistogram(sentence):
    for word in sentence:     
        if word not in wordDict:
            wordDict[word] = 1
        else:
            wordDict[word] += 1
    return wordDict
sentence = sentence.upper().split()
result = wordHistogram(sentence)
print(result) 


# collections module
from collections import Counter
# 3. Sorting a histogram
# Given a histogram tally (one returned from either letter_histogram or word_histogram), print the top 3 words or letters.
def histogramTally():
    counter = Counter(result)
# 3 highest values
    top = counter.most_common(3)
    print("The top 3 words are:")
    for i in top:
        print(i[0]," : ",i[1]," ")
histogramTally()

import pickle

with open('data.pickle', 'rb') as fh:
    data = pickle.load(fh)

# data = {
#     "Igor": "857-485-2935",
#     "Jazz": "334-584-2345",
#     "Chris": "555-555-5555"
# }
# with open('data.pickle', 'wb') as fh:
#     pickle.dump(data, fh)

print('Electronic Phone Book')
app = 'Electronic Phone Book'
# App entry screen
for i in app:
    print('', end ='')
    print('=', end = '')
print('')
print('''
1. Look up an entry
2. Set an entry
3. Delete an entry
4. List all entries
5. Quit
''')
choice = input('What do you want to do (1-5)? ')
convertChoice = int(choice)

# lookup entry
def lookUp(name):
    if name in data:
        print(f'Number:',data[name])
    else:
        print('Information not found:')
# set entry
def setEntry(name, number):
    data[name] = number
    with open('data.pickle', 'wb') as fh:
            pickle.dump(data, fh)
    print(f'Entry stored for {name}')
# delete entry
def delEntry(name):
    del data[name]
    with open('data.pickle', 'wb') as fh:
            pickle.dump(data, fh)
    print('Entry Deleted!')
# list all entries
def listAll():
    print(f'Found entry for {data}:')

if convertChoice  == 1:
    name = input('Name: ')
    lookUp(name)
elif convertChoice == 2:
    name = input('Name: ')
    number =input('Phone Number: Entry format ***-***-**** ')
    setEntry(name, number)
elif convertChoice == 3:
    name = input('Entry to delete: ')
    check = input('Are you sure? yes or no: ')
    if check.lower() == 'yes':
        delEntry(name)
    else:
        exit()
elif convertChoice == 4:
    listAll()
else:
    exit()
# quit

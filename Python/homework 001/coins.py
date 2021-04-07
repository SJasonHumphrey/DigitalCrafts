
coins = 0
print(f'You have {coins} coins')

coin_count = input('Do you want another?    ')

while coin_count.lower() == 'yes':
    coins += 1 
    print(f'You have {coins} coins.')
    coin_count = input('Do you want another?    ')
else:
    print('Bye')

# 1. Tip Calculator

amount = float(input('Total bill amount?    '))

service = (input('Level of service? Good, Bad or Fair:    '))

good = 0.20 * amount

fair = 0.15 * amount

bad = 0.10 * amount

if service.lower() == 'good':
    total = amount + good
    print('Tip amount: $ %.2f' % good) 
    print('Total amount: $ %.2f' % total)

elif service.lower() == 'fair':
    total = amount + fair
    print('Tip amount: $ %.2f' % fair) 
    print('Total amount: $ %.2f' % total)

else:
    total = amount + bad
    print('Tip amount: $ %.2f' % bad) 
    print('Total amount: $ %.2f' % total)


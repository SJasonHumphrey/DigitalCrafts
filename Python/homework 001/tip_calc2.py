# Tip Calculator 2

amount = float(input('What is the total bill?:     '))

service = (input('Level of service? Good, Bad or Fair:     '))

good = 0.20 * amount

fair = 0.15 * amount

bad = 0.10 * amount

split = int(input('Split how many ways?:   '))

if service.lower() == 'good':
    total = amount + good
    per_person = total / split
    print('Tip amount: $ %.2f' % good) 
    print('Total amount: $ %.2f' % total)
    print('Amount per person: $ %.2f' % per_person)

elif service.lower() == 'fair':
    total = amount + fair
    per_person = total / split
    print('Tip amount: $ %.2f' % fair) 
    print('Total amount: $ %.2f' % total)
    print('Amount per person: $ %.2f' % per_person)

else:
    total = amount + bad
    per_person = total / split
    print('Tip amount: $ %.2f' % bad) 
    print('Total amount: $ %.2f' % total)
    print('Amount per person: $ %.2f' % per_person)


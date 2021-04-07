
width = int(input("Width?   "))
height = int(input("Height?  "))

for i in range(height):
    if not i or i == height-1:
        print('*' * width, end =' ')
        print()
    else:
        print('*' + ' ' * (width-2) + '*')
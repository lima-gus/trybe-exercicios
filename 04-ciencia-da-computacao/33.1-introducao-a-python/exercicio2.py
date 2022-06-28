# Calcule a média aritmética dos valores contidos em uma lista

def average(list):
    total = 0
    for number in list:
        total += number
    return total / len(list)

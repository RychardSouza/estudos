print('Seja bem vindo a nossa calculadora')

num1 = input('Digite o primeiro número: ')
exp = input('Escolha a expressão (+ , - , * , / ,): ')
num2 = input('Escolha o segundo número: ')

if exp == '/':
    result = int(num1) / int(num2)
    print('O resultado da divisão é de: ', result )
elif exp == '+':
    result = int(num1) + int(num2)
    print('O resultado da adição é de: ', result )
elif exp == '-':   
    result = int(num1) - int(num2)
    print('O resultado da subtração é de: ', result )
elif exp == '*':
    result = int(num1) * int(num2)
    print('O resultado da multiplicação é de: ', result )
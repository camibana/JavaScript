maior_altura = 0
menor_altura = 5.00 # um número elevado dmeais para altura ou posso usar float(inf), um número grandemente infinito.
media_alt_homens = 0
num_homens = 0
num_mulheres = 0

for i in range(4):
    altura = float(input(f"Digite a altura da pessoa {i+1} em metros:"))
    while True:
        sexo = str(input(f"Digite o sexo da pessoa {i+1} sendo M para Masculino e F para Feminino:")).strip()
        if sexo in ["M","F"]:
            break
        else:
            print("Sexo inválido. Recomece conforme instruções iniciais.")
# Maior e menor altura 

    if altura > maior_altura:
        maior_altura = altura
    if altura < menor_altura:
        menor_altura = altura

# Média de altura dos homens
    if sexo == "M":
        media_alt_homens += altura
        num_homens += 1
    
    media_alt_h = media_alt_homens /num_homens if num_homens > 0 else 0

# o número de mulheres 
    if sexo == "F":
        num_mulheres += 1

    
    
print(f"A maior altura é:{maior_altura:}m e a menor altura é:{menor_altura}m.") 
print(f"A média de altura dos homens é:{media_alt_h:.2f}. m")
print(f"O número de mulher(es) é {num_mulheres}.")
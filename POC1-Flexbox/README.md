# POC 1 - Flexbox

## Display
A propriedade display é utilizada para definir um contêiner.\
Para definir um contêiner do tipo flexbox, utiliza-se o parâmetro "flex"\
Classe (css): .container-flex

![image](https://github.com/user-attachments/assets/88de8315-440d-4509-a62b-dbb0b6a8e8d5)

## Flex-direction
Flex-direction define a direção para onde os elementos do flexbox devem ser colocados.

Classe: .container-flex-direction-row\
Parâmetro: flex-direction: row;

![image](https://github.com/user-attachments/assets/d62f8d4f-7f0c-4a7f-884c-ebdbf0f52c6e)

Classe: .container-flex-direction-row-reverse\
Parâmetro: flex-direction: row-reverse;

![image](https://github.com/user-attachments/assets/7154c555-1bfd-4f0e-ba9a-cae00da59072)

Classe: .container-flex-direction-column\
Parâmetro: flex-direction: column;

![image](https://github.com/user-attachments/assets/978a99df-30cf-41db-b19d-9080ae073d0b)

Classe: .container-flex-direction-column-reverse\
Parâmetro: flex-direction: column-reverse;

![image](https://github.com/user-attachments/assets/3b08fae8-cfa3-468a-bf4d-6ed7de0aa31c)

## Flex-wrap
Flex-wrap faz com que os itens da flexbox "embrulhem", ou seja, pulem linhas caso acabe o espaço disponível na linha. Por padrão, a flexbox tenta encaixar todos os itens na mesma linha; o parametro flex-wrap permite a quebra de linhas.

Classe: .container-flex-wrap\
Parâmetro: flex-wrap: wrap;

![image](https://github.com/user-attachments/assets/95080476-eb3d-4612-af30-930f84e95beb)

Classe: .container-flex-wrap-reverse\
Parâmetro: flex-wrap: wrap-reverse;

![image](https://github.com/user-attachments/assets/5a1a15fb-698e-45f9-b371-e71a2e516e98)


Classe: .container-flex-no-wrap\
Parâmetro: flex-wrap: nowrap;

![image](https://github.com/user-attachments/assets/87efab3a-b459-41b9-9b57-f2502691d917)

## Justify-content
Justify-content define o alinhamento dos itens no eixo principal (em inglês: main axis, geralmente o eixo horizontal). Este parâmetro distribui os itens de acordo com o espaço disponível no eixo principal.

Classe: .container-justify-flex-start\
Parâmetro: justify-content: flex-start;

![image](https://github.com/user-attachments/assets/f07e51df-afe6-4798-af7c-67a107b39bf8)


Classe: .container-justify-flex-end\
Parâmetro: justify-content: flex-end;

![image](https://github.com/user-attachments/assets/3ff81453-b9b4-4925-aae4-192dd040c0e1)


Classe: .container-justify-center\
Parâmetro: justify-content: center;

![image](https://github.com/user-attachments/assets/6db25602-9888-4fbf-b68e-c40916fc7891)


Classe: .container-justify-space-evenly\
Parâmetro: justify-content: space-evenly;

![image](https://github.com/user-attachments/assets/b3c169b8-60f9-4325-95da-cb888c49ea98)

## Align-items
Align-items define o alinhamento dos itens no eixo secundário (em inglês: cross axis, geralmente o eixo vertical). Este parâmetro distribui os itens de acordo com o espaço disponível no eixo secundário. Em suma, funciona da mesma forma que o parâmetro justify-content, mas para o eixo secundário.

Classe: .container-align-items-flex-start\
Parâmetro: align-items: flex-start;

![image](https://github.com/user-attachments/assets/bdf91925-98ec-4002-a593-f4db4557befb)


Classe: .container-align-items-flex-end\
Parâmetro: align-items: flex-end;

![image](https://github.com/user-attachments/assets/d1cb8091-229a-42f6-a0c8-ad8fea2c80fd)


Classe: .container-align-items-center\
Parâmetro: align-items: center;

![image](https://github.com/user-attachments/assets/51166926-eb7b-4576-af41-df471b00675f)


Classe: .container-align-items-stretch\
Parâmetro: align-items: stetch;

![image](https://github.com/user-attachments/assets/923f0d94-e69b-49a7-afc7-63d390f933b0)


Classe: .container-align-items-baseline\
Parâmetro: align-items: baseline;

![image](https://github.com/user-attachments/assets/d67379c6-480e-48c1-8511-79527f02a518)

## Container-gap
Container-gap definirá a distância entre os elementos. Se não for especificada a distância para a coluna ou para a linha, a mesma distância será aplicada para ambos.

Classe: .container-gap\
Parâmetro: gap: 40px;

![image](https://github.com/user-attachments/assets/fa401f1c-be62-4072-abb8-348957682032)

Classe: .container-row-gap\
Parâmetro: row-gap: 40px;

![image](https://github.com/user-attachments/assets/b950b8f8-3562-402e-99c4-fe4f2211dcb8)

Classe: .container-column-gap\
Parâmetro: column-gap: 40px;

![image](https://github.com/user-attachments/assets/6e954d86-4c56-4a9c-880e-95acdbf6810e)

## Item-order
Item-order permite alterar a ordem que os elementos estarão distribuídos no contêiner.

Classe: .item-order\
Parâmetros: order: 1;

Código: 
```
<div id="container-config" class="container-flex">
    <p id="item-config" class="item-order-2">Item order 2</p>
    <p id="item-config" class="item-order-3">Item order 3</p>
    <p id="item-config" class="item-order-1">Item order 1</p>
</div>
```

![image](https://github.com/user-attachments/assets/c256057d-81ba-466e-b5ed-a13579bcd26f)

## Item-flex

Item-flex define a habilidade de um elemento de aumentar ou diminuir de tamanho se necessário.
Exemplo: Se todos os elementos possuem flex-grow igual a 1, o restante do espaço no contêiner será distribuído igualmente entre os elementos, porém se um deles possuir flex-grow igual a 2, ele tentará ocupar o dobro do espaço dos demais elementos.

Classe: .item-flex-grow\
Parâmetro: flex-grow: 2;

![image](https://github.com/user-attachments/assets/c566fcc3-e523-49c1-a9d8-5166ca3a312d)

Classe: .item-flex-shrink\
Parâmetro: flex-shrink: 1;

![image](https://github.com/user-attachments/assets/250debcd-1e71-4f2b-b032-2f447fe4e99a)

## Item-align

Item-align define a forma que o elemento estará alinhado no contêiner.

Classe: .item-align-self-flex-start\
Parâmetro: align-self: flex-start;

Classe: .item-align-self-flex-end\
Parâmetro: align-self: flex-end;

Classe: .item-align-self-center\
Parâmetro: align-self: center;

Classe: .item-align-self-baseline\
Parâmetro: align-self: baseline;

Classe: .item-align-self-stretch\
Parâmetro: align-self: stretch;

![image](https://github.com/user-attachments/assets/8c7061f2-81b5-4199-a84c-381b356f1e8a)


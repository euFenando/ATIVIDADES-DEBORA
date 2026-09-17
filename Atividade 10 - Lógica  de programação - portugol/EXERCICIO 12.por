programa
{
	
	funcao inicio()
	{

		real valor
		real desconto1 = 0.15
		real desconto2 = 0.05
		real resultado1 
		real resultado2
		
		escreva("Escreva um valor de um produto: ")
		leia(valor)

		desconto1 = valor * desconto1
		desconto2 = valor * desconto2 

		resultado1 = valor - desconto1
		resultado2 = valor - desconto2

		se(valor > 200){
			escreva("O valor do seu produto com 15% de desconto é: ", resultado1)
		}
		senao {
			escreva("O valor do seu produto com 5% de desconto é: ", resultado2)
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 512; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */
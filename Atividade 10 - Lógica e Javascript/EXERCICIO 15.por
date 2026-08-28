programa
{
	
	funcao inicio()
	{
		inteiro num
		real media
		inteiro aprovados

		aprovados = 0

		para (num = 1; num <= 5; num++)
		{
			escreva("Digite a média do aluno: ")
			leia(media)

			se(media >= 6)
			{
				aprovados++
			}
		}
	
			escreva("Total de alunos aprovados: ", aprovados)
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 275; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */
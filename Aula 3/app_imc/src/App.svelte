<script>
	// Variáveis de estado
	let peso = 0; // Peso do usuário
	let altura = 0; // Altura do usuário
	let imc = 0; // Índice de Massa Corporal
	let historicoIMC = []; // Histórico de Índice de Massa Corporal

	// Função para calcular o IMC
	function calcularIMC() {
		if (peso > 0 && altura > 0) {
			imc = (peso / Math.pow(altura, 2)).toFixed(2);
    		historicoIMC = [...historicoIMC, { valor: imc, data: new Date() }];
		} else {
			imc = 0;
		}
	}

	// Função para calcular cor do texto do IMC
	function calculaCorTexto(imcValor) {
    const minCor = '#00FF00';
    const maxCor = '#FF0000';
    const porcentagem = (imcValor - 18.5) / (45 - 18.5);
    const r = Math.floor((1 - porcentagem) * parseInt(minCor.substring(1, 3), 16) + porcentagem * parseInt(maxCor.substring(1, 3), 16));
    const g = Math.floor((1 - porcentagem) * parseInt(minCor.substring(3, 5), 16) + porcentagem * parseInt(maxCor.substring(3, 5), 16));
    const b = Math.floor((1 - porcentagem) * parseInt(minCor.substring(5, 7), 16) + porcentagem * parseInt(maxCor.substring(5, 7), 16));
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  }
</script>

<main>
	<h1>Calculadora de IMC</h1>
	<label>
		Peso: <input type="number" bind:value={peso} /> kg
	</label>
	<label>
		Altura: <input type="number" bind:value={altura} /> m
	</label>
	<button on:click={calcularIMC}>Calcular IMC</button>
	{#if imc > 0}
		<p>Seu IMC é {@html `<span style="color: ${calculaCorTexto(imc)};">${imc}</span>`}</p>
		{#if imc < 18.5}
			<p style="">Abaixo do peso</p>
		{:else if imc >= 18.5 && imc < 25}
			<p>Peso ideal (parabéns)</p>
		{:else if imc >= 25 && imc < 30}
			<p>Levemente acima do peso</p>
		{:else if imc >= 30 && imc < 35}
			<p>Obesidade grau I</p>
		{:else if imc >= 35 && imc < 40}
			<p>Obesidade grau II (severa)</p>
		{:else}
			<p>Obesidade III (mórbida)</p>
		{/if}
	{/if}

	<h2>Histórico de IMC</h2>
	<ul>
		{#each historicoIMC as item}
		<li>
			Valor do IMC: <span>{@html `<span style="color: ${calculaCorTexto(item.valor)};">${item.valor}</span>`}</span>
			(Calculado em: {item.data.toLocaleString()})
		  </li>
		{/each}
	</ul>
</main>

<style>
	main {
		font-family: sans-serif;
		text-align: center;
		padding: 2rem;
	}

	h1 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}

	label {
		display: block;
		margin-bottom: 0.5rem;
	}

	input {
		padding: 0.25rem;
	}

	p{
		text-transform: uppercase;
	}
</style>

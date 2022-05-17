<script>
	import Capa from "./Capa.svelte";
	import Rodape from "./rodape.svelte";
	import Secao from "./Secao.svelte";
</script>

<Capa />

<Secao titulo="Sobre Mim" centralizarTexto={true}>
	<p>
		Sou estudante do curso de Analise e Desenvolvimento de Sistemas no
		Instituto Federal de Sao Paulo, campus Campos do Jordao.
	</p>
</Secao>
<Secao titulo="Competencias">
	<ul>
		<li>
			<strong>Aprendizagem:</strong> JavaScript, Java, Python,
		</li>
	</ul>
</Secao>
<Secao titulo="Experiencia">
	<div>
		<h2>INATEL</h2>
		<span>Backend Dev</span>
		<ul>
			<li>Java</li>
		</ul>
	</div>
</Secao>
<Secao titulo="Conquistas">
	<ul>
		<li>udemy</li>
	</ul>
</Secao>

<Rodape />

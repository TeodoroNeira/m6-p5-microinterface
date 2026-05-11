# Introdução

Um dos principais recursos utilizados por algoritmos é a clusterização. O seu objetivo é agregar diversas entradas em uma, para assim economizar recursos computacionais, tornando a resposta mais rápida e eficiente. Dessa forma, um dos parâmetros que poderá ser controlado pelos operadores se trata da quantidade de clusters formados. No entanto, algo que pode não ser tão claro é o tamanho relativo do número escolhido. Por isso, o objetivo do projeto é trazer uma representação visual para a quantidade de clusters escolhida, assim buscando tornar mais claro os tamanhos de cada agrupamento.

# Rascunho

 <img src="rascunho.png">

 Na esquerda, está presente um campo para a seleção da quantidade de clusters desejada, permitindo que o usuário selecione um número específico. Na direita, um retângulo busca representar a base de dados. A representação do retângulo deverá ser cortada no número de clusters definido, assim representando as frações da base de dados. Embaixo, a quantidade de clientes por cluster também deverá ser explicitada.

 # Resultados obtidos

Nesta microinterface, o principal valor gerado pela visualização é transformar um parâmetro abstrato (quantidade de clusters) em uma leitura imediata do “tamanho de grupo” dentro de uma base fixa de clientes.

- A base de dados é tratada como um total fixo de **1.000.000 de clientes**.
- Ao selecionar $N$ clusters, a representação da base é **segmentada em $N$ partes**, reforçando visualmente a ideia de particionamento.
- O texto abaixo do gráfico explicita o impacto numérico da escolha, calculando **clientes por cluster**.

Na prática, isso ajuda a:
- Comparar rapidamente cenários (poucos clusters = grupos maiores; muitos clusters = grupos menores).
- Entender proporcionalidade sem fazer a conta mentalmente.
- Comunicar a decisão de parametrização de forma visual, inclusive para pessoas não técnicas.

Os exemplos a seguir demonstram que, ao alterar $N$, tanto a segmentação quanto o valor de “clientes/cluster” se atualizam imediatamente, deixando mais claro o efeito do número de clusters na granularidade dos agrupamentos.

<img src="exemplo1.png">

<img src="exemplo2.png">
// function Home() {
//   return <h1>Página em construção 😎</h1>;
// }

// export default Home;

import React from "react";

function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <header style={{ borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
        <h1>📰 TabNews</h1>
        <p>Seu portal de notícias favorito</p>
      </header>

      <main style={{ marginTop: "20px" }}>
        <article style={{ marginBottom: "20px" }}>
          <h2>Tecnologia</h2>
          <p>
            Novas ferramentas de IA estão revolucionando o desenvolvimento web.
            Especialistas apontam tendências para os próximos anos.
          </p>
        </article>

        <article style={{ marginBottom: "20px" }}>
          <h2>Economia</h2>
          <p>
            Mercado financeiro fecha o dia em alta após divulgação de dados
            positivos. Veja os principais destaques.
          </p>
        </article>

        <article>
          <h2>Entretenimento</h2>
          <p>
            Confira os lançamentos mais esperados do cinema nesta temporada. A
            crítica comenta os favoritos ao Oscar.
          </p>
        </article>
      </main>

      <footer
        style={{
          marginTop: "40px",
          borderTop: "1px solid #ccc",
          paddingTop: "10px",
        }}
      >
        <p>© 2025 TabNews. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;

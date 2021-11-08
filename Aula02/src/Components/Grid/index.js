import './index.css';
import Video from '../Video'

const Grid = () => {
  return (
    <>
      <div className="items" id="favoritos">
        <article>
          <Video url="https://www.youtube.com/embed/aHmDi6CUQ3M" title={'Matrix Ressurrections'}
            description={'Em um mundo de duas realidades - a vida cotidiana e o que está por trás dela - Thomas Anderson terá que escolher seguir o coelho branco mais uma vez. A escolha, embora seja uma ilusão, ainda é a única maneira de entrar ou sair da Matrix, que é mais forte, mais segura e mais perigosa do que nunca.'}
          />
        </article>
        <article>
          <Video url="https://www.youtube.com/embed/x_me3xsvDgk" title={'Eternals'}
            description={'Em um mundo de duas realidades - a vida cotidiana e o que está por trás dela - Thomas Anderson terá que escolher seguir o coelho branco mais uma vez. A escolha, embora seja uma ilusão, ainda é a única maneira de entrar ou sair da Matrix, que é mais forte, mais segura e mais perigosa do que nunca.'}
          />
        </article>
        <article>
          <Video url="https://www.youtube.com/embed/5xH0HfJHsaY" title={'Parasite'}
            description={'Toda a família de Ki-taek está desempregada, vivendo em um porão sujo e apertado, mas uma obra do acaso faz com que ele comece a dar aulas de inglês a uma garota de família rica. Fascinados com a vida luxuosa destas pessoas, pai, mãe e filhos bolam um plano para se infiltrarem também na família burguesa, um a um. No entanto, os segredos e mentiras necessários à ascensão social custam caro a todos.'}
          />
        </article>
      </div>
    </>
  )
}
export default Grid;
import './estilo.css'
import BannerPrincipal from './secaoBannerPrincipal'
import Textao from './secaoTextao'
import SecaoBnn_01 from './secaobanner_01'
import SecaoBnn_02 from './secaobanner_02'
import Contato from './secaocontato'
import Horarios from './secaohorarios'

export default function Main () {
    return (
        <main>
            <BannerPrincipal />
            <div id='informacoes'>
            <Textao
            titulo="EXPERIMENTE O MELHOR CAFÉ DA CIDADE!"
            frase="O café não é uma simples bebida que foi preparada por alguém. O café é momento e nós mostraremos isso. Frases como “Que tal tomarmos um café?” ou até então “Vamos fazer um café?” são demonstrações de que um dos momentos que mais reforçam os laços para com o próximo está finalmente por acontecer. Fraco ou forte? Com ou sem açúcar? Você deseja açúcar ou adoçante? Estas são frases que ouvimos em vários lugares. Em quase todosos locais onde há pessoas há também café. Parecemos intrínsecos ao café.Aqui na Manhattan serviremos para você com muito carinho o nosso querido e amado Amaros Coffe diretamente do nosso cafezal em Minas Gerais. Para todos nós, café é coisa séria e merece todo o cuidado." 
            />
            </div>
            <SecaoBnn_01
            texto="Um bom café é motivo de alegria!"
            />
            <Textao 
            titulo="O QUE É O CAFÉ MANHATTAN?"
            frase="Segundo a Metodologia de Avaliação Sensorial da SCA (Specialty CoffeeAssociation), usada no mundo todo, um café especial é todo aquele queatinge, no mínimo, 80 pontos na escala de pontuação da metodologia (que vai até 100). O Café Manhattan destaca-se nos atributos fragrância,corpo, harmonia, doçura e sabor, nesse caso, possuindo sabores e aromas que podem ser frutados, herbais, doces como caramelo e chocolate.Podemos fazer uma analogia com o vinho, pois o café Manhattan também pode ser apreciado por suas características sensoriais e não apenas pela cafeína. Através do excelente padrão de cultivo, cuidado pós-colheita e da torra, você poderá experimentar diferentes e deliciosos tipos de café."
            />
            <SecaoBnn_02
            texto="A vida só começa depois do café!"
            />
            <Textao 
            titulo="CONHEÇA O CAFÉ GOURMET MANHATTAN?"
            frase="As características desse tipo do café gourmet da Manhattan são muito marcantes. O seu corpo vai depender da variedade do blend: quanto mais “pesado” ele for na boca, maior o corpo. Quanto menor a sua pesagem, menor o corpo. O nosso café gourmet é o mais bem avaliado no processo de produção, para que ele não venha com nenhum tipo de defeito. O aroma é bem perceptível e o consumidor consegue sentir nitidamente, sendo que ele pode variar entre 4 aromas: florado, cítrico, achocolatado, frutado. Essas variações são consequências dos grãos do tipo Arábica. Tudo isso vai depender da torra, quanto mais clara ela for, maior será a acidez."
            />
            <Contato />
            <Horarios />
        </main>
    )
}
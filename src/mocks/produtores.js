import green from '../../src/assets/produtores/green.png';
import grow from '../../src/assets/produtores/grow.png';
import jenny from '../../src/assets/produtores/jenny-jack.png';
import potager from '../../src/assets/produtores/potager.png';
import salad from '../../src/assets/produtores/salad.png';

const gerarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const produtores = {
    titulo: "Produtores",
    lista: [
        {
            nome: "Green",
            imagem: green,
            distancia: gerarNumeroAleatorio(1,500),
            estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
            nome: "Grow",
            imagem: grow,
            distancia: gerarNumeroAleatorio(1,500),
            estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
            nome: "Jenny Jack Farm",
            imagem: jenny,
            distancia: gerarNumeroAleatorio(1,500),
            estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
            nome: "Potager",
            imagem: potager,
            distancia: gerarNumeroAleatorio(1,500),
            estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
            nome: "Salad",
            imagem: salad,
            distancia: gerarNumeroAleatorio(1,500),
            estrelas: gerarNumeroAleatorio(1, 5),
        },

    ]
}

export default produtores;
let precoProdutoForm = document.querySelector("#preco-produto")
let porcentagemForm = document.querySelector("#porcentagem")

precoProdutoForm.addEventListener('input', e => {
    updateValues();
})

porcentagemForm.addEventListener('input', e => {
    updateValues();
})

function updateValues() {
    const newVal = convertToMoney(precoProdutoForm.value)
    precoProdutoForm.value = newVal

    preco(newVal)
}

function convertToMoney(valor) {
    let value = valor.replace(/[\D]+/g, '');

    // return value.toLocaleString("pt-BR", {
    //     style: "currency",
    //     currency: "BRL",
    //     minimumFractionDigits: 2
    // })

    var tmp = value + '';
    tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
    if (tmp.length > 6)
        tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    return tmp;
}

function preco(valor) {
    let _v = valor.replace('.', '');
    _v = parseFloat(_v)

    const porcentagem = porcentagemForm.value / 100;

    let precoNaLojaForm = document.querySelector("#preco-produto-na-loja")
    let comicao = document.querySelector("#comicao")
    precoNaLojaForm.value = _v - (_v * porcentagem)
    comicao.value = (_v * porcentagem)
}
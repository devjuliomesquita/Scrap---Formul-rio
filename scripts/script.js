// Criando minhas variáveis
// --- Botões
var btnPageAdd = document.getElementById("btnPageAdd");
var btnPageSearch = document.getElementById("btnPageSearch");
var formServButton = document.getElementById("form-serv-button");
var loadForms = document.getElementById("load-forms");
var btnSaveCopy = document.getElementById("form-button-save-copy");
var formGetClienteDados = document.getElementById('form-get-cliente-dados');
var selectCaixa = document.getElementById("select-caixa");




// --- Pagínas de acesso
var pageAdd = document.getElementById("add-page");
var pageServ = document.getElementById("sevice-page");
var pageSearch = document.getElementById("search-page");
var ativacaoParc = document.getElementById("ativacao-parc");
var ativacaoPropria = document.getElementById("ativacao-propria");
var lanToLan = document.getElementById("lan-to-lan");
var linkDeDados = document.getElementById("link-dados");
var upgradePropria = document.getElementById("upgrade-propria");

// --- Variáveis dos formulários
var formClienteNome = document.getElementById("form-cliente-nome");
var formClienteEndereco = document.getElementById("form-cliente-endereco");
var formClienteServico = document.getElementById("form-cliente-servico");
var formClienteTecnologia = document.getElementById("form--cliente-tecnologia");
var formClienteVelocidade = document.getElementById("form-cliente-velocidade");
var formClienteChamado = document.getElementById("form-cliente-chamado");
var formTecNome = document.getElementById("form-tec-nome");
var formTecTelefone = document.getElementById("form-tec-telefone");
var formTecEmail = document.getElementById("form-tec-email");
var formParceiroNome = document.getElementById("form-parceiro-nome");
var formParceiroResponsavel = document.getElementById("form-parceiro-responsavel");
var formParceiroTelefone = document.getElementById("form-parceiro-telefone");
var formParceiroEmail = document.getElementById("form-parceiro-Email");
var formParceiroNni = document.getElementById("form-parceiro-nni");
var formInvestMensal = document.getElementById("form-invest-mensal");
var formInvestInstal = document.getElementById("form-invest-instal");
var formFaturamentoMensal = document.getElementById("form-faturamento-mensal");
var formFaturamentoInstal = document.getElementById("form-faturamento-instal");
var targetMensal = Number(formFaturamentoMensal)*0.5;
var targetInstalacao = Number(formFaturamentoInstal)/1.2;
var formCaixaNome = document.getElementById("form-caixa-nome");
var formCaixaCord = document.getElementById("form-caixa-cord");
var formCaixaReservaSwitch = document.getElementById("form-caixa-reserva-switch");
var formObs = document.getElementById("form-obs");
var atividade = "";
var redeAtivacao = "";
var formLtlEndPa = document.getElementById('form-ltl-end-pa');
var formLtlCordPa = document.getElementById("form-ltl-cord-pa");
var formLtlSwtPa = document.getElementById("form-ltl-swt-pa");
var formLtlEndPb = document.getElementById('form-ltl-end-pb');
var formLtlCordPb = document.getElementById("form-ltl-cord-pb");
var formLtlSwtPb = document.getElementById("form-ltl-swt-pb");
var formLdEnd = document.getElementById("form-ld-end");
var formLdCord = document.getElementById("form-ld-cord");
var formLdSwt = document.getElementById("form-ld-swt");
var formLdBlIp = document.getElementById("form-ld-blIp");
var formUpgradeVel = document.getElementById("form-upgrade-vel");
var formUpgradeFacil = document.getElementById("form-upgrade-facil");

var taskArr = [];
var selectRede = document.getElementById("select-rede");
var selectServico = document.getElementById("select-serv");

var formSelectRede = document.querySelector("#form-rede");

// EXTRAÇÃO DOS DADOS
var dados1 = [];

const dados = () => {
    try {
        var cliente = document.querySelector('body > div.wrapper > div.content-wrapper > section.content > div > div > div:nth-child(2) > ticket > div > div > div > div > div:nth-child(3) > div > div > div.panel-body > div > div:nth-child(1) > table > tbody > tr:nth-child(4) > td:nth-child(2) > a').innerText;
        var endereco = document.querySelector('body > div.wrapper > div.content-wrapper > section.content > div > div > div:nth-child(2) > ticket > div > div > div > div > div:nth-child(3) > div > div > div.panel-body > div > div:nth-child(1) > table > tbody > tr:nth-child(12) > td > p').innerText;
        var servico = document.querySelector('body > div.wrapper > div.content-wrapper > section.content > div > div > div:nth-child(2) > ticket > div > div > div > div > div:nth-child(3) > div > div > div.panel-body > div:nth-child(1) > div:nth-child(1) > table > tbody > tr:nth-child(6) > td:nth-child(2) > a').innerText;
        var tecnologia = document.querySelector('body > div.wrapper > div.content-wrapper > section.content > div > div > div:nth-child(2) > ticket > div > div > div > div > div:nth-child(3) > div > div > div.panel-body > div:nth-child(1) > div:nth-child(1) > table > tbody > tr:nth-child(9) > td:nth-child(2)').innerText;
        var velocidade = document.querySelector('body > div.wrapper > div.content-wrapper > section.content > div > div > div:nth-child(2) > ticket > div > div > div > div > div:nth-child(3) > div > div > div.panel-body > div:nth-child(1) > div:nth-child(1) > table > tbody > tr:nth-child(10) > td:nth-child(2)').innerText;
        var chamado = document.querySelector('body > div.wrapper > div.content-wrapper > section.content > div > div > div:nth-child(2) > ticket > div > div > div > div > div:nth-child(1) > div.col-md-8 > h1').innerText.substring(1,15);
        var arryDados = [];
        arryDados.push(cliente, endereco, servico, tecnologia, velocidade, chamado);
        console.log(arryDados);
        return arryDados;    
    } catch (error) {
        var cliente = document.querySelector('body > div.wrapper > div.content-wrapper > section.content > div > div > div:nth-child(2) > ticket > div > div > div > div > div:nth-child(3) > div > div > div.panel-body > div > div:nth-child(1) > table > tbody > tr:nth-child(2) > td:nth-child(2) > a').innerText;
        var endereco = document.querySelector('body > div.wrapper > div.content-wrapper > section.content > div > div > div:nth-child(2) > ticket > div > div > div > div > div:nth-child(3) > div > div > div.panel-body > div > div:nth-child(1) > table > tbody > tr:nth-child(10) > td > p').innerText;
        var servico = document.querySelector('body > div.wrapper > div.content-wrapper > section.content > div > div > div:nth-child(2) > ticket > div > div > div > div > div:nth-child(3) > div > div > div.panel-body > div > div:nth-child(1) > table > tbody > tr:nth-child(4) > td:nth-child(2) > a').innerText;
        var tecnologia = document.querySelector('body > div.wrapper > div.content-wrapper > section.content > div > div > div:nth-child(2) > ticket > div > div > div > div > div:nth-child(3) > div > div > div.panel-body > div > div:nth-child(1) > table > tbody > tr:nth-child(8) > td:nth-child(2)').innerText;
        var velocidade = document.querySelector('body > div.wrapper > div.content-wrapper > section.content > div > div > div:nth-child(2) > ticket > div > div > div > div > div:nth-child(3) > div > div > div.panel-body > div > div:nth-child(1) > table > tbody > tr:nth-child(7) > td:nth-child(2)').innerText;
        var chamado = document.querySelector('body > div.wrapper > div.content-wrapper > section.content > div > div > div:nth-child(2) > ticket > div > div > div > div > div:nth-child(1) > div.col-md-8 > h1').innerText.substring(1,15);
        var arryDados = [];
        arryDados.push(cliente, endereco, servico, tecnologia, velocidade,chamado);
        console.log(arryDados);
        return arryDados;  
    }
    var cliente = document.querySelector('body > div.wrapper > div.content-wrapper > section.content > div > div > div:nth-child(2) > ticket > div > div > div > div > div:nth-child(3) > div > div > div.panel-body > div > div:nth-child(1) > table > tbody > tr:nth-child(4) > td:nth-child(2) > a').innerText;
    var endereco = document.querySelector('body > div.wrapper > div.content-wrapper > section.content > div > div > div:nth-child(2) > ticket > div > div > div > div > div:nth-child(3) > div > div > div.panel-body > div > div:nth-child(1) > table > tbody > tr:nth-child(12) > td > p').innerText;
    var servico = document.querySelector('body > div.wrapper > div.content-wrapper > section.content > div > div > div:nth-child(2) > ticket > div > div > div > div > div:nth-child(3) > div > div > div.panel-body > div:nth-child(1) > div:nth-child(1) > table > tbody > tr:nth-child(6) > td:nth-child(2) > a').innerText;
    var tecnologia = document.querySelector('body > div.wrapper > div.content-wrapper > section.content > div > div > div:nth-child(2) > ticket > div > div > div > div > div:nth-child(3) > div > div > div.panel-body > div:nth-child(1) > div:nth-child(1) > table > tbody > tr:nth-child(9) > td:nth-child(2)').innerText;
    var velocidade = document.querySelector('body > div.wrapper > div.content-wrapper > section.content > div > div > div:nth-child(2) > ticket > div > div > div > div > div:nth-child(3) > div > div > div.panel-body > div:nth-child(1) > div:nth-child(1) > table > tbody > tr:nth-child(10) > td:nth-child(2)').innerText;
    var chamado = document.querySelector('body > div.wrapper > div.content-wrapper > section.content > div > div > div:nth-child(2) > ticket > div > div > div > div > div:nth-child(3) > div > div > div.panel-body > div > div:nth-child(1) > table > tbody > tr:nth-child(5) > td.ng-binding').innerText;
    var arryDados = [];
    arryDados.push(cliente, endereco, servico, tecnologia, velocidade, chamado);
    console.log(arryDados);
    return arryDados;
};

async function GetDados(){
    
await chrome.tabs.query({active: true, currentWindow: true}).then(([tab]) => {
    return chrome.scripting.executeScript(
      {
        target: {tabId: tab.id},
        // files: ['script1.js'],
        func: dados,
      })
  }).then((resp) => [formClienteNome.value = resp[0].result[0],
                    formClienteEndereco.value = resp[0].result[1],
                    formClienteServico.value = resp[0].result[2],
                    formClienteTecnologia.value = resp[0].result[3],
                    formClienteVelocidade.value = resp[0].result[4],
                    formClienteChamado.value = resp[0].result[5],
                    console.log(resp)]);
};

// Lista de Funções
document.addEventListener('DOMContentLoaded', chamarList);
function showAddPage() {
    pageAdd.style.display = "block";
    pageSearch.style.display = "none";
    pageServ.style.display = "none";
};
function showSearchPage() {
    chamarList();
    pageAdd.style.display = "none";
    pageSearch.style.display = "block";
    pageServ.style.display = "none";
};
function showServPage() {
    pageAdd.style.display = "none";
    pageSearch.style.display = "none";
    pageServ.style.display = "block";
};
function returnForm() {
    
    if(selectServico.value == "1" && selectRede.value == "1"){

        ativacaoParc.style.display = "none";
        ativacaoPropria.style.display = "block";
        lanToLan.style.display = "none";
        upgradePropria.style.display = "none";
        linkDeDados.style.display = "none";
        atividade = "Ativação Inicial";
        redeAtivacao = "Própria - MOBWIRE";
    }
    else if(selectServico.value == "1" && selectRede.value == "2") {
        ativacaoParc.style.display = "block";
        ativacaoPropria.style.display = "none";
        lanToLan.style.display = "none";
        linkDeDados.style.display = "none";
        upgradePropria.style.display = "none";
        atividade = "Ativação Inicial";
        redeAtivacao = "Parceiro";
    }
    else if(selectServico.value == "2" && selectRede.value == "1") {
        ativacaoParc.style.display = "none";
        ativacaoPropria.style.display = "none";
        lanToLan.style.display = "none";
        linkDeDados.style.display = "none";
        upgradePropria.style.display = "block";
        atividade = "Upgrade";
        redeAtivacao = "Própria - MOBWIRE";
    }
    else if(selectServico.value == "3" && selectRede.value == "1") {
        ativacaoParc.style.display = "none";
        ativacaoPropria.style.display = "none";
        lanToLan.style.display = "block";
        linkDeDados.style.display = "none";
        upgradePropria.style.display = "none";
        atividade = "Lan To Lan";
        redeAtivacao = "Própria - MOBWIRE";
    }
    else if(selectServico.value == "3" && selectRede.value == "2") {
        ativacaoParc.style.display = "block";
        ativacaoPropria.style.display = "none";
        lanToLan.style.display = "none";
        linkDeDados.style.display = "block";
        upgradePropria.style.display = "none";
        atividade = "Lan To Lan";
        redeAtivacao = "Parceiro";
    }
    else if(selectServico.value == "4" && selectRede.value == "1") {
        ativacaoParc.style.display = "none";
        ativacaoPropria.style.display = "none";
        lanToLan.style.display = "none";
        linkDeDados.style.display = "block";
        upgradePropria.style.display = "none";
        atividade = "Link de Dados";
        redeAtivacao = "Própria - MOBWIRE";
    }
    else{
        ativacaoParc.style.display = "none";
        ativacaoPropria.style.display = "none";
        lanToLan.style.display = "none";
        linkDeDados.style.display = "none";
        upgradePropria.style.display = "none";
    }
};

selectCaixa.addEventListener('change', () => {
    let result = selectCaixa.options[selectCaixa.selectedIndex].value;
    console.log(result);
    if(result == "CDOE"){formCaixaReservaSwitch.disabled = false;}
    else{formCaixaReservaSwitch.disabled = true;
         formCaixaReservaSwitch.value = "";}
});

//FUNÇÃO COPYSCRIPT
function copyScript(id) {
    const taskIndex = parseInt(id[0]);
    const cliente = taskArr[taskIndex];
    const valorServRede = cliente.atividade + " " + cliente.redeAtivacao;
    console.log(valorServRede);
    switch (valorServRede) {
        case "Ativação Inicial Própria - MOBWIRE": 
        copyAtvProria(cliente);
        break;
        case "Ativação Inicial Parceiro": 
        copyAtvParceiro(cliente);
        break;
        case "Lan To Lan Própria - MOBWIRE": 
        copyLtlPropria(cliente);
        break;
        case "Lan To Lan Parceiro": 
        copyLtlParceiro(cliente);
        break;
        case "Link de Dados Própria - MOBWIRE": 
        copyLinkDPropria(cliente);
        break;
        case "Upgrade Própria - MOBWIRE": 
        copyUpProria(cliente);
        break;
        default: console.log('Desculpe, não foi possível copiar os dados...');
        break;
    }
}

function copyAtvProria (cliente) {
    navigator.clipboard.writeText(
        "Atividade: " + cliente.atividade
        + "\nCliente: " + cliente.clienteNome
        + "\nServiço: " + cliente.clienteServico
        + "\nVelocidade: " + cliente.clienteVelocidade
        + "\nEndereço: " + cliente.clienteEndereco
        + "\n\nTécnico: " + cliente.tecNome
        + "\nTelefone do Técnico: " + cliente.tecTelefone
        + "\nE-mail do Técnico: " + cliente.tecEmail
        + "\n\nAtendimento: " + cliente.redeAtivacao
        + "\nCaixa: " + cliente.caixaNome
        + "\nCoordenada: " + cliente.caixaCord
        + "\nReserva de porta Switch: " + cliente.CaixaReservaSwitch
        + "\n\nObservações: \n" + cliente.Obs )
        .then(() => {
            alert("Texto copiado para a área de transferência!!!",);
        });
};
function copyAtvParceiro (cliente) {
    navigator.clipboard.writeText(
        "Atividade: " + cliente.atividade
        + "\nCliente: " + cliente.clienteNome
        + "\nServiço: " + cliente.clienteServico
        + "\nVelocidade: " + cliente.clienteVelocidade
        + "\nEndereço: "+  cliente.clienteEndereco
        + "\n\nTécnico: "+  cliente.tecNome
        + "\nTelefone do Técnico: "+  cliente.tecTelefone
        + "\nE-mail do Técnico: "+  cliente.tecEmail
        + "\n\nParceiro: "+  cliente.parNome
        + "\nResponsável: "+  cliente.parResponsavel
        + "\nTelefone do Parceiro: "+  cliente.parTelefone
        + "\nE-mail do Parceiro: "+  cliente.parEmail
        + "\n\nAtendimento: "+  cliente.redeAtivacao
        + "\n\nInvestimento Mensal: "+  (Number(cliente.investMensal)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
        + "\nInvestimento Instalação: "+  (Number(cliente.investInstal)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
        + "\n\nFaturamento Mensal: "+ (Number(cliente.fatMensal)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
        + "\nFaturamento Instalação: "+  (Number(cliente.fatInstal)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
        + "\n\nTarget Mensal: "+  (Number(cliente.fatMensal)/2).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
        + "\nTarget Instalação: "+  (Number(cliente.fatInstal)/1.2).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
        + "\n\nNNI - Interconexão: \n"+  cliente.tecNni
        + "\n\nObservações: \n"+  cliente.Obs)
        .then(() => {
            alert("Texto copiado para a área de transferência!!!");
        });
};
function copyLtlPropria (cliente) {
    navigator.clipboard.writeText(
        "Atividade: " + cliente.atividade
        + "\nCliente: " + cliente.clienteNome
        + "\nServiço: " + cliente.clienteServico
        + "\nVelocidade: " + cliente.clienteVelocidade
        + "\nEndereço: " + cliente.clienteEndereco
        + "\n\nTécnico: " + cliente.tecNome
        + "\nTelefone do Técnico: " + cliente.tecTelefone
        + "\nE-mail do Técnico: " + cliente.tecEmail
        + "\n\nAtendimento: " + cliente.redeAtivacao
        + "\n\nDados - ponta A: "
        + "\nEndereço - ponta A: " + cliente.ltlEndPa
        + "\nCoordenada - ponta A: " + cliente.ltlCordPa
        + "\nReserva de porta switch - ponta A: " + cliente.ltlSwtPa
        + "\n\nDados - ponta B: "
        + "\n\nEndereço - ponta B: " + cliente.ltlEndPb
        + "\nCoordenada - ponta B: " + cliente.ltlCordPb
        + "\nReserva de porta switch - ponta B: " + cliente.ltlSwtPb
        + "\n\nObservações: \n" + cliente.Obs )
        .then(() => {
            alert("Texto copiado para a área de transferência!!!",);
        });
};
function copyLinkDPropria (cliente) {
    navigator.clipboard.writeText(
        "Atividade: " + cliente.atividade
        + "\nCliente: " + cliente.clienteNome
        + "\nServiço: " + cliente.clienteServico
        + "\nVelocidade: " + cliente.clienteVelocidade
        + "\nEndereço: " + cliente.clienteEndereco
        + "\n\nTécnico: " + cliente.tecNome
        + "\nTelefone do Técnico: " + cliente.tecTelefone
        + "\nE-mail do Técnico: " + cliente.tecEmail
        + "\n\nAtendimento: " + cliente.redeAtivacao
        + "\n\nDados da abordagem: "
        + "\nEndereço de abordagem: " + cliente.ldEnd
        + "\nCoordenada da abordagem: " + cliente.ldCord
        + "\nReserva do switch: " + cliente.ldSwt
        + "\nReserva do bloco de IP: " + cliente.ldBlIp
        + "\n\nObservações: \n" + cliente.Obs )
        .then(() => {
            alert("Texto copiado para a área de transferência!!!",);
        });
};
function copyLtlParceiro (cliente){
    navigator.clipboard.writeText(
        "Atividade: " + cliente.atividade
        + "\nCliente: " + cliente.clienteNome
        + "\nServiço: " + cliente.clienteServico
        + "\nVelocidade: " + cliente.clienteVelocidade
        + "\nEndereço: " + cliente.clienteEndereco
        + "\n\nTécnico: " + cliente.tecNome
        + "\nTelefone do Técnico: " + cliente.tecTelefone
        + "\nE-mail do Técnico: " + cliente.tecEmail
        + "\n\nAtendimento: " + cliente.redeAtivacao
        + "\n\nDados da abordagem: "
        + "\nEndereço de abordagem: " + cliente.ldEnd
        + "\nCoordenada da abordagem: " + cliente.ldCord
        + "\nReserva do switch: " + cliente.ldSwt
        + "\nReserva do bloco de IP: " + cliente.ldBlIp
        + "\n\nParceiro: "+  cliente.parNome
        + "\nResponsável: "+  cliente.parResponsavel
        + "\nTelefone do Parceiro: "+  cliente.parTelefone
        + "\nE-mail do Parceiro: "+  cliente.parEmail
        + "\n\nAtendimento: "+  cliente.redeAtivacao
        + "\n\nInvestimento Mensal: "+  (Number(cliente.investMensal)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
        + "\nInvestimento Instalação: "+  (Number(cliente.investInstal)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
        + "\n\nFaturamento Mensal: "+ (Number(cliente.fatMensal)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
        + "\nFaturamento Instalação: "+  (Number(cliente.fatInstal)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
        + "\n\nTarget Mensal: "+  (Number(cliente.fatMensal)/2).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
        + "\nTarget Instalação: "+  (Number(cliente.fatInstal)/1.2).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
        + "\n\nNNI - Interconexão: \n"+  cliente.tecNni
        + "\n\nObservações: \n" + cliente.Obs )
        .then(() => {
            alert("Texto copiado para a área de transferência!!!",);
        });
};
function copyUpProria (cliente) {
    navigator.clipboard.writeText(
        "Atividade: " + cliente.atividade
        + "\nCliente: " + cliente.clienteNome
        + "\nServiço: " + cliente.clienteServico
        + "\nVelocidade: " + cliente.clienteVelocidade
        + "\nEndereço: " + cliente.clienteEndereco
        + "\n\nTécnico: " + cliente.tecNome
        + "\nTelefone do Técnico: " + cliente.tecTelefone
        + "\nE-mail do Técnico: " + cliente.tecEmail
        + "\n\nAtendimento: " + cliente.redeAtivacao
        + "\nNova velocidade: " + cliente.UpgradeVel
        + "\nFacilidades: \n" + cliente.UpgradeFacil
        + "\n\nObservações: \n" + cliente.Obs )
        .then(() => {
            alert("Texto copiado para a área de transferência!!!",);
        });
};
//FUNÇÃO DE SAVECOPYSCRIPT
function SaveCopyScript(){
    addTask();
    // copyScript();
    clearFields();
}
// FUNÇÃO DE LIMPAR OS CAMPOS
var clearFields = () =>{
    var fields = document.querySelectorAll('.form-control');
    fields.forEach(field => field.value = "")
}
const updateView = () => {

    const tasksList = document.getElementById("link-conteiner");

    var child = tasksList.lastChild;
    while(child) {
        tasksList.removeChild(child);
        child = tasksList.lastChild;
    }

    taskArr.forEach((Element, index) => {

        const newRow = document.createElement("div");
        newRow.setAttribute("class", "row justify-content-center");

        const newCol1 = document.createElement("div");
        newCol1.setAttribute("class", "link-header col-sm-2");

        const newCol2 = document.createElement("div");
        newCol2.setAttribute("class", "link-body col-sm-10");

        const newRow2 = document.createElement("div");
        newRow2.setAttribute("class", "row align-items-center ");

        const newCol1Row2 = document.createElement("div");
        newCol1Row2.setAttribute("class", "col-sm-7");

        const newCol2row2 = document.createElement("div");
        newCol2row2.setAttribute("class", "col-sm");

        const newRow1Col1Row2 = document.createElement("div");
        newRow1Col1Row2.setAttribute("class", "row link-title");
        newRow1Col1Row2.innerHTML = (index + 1) + ". " + Element.clienteNome;

        const newRow2Col1row2 = document.createElement("div");
        newRow2Col1row2.setAttribute("class", "row");
        newRow2Col1row2.innerHTML =  Element.atividade + " / "+ Element.redeAtivacao; 

        const newRow2Col1row3 = document.createElement("div");
        newRow2Col1row3.setAttribute("class", "row link-chamado ");
        newRow2Col1row3.innerHTML = "N° - " + Element.clienteChamado; 

        const newDivCol2row2 = document.createElement("button");
        newDivCol2row2.setAttribute("role","group");
        newDivCol2row2.setAttribute("aria-label","Basic example");
        newDivCol2row2.setAttribute("class", "gap-sm-1 btn-group btn-group-sm teste");

        const buttonCopy = document.createElement("button");
        buttonCopy.innerHTML = "Copiar";
        buttonCopy.setAttribute("id", index + "copy");
        buttonCopy.setAttribute("class", "btn btn-warning");
        buttonCopy.setAttribute("type", "button");
        buttonCopy.addEventListener("click", (event) => copyScript(event.target.id));

        const buttonEdit = document.createElement("button");
        buttonEdit.innerHTML = "Editar";
        buttonEdit.setAttribute("id", index + "editar");
        buttonEdit.setAttribute("class", "btn btn-primary");
        buttonEdit.setAttribute("type", "button");
        buttonEdit.addEventListener("click", (event) => editTask(event.target.id));

        
        const buttonDelete = document.createElement("button");
        buttonDelete.innerHTML = "Excluir";
        buttonDelete.setAttribute("id", index + "delete");
        buttonDelete.setAttribute("class", "btn btn-danger");
        buttonCopy.setAttribute("type", "button");
        buttonDelete.addEventListener("click", (event) => deleteTask(event.target.id));

        // const iconDelete = document.createElement("i");
        // iconDelete.setAttribute("id", index + "delete");
        // iconDelete.setAttribute("class", "fa-solid fa-trash");
        // iconDelete.setAttribute("type", "text");
        // iconDelete.addEventListener("click", (event) => deleteTask(event.target.id));

        // const iconEditar = document.createElement("i");
        // iconEditar.setAttribute("id", index + "editar");
        // iconEditar.setAttribute("class", "fa-solid fa-pen-to-square");
        // iconEditar.setAttribute("type", "text");
        // iconEditar.addEventListener("click", (event) => editTask(event.target.id));

        // const iconCopiar = document.createElement("i");
        // iconCopiar.setAttribute("id", index + "copy");
        // iconCopiar.setAttribute("class", "fa fa-solid fa-copy");
        // iconCopiar.setAttribute("type", "text");
        // iconCopiar.addEventListener("click", (event) => copyScript(event.target.id));

        // buttonDelete.appendChild(iconDelete);
        // buttonEdit.appendChild(iconEditar);
        // buttonCopy.appendChild(iconCopiar);

        newDivCol2row2.appendChild(buttonCopy);
        newDivCol2row2.appendChild(buttonEdit);
        newDivCol2row2.appendChild(buttonDelete);
        

        newCol2row2.appendChild(newDivCol2row2);

        newCol1Row2.appendChild(newRow1Col1Row2);
        newCol1Row2.appendChild(newRow2Col1row2);
        newCol1Row2.appendChild(newRow2Col1row3);

        newRow2.appendChild(newCol1Row2);
        newRow2.appendChild(newCol2row2);

        newCol2.appendChild(newRow2);

        newRow.appendChild(newCol1);
        newRow.appendChild(newCol2);
        

        tasksList.appendChild(newRow);
    });
}

const addTask = () => {

    var dict = {};
    dict = {
        "clienteNome":formClienteNome.value,
        "clienteEndereco":formClienteEndereco.value,
        "clienteServico":formClienteServico.value,
        "clienteTecnologia":formClienteTecnologia.value,
        "clienteVelocidade":formClienteVelocidade.value,
        "clienteChamado":formClienteChamado.value,
        "tecNome":formTecNome.value,
        "tecTelefone":formTecTelefone.value,
        "tecEmail":formTecEmail.value,
        "parNome":formParceiroNome.value,
        "parResponsavel":formParceiroResponsavel.value,
        "parTelefone":formParceiroTelefone.value,
        "parEmail":formParceiroEmail.value,
        "parNni":formParceiroNni.value,
        "investMensal":formInvestMensal.value,
        "investInstal":formInvestInstal.value,
        "fatMensal":formFaturamentoMensal.value,
        "fatInstal":formFaturamentoInstal.value,
        "targetMensal": targetMensal.value,
        "targetInstalacao": targetInstalacao.value,
        "caixaNome":formCaixaNome.value,
        "caixaCord":formCaixaCord.value,
        "CaixaReservaSwitch": formCaixaReservaSwitch.value,
        "Obs":formObs.value,
        "atividade":atividade,
        "redeAtivacao":redeAtivacao,
        "ltlEndPa": formLtlEndPa.value,
        "ltlCordPa": formLtlCordPa.value,
        "ltlSwtPa": formLtlSwtPa.value,
        "ltlEndPb": formLtlEndPb.value,
        "ltlCordPb": formLtlCordPb.value,
        "ltlSwtPb": formLtlSwtPb.value,
        "ldEnd": formLdEnd.value,
        "ldCord": formLdCord.value,
        "ldSwt": formLdSwt.value,
        "ldBlIp": formLdBlIp.value,
        "UpgradeVel":formUpgradeVel.value,
        "UpgradeFacil":formUpgradeFacil.value,
        
        
    };
    // var newJson = JSON.stringify(dict);
    console.log(dict);
    // if(dict === null || dict.trim() === "") return;
    taskArr.push(dict);
    console.log(taskArr);
    localStorage.setItem("savedTasks", JSON.stringify(taskArr));
    updateView();
    
}

const fieldsDados = (cliente) => {
    document.getElementById("form-cliente-nome").value = cliente.clienteNome;
    document.getElementById("form-cliente-endereco").value = cliente.clienteEndereco;
    document.getElementById("form-cliente-servico").value = cliente.clienteServico;
    document.getElementById("form--cliente-tecnologia").value = cliente.clienteTecnologia;
    document.getElementById("form-cliente-velocidade").value = cliente.clienteVelocidade;
    document.getElementById("form-cliente-chamado").value = cliente.clienteChamado;
    document.getElementById("form-tec-nome").value = cliente.tecNome;
    document.getElementById("form-tec-telefone").value = cliente.tecTelefone;
    document.getElementById("form-tec-email").value = cliente.tecEmail;
    document.getElementById("form-parceiro-nome").value = cliente.parNome;
    document.getElementById("form-parceiro-responsavel").value = cliente.parResponsavel;
    document.getElementById("form-parceiro-telefone").value = cliente.parTelefone;
    document.getElementById("form-parceiro-Email").value = cliente.parEmail;
    document.getElementById("form-parceiro-nni").value = cliente.parNni;
    document.getElementById("form-invest-mensal").value = cliente.investMensal;
    document.getElementById("form-invest-instal").value = cliente.investInstal;
    document.getElementById("form-faturamento-mensal").value = cliente.fatMensal;
    document.getElementById("form-faturamento-instal").value = cliente.fatInstal;
    document.getElementById("form-caixa-nome").value = cliente.caixaNome;
    document.getElementById("form-caixa-cord").value = cliente.caixaCord;
    document.getElementById("form-ltl-end-pa").value = cliente.ltlEndPa;
    document.getElementById("form-ltl-cord-pa").value = cliente.ltlCordPa;
    document.getElementById("form-ltl-swt-pa").value = cliente.ltlSwtPa;
    document.getElementById("form-ltl-end-pb").value = cliente.ltlEndPb;
    document.getElementById("form-ltl-cord-pb").value = cliente.ltlCordPb;
    document.getElementById("form-ltl-swt-pb").value = cliente.ltlSwtPb;
    document.getElementById("form-ld-end").value = cliente.ldEnd;
    document.getElementById("form-ld-cord").value = cliente.ldCord;
    document.getElementById("form-ld-swt").value = cliente.ldSwt;
    document.getElementById("form-ld-blIp").value = cliente.ldBlIp;
    document.getElementById("form-obs").value = cliente.Obs;
    document.getElementById("form-upgrade-vel").value = cliente.UpgradeVel;
    document.getElementById("form-upgrade-facil").value = cliente.UpgradeFacil;
    document.getElementById("form-caixa-reserva-switch").value = cliente.CaixaReservaSwitch;
};
const editTask = (id) => {

    const taskIndex = parseInt(id[0]);
    const cliente = taskArr[taskIndex];
    fieldsDados(cliente);
    taskArr.splice(taskIndex, 1);
    localStorage.setItem("savedTasks", JSON.stringify(taskArr));
    updateView();
    showAddPage();
    
}

const deleteTask = (id) => {

    const taskIndex = parseInt(id[0]);
    taskArr.splice(taskIndex, 1);
    localStorage.setItem("savedTasks", JSON.stringify(taskArr));
    updateView();
}

const doTask = (id) => {

    const taskIndex = parseInt(id[0]);
    taskArr[taskIndex].isDone = !taskArr[taskIndex].isDone;
    localStorage.setItem("savedTasks", JSON.stringify(taskArr));
    updateView();
}

function chamarList() {
    const savedTasks = JSON.parse(localStorage.getItem("savedTasks"));
    if(savedTasks !== null) taskArr = [...savedTasks];
    updateView();
};


const buttonLimparTudo = document.getElementById("task-clear-btn").addEventListener("click", () => {

    localStorage.clear();
    taskArr = [];
    updateView();
});

// Lista ade eventos
btnPageAdd.addEventListener("click", showAddPage);
formServButton.addEventListener("click", showServPage);
loadForms.addEventListener("click", returnForm);
btnPageSearch.addEventListener("click", showSearchPage);
btnSaveCopy.addEventListener("click", SaveCopyScript);
formGetClienteDados.addEventListener('click', GetDados);



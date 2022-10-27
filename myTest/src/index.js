const Web3 = require('web3');

const web3 = new Web3('HTTP://127.0.0.1:7545');

console.log(web3.version);

const fun = async function() {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    const balance = await web3.eth.getBalance(accounts[0]);
    console.log(balance);
    web3.eth.defaultAccount = accounts[2];
    console.log('Default block:', web3.eth.defaultBlock);

    const res = await web3.eth.sendTransaction({
        from: accounts[0], // 如果不指定from，会使用defaultAccount
        to: accounts[1],
        value: web3.utils.toWei('1', 'ether')
    });
    // console.log(res);

    const n1 = web3.utils.toBN('66666666666666666666666666666666666666666666666666666661111111111111111');
    const n2 = web3.utils.toBN('111');
    console.log(n1.add(n2).toString());
}

// 单位转换
function unitChange() {
    console.log('单位转换成Wei：');
    console.log(web3.utils.toWei('1', 'ether'));
    console.log(web3.utils.toWei('1', 'Gwei'));

    console.log('从Wei转换为ether');
    console.log(web3.utils.fromWei('1000000000', 'ether'));
}

async function start() {
    await fun();
    unitChange();
}

start();



import { ethers } from 'ethers';

const url = 'http://127.0.0.1:9933';
const customHttpProvider = new ethers.providers.JsonRpcProvider(url);
// console.log(customHttpProvider);




function stringtobytes(string:string){
  const hex = ethers.utils.toUtf8Bytes(string);
  return ethers.utils.hexlify(hex);
}


const token_uri = stringtobytes('http');


const to = '0xee38Efa7f942B20D33e1f8e3F56c284E54127fCE';
const id = '1';
const amount = '1000';

// Variables
const account_from = {
  privateKey: 'c8131c5f41627f63879b862d09a06338c3b36b40a28c0364635a382661621453',
};


// Create Wallet
const wallet = new ethers.Wallet(account_from.privateKey, customHttpProvider);


const main = async () => {
  const contractAddress = '0xFDFFFFFF00000000000000000000000000000001';
  const abi = [
    'function create(bytes token_uri) public',
    'function mint(address to, uint256 id,uint256 amount) public',
  ];
  const myContract = new ethers.Contract(contractAddress,abi,wallet);
  console.log('----------',myContract);


  // const result1 = await myContract.create(token_uri,{
  //   gasLimit: '5000000',
  //   gasPrice: '1000000000',
  // });
  // console.log('result', result1);

  const result2 = await myContract.mint(to,id,amount,{
    gasLimit: '5000000',
    gasPrice: '1000000000',
  });

  console.log('result', result2);
  // const name = await myContract.name();
  // console.log('name', name);
  // const balance = await myContract.balanceOf(from);
  // console.log('balance', balance.toString());

  // const result = await myContract.transfer(to, amount);
  // console.log('result', result);

  // const estimatedGas = await myContract.estimateGas.mint(from, amount);
  // console.log('estimatedGas', estimatedGas.toString());

  // const result = await myContract.mint(from, amount, {
  //   gasLimit: '5000000',
  //   gasPrice: '1000000000',
  // });
  // console.log('result', result);
};

main();

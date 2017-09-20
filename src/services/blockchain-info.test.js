import * as blockchain from './blockchain-info'

it('getAddress() retrieves info for a specific address', () => {
  const address = '1AJbsFZ64EpEfS5UAjAfcUG8pH8Jn3rn1F'
  return blockchain.getAddress(address)
    .then(res => {
      console.log('res', res)
      expect(res.address).toEqual(address)})
});

it('getTx() retrieves a specific transaction', () => {
  const tx_hash = 'b6f6991d03df0e2e04dafffcd6bc418aac66049e2cd74b80f14ac86db1e3f0da'
  return blockchain.getTx(tx_hash)
    .then(res => expect(res.hash).toEqual(tx_hash))
});

it('getUnconfirmedTxs() retrieves a list of unconfirmed transactions', () => {
  return blockchain.getUnconfirmedTxs()
    .then(res => expect(res).toHaveProperty('txs'))
});

it('getLatestBlock() retrieves the latest block', () => {
  return blockchain.getLatestBlock()
    .then(res => expect(res).toHaveProperty('hash'))
});

it('getBlock() retrieves a specific block', () => {
  return blockchain.getBlock('154595')
    .then(res => expect(res.hash).toEqual('000000000000085a032822ec22783149b3af4d590634038c7dfe217f2b3c68bf'))
});

it('getBlocks() retrieves the latest blocks', () => {
  return blockchain.getBlocks(new Date().getTime())
    .then(res => expect(res).toHaveProperty('blocks'))
});

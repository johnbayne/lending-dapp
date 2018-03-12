import IpfsAPI from 'ipfs-api'

class IpfsQueries {
  constructor () {
    self.ipfs = IpfsAPI()
  }

  getHash (hash) {
    return self.ipfs.get(hash)
  }

  addNameUseHash (name, use) {
    // TODO: Discuss 'salt' with team. Has pros & cons
    const ipfsData = JSON.stringify({name: name, use: use, salt: Math.random()})
    const buf = new Buffer(ipfsData)
    return self.ipfs.add(buf)
  }
}

export default new IpfsQueries()

import dataMock from './filter-data-mock'

const generateResult = (query) => {
  const sortData = (arr, key) => arr.sort((a, b) => a[key] - b[key])

  switch (query) {
    case 'Id':
      return sortData(dataMock, 'id')
    case 'Segment':
      return sortData(dataMock, 'segment')
    default:
     return dataMock
  }
}

async function handler(req, res) {

  if (req.method === 'GET') {
    try {
      res.status(200).json({ resp: generateResult(req.query.sortBy)  });
    } catch (e) {
      const message = "error message"
      res.status(500).json({ resp: message });
    }
  }
}

module.exports = handler;

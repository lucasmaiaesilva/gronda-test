import dataMock from './filter-data-mock'
import sortId from './filter-mock-sort-id'
import sortSegment from './filter-mock-sort-segment'
import sortBestAvg from './filter-mock-sort-best-avg'

const generateResult = (query) => {
  switch (query) {
    case 'Id':
      return sortId
    case 'Segment':
      return sortSegment
    case 'Best NPS avg':
      return sortBestAvg
    case 'Worst NPS avg':
      return sortBestAvg
        .reverse()
    default:
      return dataMock
  }
}

async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      console.log(req.query.sortBy)
      res.status(200).json({ resp: generateResult(req.query.sortBy)  });
    } catch (e) {
      const message = "error message"
      res.status(500).json({ resp: message });
    }
  }
}

module.exports = handler;

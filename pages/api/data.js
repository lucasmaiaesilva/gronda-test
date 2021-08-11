import dataMock from './data-mock'

async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      res.status(200).json({ resp: dataMock });
    } catch (e) {
      const message = "error message"
      res.status(500).json({ resp: message });
    }
  }
}

module.exports = handler;

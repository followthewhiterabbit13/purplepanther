import axios from 'axios'
import { segmentPK } from './segment'

const url = 'https://api.segment.io/v1/page'

const headers = {
  AUthorization: 'Basic ' + segmentPK,
  'Content-Type': 'application/json',
}

const body = {
  userId: 'tester',
  name: 'Page testing HTTP API',
  timestamp: Date.now(),
}

describe('Segment', () => {
  describe('Page', () => {
    it('should successfully send a page view event', async () => {
      const res = await axios.post(url, body, {
        headers: headers,
      })
      expect(res.status).toEqual(200)
    })
  })
})

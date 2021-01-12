const key = process.env.REACT_APP_TEST

test('Code Using Environment Variables works - key', () => {
   expect(key).toEqual('d7a86wd7a8wd6aw87d6aw8d7')
 })

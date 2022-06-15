exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'SUNNY',
      age: 31,
      email: 'esjy0214@gmail.com'
    })
  }
}
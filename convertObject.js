const obj = {
  'address.street':'jalan sakura',
  'address.province':'banten',
  'address.city':'tangerang',
  'person.name':'john',
  'person.email':'john@doe.com',
  'userType':'admin',
  'accessLevel':'QA'
}

const convertObject = (objParam) => {
  let newObject = {}
  
  newObject['address'] = {
    'street': objParam['address.street'],
    'province': objParam['address.province'],
    'city': objParam['address.city'],
  }
  newObject['person'] = {
    'name':objParam['person.name'],
    'email':objParam['person.email'],
  }
  newObject['userType'] = objParam['userType']
  newObject['accessLevel'] = objParam['accessLevel']

  console.log(JSON.stringify(newObject, null, '\t'))
}

convertObject(obj)
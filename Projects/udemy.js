const giveAccessTo = (name) =>
  'Access Granted to ' + name;

function authenticate(person) {
  
  return giveAccessTo(person.name)
}

function letPerson(person, fn) { // ++ We now tell the function what data to use when we call it not when we define it + tell it what to do.
  if (person.level === 'admin') {
    return fn(person)
  } else if (person.level === 'user') {
    return fn(person)
  }
}

function sing(person) {
  return 'la la la my name is ' + person.name
}

var answer = letPerson({level: "admin", name: "Sally"}, authenticate)
console.log(answer)

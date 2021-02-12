
// Object protection
const person = {
  name:"smith"
}

const f = o => Object.freeze(o);
const s = o => Object.seal(o);
const p = o => Object.preventExtensions(o);


Object.prototype.protect = function(){
  return f(s(p(this)));
}

person.protect()
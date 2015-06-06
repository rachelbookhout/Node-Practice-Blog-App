var assert = require ('assert');
describe('String#split', function(){
  it ('shoud return an array', function(){
    assert(Array.isArray('a,b,c'.split(',')));
  });
})

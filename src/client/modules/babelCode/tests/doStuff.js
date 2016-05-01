import { expect } from 'chai';
import doStuff from '../mycode';

describe('doStuff', ()=>{
  it("works",()=>{
    expect(doStuff()).to.equal("ok");
  });
});



let app = getApp();

// console.log(app.globalData);
// let bb = require('../../utils/common');
// console.log(bb);
// console.log(bb.c(bb.a, bb.b));

// import {a,b,f,c as leo,kk} from '../../utils/common';
// console.log(a,b,leo,kk);
// console.log(f(a, b));

// import {a,b,c,d} from '../../utils/common.js';
// console.log(a,b,c,d);

import json,{g,rdm} from '../../utils/common.js';
// console.log(json.a, json.b, json.c, json.d);
// console.log(g);

var p = require('./l.js');
// console.log(p);


// console.log(rdm(0,255));
Page({
  data:{
   r: rdm(0, 255),
   g: rdm(0,255),
   b: rdm(0,255)
  },
  onLoad() {
    setInterval(() => {
      this.setData({
        r: rdm(0, 255),
        g: rdm(0, 255),
        b: rdm(0, 255)
      })
    }, 1000)
  }
})
//iterator object to iterate over strings

exports.init = function(string) {
  return {
    str:string,
    ind:0,
    inc:function(){
      this.ind++;
    },
    dec:function(){
      this.ind--;
    }
  };
};
/* test
var b = exports.init("food");
b.inc();
console.log(JSON.stringify(b));
*/

//experimental infix operator parsing

//parses any infix operator

function OpNode(op, left, right) {

  this.op = op;
  this.left = left || null;
  this.right = right || null;

//converts binary tree into string
  OpNode.prototype.toString = function () {
    if(typeof this.left === 'string') {
      if(typeof this.right === 'string') {
        return this.left + " " + this.op + " " + this.right;
      }
      else return this.left + " " + this.op + " " + this.right.toString();
    }
    else if(this.right === 'string') {
      return this.left.toString() + " " + this.op + " " + this.right;
    }
    else return this.left.toString() + " " + this.op + " " + this.right.toString();
  };
}

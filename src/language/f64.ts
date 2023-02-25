import { Tag } from "../tag";
import { Type } from "../type";
import { Feat } from "./feat";

export class F64 extends Feat {
  constructor(l?, p?, g?) {
    super(l, p, g);
  }
  static k = "F64";
  lex() {
    return new Type("F64", Tag.DTYPE);
  }
  parse() {
    throw new Error("Method not implemented.");
  }
  gen() {
    throw new Error("Method not implemented.");
  }
}

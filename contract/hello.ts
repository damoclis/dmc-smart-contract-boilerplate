import { Contract } from "dmc-lib";

@database("people")
class Person implements Serializable {
  @key
  name: string;
}

class Hello extends Contract {
  @action
  hi(): void {

  }
}

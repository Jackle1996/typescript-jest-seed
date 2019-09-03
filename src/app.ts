interface KeyPair<keyType, valType>  {
  key: keyType;
  value: valType;
}

let kv1: KeyPair<string, string> = { key:"key", value:"value" };
let kv2: KeyPair<number, string> = { key:1, value:"Steve" };
let kv3: KeyPair<number, number> = { key:1, value:12345 };
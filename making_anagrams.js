const s1 = "absdjkvuahdakejfnfauhdsaavasdlkj";
const s2 = "djfladfhiawasdkjvalskufhafablsdkashlahdfa";

function makingAnagrams(s1, s2) {
  let counter = 0;
  for (let i = 0; i < s1.length; i++) {
    if (!s2.includes(s1[i])) counter++;
    else s2 = s2.replace(s1[i], "");
  }
  return counter + s2.length;
}

console.log(makingAnagrams(s1, s2));

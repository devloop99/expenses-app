console.log("phone ");

function telephoneCheck(str) {
  let match1 = !!str.match(/^\d{10}$/g);
  let match2 = !!str.match(/^\d{3}-\d{3}-\d{4}$/g);
  let match3 = !!str.match(/^\d{3} \d{3} \d{4}$/g);
  let match4 = !!str.match(/^1 \d{3} \d{3} \d{4}$/g);
  let match5 = !!str.match(/^\(\d{3}\)\d{3}-\d{4}$/g);
  let match6 = !!str.match(/^\(\d{3}\) \d{3}-\d{4}$/g);
  let match7 = !!str.match(/^1\(\d{3}\)\d{3}-\d{4}$/g);
  let match8 = !!str.match(/^1 \(\d{3}\) \d{3}-\d{4}$/g);
  let match9 = !!str.match(/^1 \d{3}-\d{3}-\d{4}$/g);
  let finalMatch =
    match1 ||
    match2 ||
    match3 ||
    match4 ||
    match5 ||
    match6 ||
    match7 ||
    match8 ||
    match9;
  return finalMatch;
}

console.log(telephoneCheck("555-555-55s55"));

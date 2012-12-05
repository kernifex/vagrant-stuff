db = db.getSiblingDB("OBP006");
db.temp.insert({"blub":"blubblub"});
db.dropDatabase();
var balance_start = Math.floor(1000000*(Math.random()-Math.random()))/100;
var balance = balance_start;
var date=new Date();
var this_acc=newAcc();
db.obpenvelopes.insert(newEnv());
db.obpenvelopes.insert(newEnv());
db.obpenvelopes.insert(newEnv());
db.obpenvelopes.insert(newEnv());
db.obpenvelopes.insert(newEnv());
db.accounts.insert({"number" : "0580591101", "otherAccounts" : "", "holder" : "Music Pictures Limited", "bank" : { "name" : "", "IBAN" : "", "national_identifier" : "" }, "kind" : "current", "anonAccess" : true, "bankPermalink" : "postbank", "permalink" : "tesobe", "bankName" : "Postbank"});
function ISODateString(d){
 function pad(n){return n<10 ? '0'+n : n}
 return d.getUTCFullYear()+'-'
     + pad(d.getUTCMonth()+1)+'-'
     + pad(d.getUTCDate())+'T'
     + pad(d.getUTCHours())+':'
     + pad(d.getUTCMinutes())+':'
     + pad(d.getUTCSeconds())+'.001Z'
}
function newBank() {
 return {
  "name" : "bank"+Math.round(100*Math.random()),
  "IBAN" : "DE"+Math.round(10000000000*Math.random()),
  "national_identifier" : ""
 }
}
function newAcc() {
 return {
    "number" : Math.round(100000000*Math.random()),
    "kind" : "kind"+Math.round(100*Math.random()),
    "holder" : "holder"+Math.round(100*Math.random()),
    "bank" : newBank()
   }
}
function newValue() {
 return {
    "amount" : Math.floor(10000*(Math.random()-Math.random()))/100,
    "currency" : "EUR"
 }
}
function newComments() {
 return [{"text": "comment1", "email" : "bla@blub.com"}]
}
function newEnv() {
 date = new Date(date.getTime() - Math.round(100000000*Math.random()));
 var value = newValue();
 balance += value.amount;
 balance = Math.round(balance*100)/100
 return {
  "obp_comments" : newComments(),
  "obp_transaction" : {
   "details" : {
    "new_balance" : {
     "amount" : balance,
     "currency" : "EUR"
    },
    "other_data" : "customer"+Math.round(100*Math.random()),
    "completed" : ISODateString(date),
    "type_en" : "",
    "value" : value,
    "posted" : ISODateString(date),
    "type_de" : "Type"+Math.round(100*Math.random())
   },
   "this_account" : this_acc,
   "other_account" : newAcc()
  },
  "narrative" : ""
 }
}

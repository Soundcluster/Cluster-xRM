import("lib_tablecomp");

var row = a.valueofObj("$local.rowdata");
var fields = [
[1, "OPTIONNAME"],
[2, "OPTIONVALUE"],
[3, "ROLEID"]
];

updtable(fields, row, "AOSYS_CONFIGURATION", "OPTIONID");
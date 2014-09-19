import("lib_relation");

var rowid = a.decodeFirst(a.valueof("$comp.relTree"));
var frame = "";

switch( getRelationType(rowid))
{
    case 1 :
        frame = "ORG"; 
        break;
			
    case 2 :
    case 3 :
        frame = "PERS"; 
        break;
}

var condition = "RELATIONID = '" + rowid + "'";

if ( a.valueof("$global.upwardLink") == "link")
    a.openLinkedFrame(frame, condition, false, a.FRAMEMODE_SHOW, "");
else
    a.openFrame(frame, condition, false, a.FRAMEMODE_SHOW); //checked by BH-090311
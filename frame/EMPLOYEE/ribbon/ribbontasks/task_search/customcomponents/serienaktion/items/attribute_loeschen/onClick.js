import("lib_attr");

var condition = getGrantCondition( a.valueof("$sys.currentimagename"), a.valueof("$sys.selection"), undefined, "EDIT" );
//var rowssql = "select RELATIONID from RELATION join PERS on RELATION.PERS_ID = PERS.PERSID where " + condition + " and RELATIONID ";
var rowssql = "select EMPLOYEEID from EMPLOYEE where " + condition + " and EMPLOYEEID ";

runAttr( rowssql, a.valueof("$image.FrameID"), true);
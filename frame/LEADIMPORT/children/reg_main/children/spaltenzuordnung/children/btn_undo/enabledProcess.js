a.rs(  a.valueof("$comp.IMPORTDATE") != "" && parseInt(a.valueof("$sys.date"))- parseInt(a.valueof("$comp.IMPORTDATE")) < date.ONE_DAY 
								 && a.valueof("$sys.workingmode")  == a.FRAMEMODE_SHOW  );
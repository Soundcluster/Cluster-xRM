import("lib_calendaruser");

var query = getPossibleCalendarUserSQL(a.valueof("$comp.login"));
a.setValue("$comp.calendar_write", a.encodeMS(a.sql(query, a.SQL_COLUMN)));
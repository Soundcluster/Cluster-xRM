a.rs("PERS.PERSID IN ( SELECT RELATION.PERS_ID   FROM RELATION   WHERE ( " + a.valueof("$local.condition") + ") ) ");
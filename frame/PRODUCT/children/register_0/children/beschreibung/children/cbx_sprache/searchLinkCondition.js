a.rs("PRODUCT.PRODUCTID IN ( SELECT ROW_ID FROM TEXTBLOCK WHERE ( " + a.valueof("$local.condition") + ") ) ");